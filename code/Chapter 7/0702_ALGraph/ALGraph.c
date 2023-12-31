/*==================
 * 图的邻接表存储表示
 ===================*/

#include "ALGraph.h"

// 录入数据的源文件；fp为null时，说明需要从控制台录入
static FILE* fp = NULL;

/*
 * IncInfo指示该图/网的边/弧上是否存在附加信息。
 * 如果其值不为0，则表示无附加信息，否则，表示存在附加信息。
 */
Boolean IncInfo = FALSE;

// 访问标志数组，记录访问过的顶点
static Boolean visited[MAX_VERTEX_NUM];

// 函数变量
static Status (* VisitFunc)(VertexType e);


/*
 * 创建
 *
 *【备注】
 *
 * 教材中默认从控制台读取数据。
 * 这里为了方便测试，避免每次运行都手动输入数据，
 * 因而允许选择从预设的文件path中读取测试数据。
 *
 * 如果需要从控制台读取数据，则path为NULL，或path[kind]为""。
 * 如果需要从文件中读取数据，则需要在path中填写文件名信息。
 */
Status CreateGraph(ALGraph* G, char* path[]) {
    int readFromConsole;    // 是否从控制台读取数据
    int kind;
    Status flag;

    printf("请输入图的类型(0-有向图 │ 1-有向网 │ 2-无向图 │ 3-无向网)：");
    scanf("%d", &kind);

    // 类型不合规
    if(kind < 0 || kind > 3) {
        return ERROR;
    }

    // 如果没有文件路径信息，则从控制台读取输入
    readFromConsole = (path == NULL) || strcmp(path[kind], "") == 0;

    // 需要从文件读取
    if(readFromConsole) {
        (*G).kind = kind;   // 记录图/网的类型
    } else {
        // 打开文件，准备读取测试数据
        fp = fopen(path[kind], "r");
        if(fp == NULL) {
            return ERROR;
        }

        // 录入图的类型
        ReadData(fp, "%d", &((*G).kind));
    }

    // 随机创建有向图/网或无向图/网的一种
    switch((*G).kind) {
        case DG:
            flag = CreateDG(G);
            break;
        case DN:
            flag = CreateDN(G);
            break;
        case UDG:
            flag = CreateUDG(G);
            break;
        case UDN:
            flag = CreateUDN(G);
            break;
        default:
            flag = ERROR;
            break;
    }

    if(fp != NULL) {
        fclose(fp);
        fp = NULL;
    }

    return flag;
}
/*
 * 录入边/弧的相关附加信息
 */
static void Input(ALGraph G, InfoType** info) {
    int weight;

    // 在"网"的情形下需要录入权值信息
    if(G.kind == DN || G.kind == UDN) {
        *info = (InfoType*) malloc(sizeof(InfoType));
        ReadData(fp, "%d", &weight);

        (*info)->weight = weight;
    }
}

/*
 * 查找
 *
 * 返回顶点u在图/网中的位置
 */
int LocateVex(ALGraph G, VertexType u) {
    int i;

    for(i = 0; i < G.vexnum; i++) {
        if(G.vertices[i].data == u) {
            return i;
        }
    }

    return -1;
}

/*
 * 构造一个边/弧结点(仅限内部使用)
 */
static ArcNode* newArcNodePtr(int adjvex, ArcNode* nextarc, InfoType* info) {
    ArcNode* p = (ArcNode*) malloc(sizeof(ArcNode));
    if(!p) {
        exit(-2);
    }

    // 该弧所指向的顶点的位置
    p->adjvex = adjvex;
    // 指向下一条弧的指针
    p->nextarc = nextarc;
    // 附加信息
    p->info = info;

    return p;
}

/*
 * 插入边/弧<v, w>
 *
 * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。
 * 对于图/网来说，可以在可变参数中列出边/弧的附加信息。
 *
 * 注：此处接收的参数与MGraph有些不一样：网的附加信息中包含了各条边/弧的权值。
 */
Status InsertArc(ALGraph* G, VertexType v, VertexType w, ...) {
    int tail, head, k, count;
    ArcNode* r;
    ArcNode* pre;
    Boolean overlay = FALSE;    // 是否为覆盖添加
    InfoType* info = NULL;      // 边/弧的附加信息
    va_list ap;

    tail = LocateVex(*G, v); // 获取顶点v在顶点集中的位置
    if(tail == -1) {
        return ERROR;  // 指定的顶点不存在
    }

    head = LocateVex(*G, w); // 获取顶点w在顶点集中的位置
    if(head == -1) {
        return ERROR;  // 指定的顶点不存在
    }

    // 拒绝环
    if(tail == head) {
        return ERROR;
    }

    // 如果边/弧上存在附加信息
    if(IncInfo) {
        va_start(ap, w);                // 在w后查询首个可变参数
        info = va_arg(ap, InfoType*);   // 获取附加信息
        va_end(ap);
    }

    /* 接下来，需要查找合适的插入位置 */

    for(count = 0; count < 2; count++) {
        pre = NULL;
        // 指向以tail为尾的首条边/弧
        r = G->vertices[tail].firstarc;
        while(r != NULL && r->adjvex < head) {
            pre = r;
            r = r->nextarc;
        }

        // 遇到了相同位置的结点
        if(r != NULL && r->adjvex == head) {
            r->info = info; // 复用该结点
            overlay = TRUE; // 发生了覆盖
        } else {
            if(pre == NULL) {
                G->vertices[tail].firstarc = newArcNodePtr(head, r, info);
            } else {
                pre->nextarc = newArcNodePtr(head, r, info);
            }
        }

        // 如果当前图/网是无向的，需要考虑对称性
        if((G->kind == UDG || G->kind == UDN) && tail != head) {
            // 颠倒i和j
            k = tail;
            tail = head;
            head = k;
        } else {
            break;  // 如果是有向的，可以结束了
        }
    }

    // 在非覆盖的情形下，才考虑更新边/弧的数量
    if(!overlay) {
        (*G).arcnum++;  // 不论有向无向，边/弧数只增一
    }

    return OK;
}
/*
 * 构造有向图
 */
static Status CreateDG(ALGraph* G) {
    int i, k;
    int vexnum, arcnum;
    VertexType v1, v2;
    InfoType* info = NULL;

    (*G).vexnum = (*G).arcnum = 0;

    ReadData(fp, "%d", &vexnum);    // 录入顶点数
    ReadData(fp, "%d", &arcnum);    // 录入弧数
    ReadData(fp, "%d", &IncInfo);   // 判断弧上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vertices[i].data));
        (*G).vertices[i].firstarc = NULL;
        (*G).vexnum++;
    }

    // 录入弧的信息
    for(k = 0; k < arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);

        // 如果需要录入弧的其他附加信息
        if(IncInfo) {
            // 最后录入附加信息
            Input(*G, &info);
        }

        // 插入弧<v1, v2>
        InsertArc(G, v1, v2, info);
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}


/*
 * 构造有向网
 */
static Status CreateDN(ALGraph* G) {
    int i, k;
    int vexnum, arcnum;
    VertexType v1, v2;
    InfoType* info = NULL;

    (*G).vexnum = (*G).arcnum = 0;

    ReadData(fp, "%d", &vexnum); // 录入顶点数
    ReadData(fp, "%d", &arcnum); // 录入弧数
    ReadData(fp, "%d", &IncInfo);// 判断弧上是否包含附加信息(此处应当包含)
    IncInfo = 1;    // 强制将权值录入到附加信息中

    // 录入顶点集
    for(i = 0; i < vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vertices[i].data));
        (*G).vertices[i].firstarc = NULL;
        (*G).vexnum++;
    }

    // 录入弧的信息
    for(k = 0; k < arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);

        // 如果需要录入弧的其他附加信息
        if(IncInfo) {
            // 最后录入附加信息(此处需要录入网的权值)
            Input(*G, &info);
        }

        // 插入弧<v1, v2>
        InsertArc(G, v1, v2, info);
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * 构造无向图
 */
static Status CreateUDG(ALGraph* G) {
    int i, k;
    int vexnum, arcnum;
    VertexType v1, v2;
    InfoType* info = NULL;

    (*G).vexnum = (*G).arcnum = 0;

    ReadData(fp, "%d", &vexnum); // 录入顶点数
    ReadData(fp, "%d", &arcnum); // 录入边数
    ReadData(fp, "%d", &IncInfo);// 判断边上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vertices[i].data));
        (*G).vertices[i].firstarc = NULL;
        (*G).vexnum++;
    }

    // 录入边的信息
    for(k = 0; k < arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);

        // 如果需要录入边的其他附加信息
        if(IncInfo) {
            // 最后录入附加信息
            Input(*G, &info);

        }

        // 插入边<v1, v2>
        InsertArc(G, v1, v2, info);
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * 构造无向网
 */
static Status CreateUDN(ALGraph* G) {
    int i, k;
    int vexnum, arcnum;
    VertexType v1, v2;
    InfoType* info = NULL;

    (*G).vexnum = (*G).arcnum = 0;

    ReadData(fp, "%d", &vexnum); // 录入顶点数
    ReadData(fp, "%d", &arcnum); // 录入边数
    ReadData(fp, "%d", &IncInfo);// 判断边上是否包含附加信息
    IncInfo = 1;    // 强制将权值录入到附加信息中

    // 录入顶点集
    for(i = 0; i < vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vertices[i].data));
        (*G).vertices[i].firstarc = NULL;
        (*G).vexnum++;
    }

    // 录入边的信息
    for(k = 0; k < arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);

        // 如果需要录入边的其他附加信息
        if(IncInfo) {
            // 最后录入附加信息(此处需要录入网的权值)
            Input(*G, &info);
        }

        // 插入边<v1, v2>
        InsertArc(G, v1, v2, info);
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * 销毁
 *
 * 邻接表存储的图需要释放内存。
 */
Status DestroyGraph(ALGraph* G) {
    int k;
    ArcNode* pre, * r;

    // 释放链表空间
    for(k = 0; k < G->vexnum; k++) {
        r = G->vertices[k].firstarc;

        while(r != NULL) {
            pre = r;
            r = r->nextarc;
            free(pre);
        }

        G->vertices[k].firstarc = NULL;
    }

    (*G).vexnum = 0;
    (*G).arcnum = 0;
    IncInfo = 0;

    return OK;
}

/*
 * 取值
 *
 * 返回索引v处的顶点值
 */
VertexType GetVex(ALGraph G, int v){
    if(v < 0 || v >= G.vexnum){
        return '\0';    // 指定的顶点不存在
    }

    return G.vertices[v].data;
}

/*
 * 赋值
 *
 * 将顶点v赋值为value
 */
Status PutVex(ALGraph* G, VertexType v, VertexType value) {
    int k;

    // 首先需要判断该顶点是否存在
    k = LocateVex((*G), v);
    if(k == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    // 替换头结点
    (*G).vertices[k].data = value;

    /* 链表中的元素存储的是顶点的位置，所以无需遍历链表来替换目标值 */

    return OK;
}

/*
 * 首个邻接点
 *
 * 返回顶点v的首个邻接点
 */
int FirstAdjVex(ALGraph G, VertexType v) {
    int k;
    ArcNode* r;

    // 首先需要判断该顶点是否存在
    k = LocateVex(G, v);
    if(k == -1) {
        return -1;    // 指定的顶点不存在
    }

    r = G.vertices[k].firstarc;
    if(r == NULL) {
        return -1;
    } else {
        return r->adjvex;
    }
}

/*
 * 下一个邻接点
 *
 * 返回顶点v的(相对于w的)下一个邻接点
 */
int NextAdjVex(ALGraph G, VertexType v, VertexType w) {
    int kv, kw;
    ArcNode* r;

    // 首先需要判断该顶点是否存在
    kv = LocateVex(G, v);
    if(kv == -1) {
        return -1;    // 指定的顶点不存在
    }

    // 首先需要判断该顶点是否存在
    kw = LocateVex(G, w);
    if(kw == -1) {
        return -1;    // 指定的顶点不存在
    }

    r = G.vertices[kv].firstarc;
    if(r == NULL) {
        return -1;  // 链表为空
    }

    // 在链表中查找w
    while(r != NULL && r->adjvex < kw) {
        r = r->nextarc;
    }

    // 如果没找到w
    if(r == NULL) {
        return -1;
    }

    // 如果找到了w，但是w后面没有别的顶点，那么也无法返回邻接点
    if(r->adjvex == kw && r->nextarc != NULL) {
        return r->nextarc->adjvex;
    }

    return -1;
}

/*
 * 插入顶点
 *
 * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系
 */
Status InsertVex(ALGraph* G, VertexType v) {
    int k;

    // 顶点数过多
    if((*G).vexnum == MAX_VERTEX_NUM) {
        return ERROR;
    }

    // 首先需要判断该顶点是否存在
    k = LocateVex(*G, v);
    if(k >= 0) {
        return ERROR;    // 指定的顶点存在时，无需重复添加
    }

    G->vertices[(*G).vexnum].data = v;
    G->vertices[(*G).vexnum].firstarc = NULL;

    (*G).vexnum++;

    return OK;
}

/*
 * 删除顶点
 *
 * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系
 */
Status DeleteVex(ALGraph* G, VertexType v) {
    int k, i;
    ArcNode* pre, * r;

    // 首先需要判断该顶点是否存在
    k = LocateVex(*G, v);
    if(k == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    // 找到以结点v出发的链表，释放该链表上所有结点
    r = G->vertices[k].firstarc;
    while(r != NULL) {
        pre = r;
        r = r->nextarc;
        free(pre);

        (*G).arcnum--;
    }

    G->vertices[k].firstarc = NULL;

    // 遍历其它所有链表，删除那些指向顶点v的弧；而且，下标超过k的顶点，其下标值需要递减
    for(i = 0; i < G->vexnum; i++) {
        pre = NULL;
        r = G->vertices[i].firstarc;
        while(r != NULL && r->adjvex < k) {
            pre = r;
            r = r->nextarc;
        }

        // 链表上所有顶点的下标均小于k
        if(r == NULL) {
            continue;
        }

        if(r->adjvex == k) {
            // 从开头删掉结点v
            if(pre == NULL) {
                G->vertices[i].firstarc = r->nextarc;

                // 从中间某个位置删掉结点v
            } else {
                pre->nextarc = r->nextarc;
            }

            free(r);

            // 如果这是有向的图/网，依然需要递减边/弧的数量
            if((*G).kind == DG || (*G).kind == DN) {
                (*G).arcnum--;
            }
        }

        // 再次确定r的位置
        if(pre == NULL) {
            r = G->vertices[i].firstarc;
        } else {
            r = pre->nextarc;
        }

        // 下标超过k的顶点，需要递减其下标
        while(r != NULL && r->adjvex > k) {
            r->adjvex -= 1;
            r = r->nextarc;
        }
    }

    // 顶点集前移
    for(i = k + 1; i < (*G).vexnum; i++) {
        G->vertices[i - 1] = G->vertices[i];
    }

    // 顶点数递减
    (*G).vexnum--;

    return OK;
}

/*
 * 删除边/弧<v, w>
 */
Status DeleteArc(ALGraph* G, VertexType v, VertexType w) {
    int tail, head, k, count;
    ArcNode* r;
    ArcNode* pre;

    tail = LocateVex(*G, v);
    if(tail == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    head = LocateVex(*G, w);
    if(head == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    for(count = 0; count < 2; count++) {
        pre = NULL;
        // 在当前链表中找到待删除的边/弧
        r = G->vertices[tail].firstarc;
        while(r != NULL && r->adjvex < head) {
            pre = r;
            r = r->nextarc;
        }

        // 找到了待删除的边/弧
        if(r != NULL && r->adjvex == head) {
            if(pre == NULL) {
                G->vertices[tail].firstarc = r->nextarc;
            } else {
                pre->nextarc = r->nextarc;
            }

            free(r);
        } else {
            return ERROR; // 没找到
        }

        // 如果当前图/网是无向的，需要考虑对称性
        if((G->kind == UDG || G->kind == UDN) && tail != head) {
            // 颠倒tail和head
            k = tail;
            tail = head;
            head = k;
        } else {
            break;  // 如果是有向的，可以结束了
        }
    }

    (*G).arcnum--;  // 不论有向无向，边/弧数只减一

    return OK;
}

/*
 * 深度优先遍历(此处借助递归实现)
 */
void DFSTraverse(ALGraph G, Status(Visit)(VertexType)) {
    int v;

    // 使用全局变量VisitFunc，使得DFS不必设置函数指针参数
    VisitFunc = Visit;

    // 访问标志数组初始化
    for(v = 0; v < G.vexnum; v++) {
        visited[v] = FALSE;
    }

    // 此处需要遍历的原因是并不能保证所有顶点都连接在了一起
    for(v = 0; v < G.vexnum; v++) {
        if(!visited[v]) {
            DFS(G, v);  // 对尚未访问的顶点调用DFS
        }
    }
}

/*
 * 深度优先遍历核心函数
 */
static void DFS(ALGraph G, int v) {
    int w;

    // 从第v个顶点出发递归地深度优先遍历图G
    visited[v] = TRUE;

    // 访问第v个顶点
    VisitFunc(G.vertices[v].data);

    for(w = FirstAdjVex(G, G.vertices[v].data);
        w >= 0;
        w = NextAdjVex(G, G.vertices[v].data, G.vertices[w].data)) {
        if(!visited[w]) {
            DFS(G, w);  // 对尚未访问的顶点调用DFS
        }
    }
}

/*
 * 广度优先遍历(此处借助队列实现)
 */
void BFSTraverse(ALGraph G, Status(Visit)(VertexType)) {
    int v, w;
    LinkQueue Q;
    QElemType u;

    // 初始化为未访问
    for(v = 0; v < G.vexnum; v++) {
        visited[v] = FALSE;
    }

    // 置空辅助队列
    InitQueue(&Q);

    for(v = 0; v < G.vexnum; v++) {
        // 如果该顶点已访问过，则直接忽略
        if(visited[v]) {
            continue;
        }

        // 标记该顶点已访问
        visited[v] = TRUE;

        // 访问顶点
        Visit(G.vertices[v].data);

        EnQueue(&Q, v);

        while(!QueueEmpty(Q)) {
            DeQueue(&Q, &u);

            // 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点
            for(w = FirstAdjVex(G, G.vertices[u].data);
                w >= 0;
                w = NextAdjVex(G, G.vertices[u].data, G.vertices[w].data)) {
                if(!visited[w]) {
                    visited[w] = TRUE;
                    Visit(G.vertices[w].data);
                    EnQueue(&Q, w);
                }
            }
        }
    }
}

/*
 * 以图形化形式输出当前结构
 */
void PrintGraph(ALGraph G) {
    int i;
    ArcNode* p;

    if(G.vexnum == 0) {
        printf("空图，无需打印！\n");
        return;
    }

    printf("当前图/网包含 %2d 个顶点， %2d 条边/弧...\n", G.vexnum, G.arcnum);

    for(i = 0; i < G.vexnum; i++) {
        printf("%c ===> ", G.vertices[i].data);

        p = G.vertices[i].firstarc;
        while(p != NULL) {
            if(IncInfo == 0) {
                printf("%c ", G.vertices[p->adjvex].data);

                // 对于网，会从其附加信息中获取到权值
            } else {
                printf("%c[%2d] ", G.vertices[p->adjvex].data, p->info->weight);
            }

            p = p->nextarc;

            if(p != NULL) {
                printf("- ");
            }
        }

        printf("\n");
    }
}