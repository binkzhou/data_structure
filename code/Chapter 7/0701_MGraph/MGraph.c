/*=================================
 * 图的数组(邻接矩阵)存储表示
 *
 * 包含算法: 7.1、7.2、7.4、7.5、7.6
 ==================================*/

#include "MGraph.h"

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
 * ████████ 算法7.1 ████████
 *
 * 创建图/表
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
Status CreateGraph(MGraph* G, char* path[]) {
    int kind;
    Status flag;

    printf("请输入图的类型(0-有向图 │ 1-有向网 │ 2-无向图 │ 3-无向网)：");
//    scanf("%d", &kind);
    kind = 0;
    // 类型不合规
    if(kind < 0 || kind > 3) {
        return ERROR;
    }

    // 需要从文件读取
    // 打开文件，准备读取测试数据
    fp = fopen(path[kind], "r");
    if(fp == NULL) {
        return ERROR;
    }

    // 录入图的类型
    ReadData(fp, "%d", &((*G).kind));
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
 * 查找
 *
 * 返回顶点u在图/网中的位置
 */
int LocateVex(MGraph G, VertexType u) {
    int i;

    for(i = 0; i < G.vexnum; i++){
        if(G.vexs[i] == u){
            return i;
        }
    }

    return -1;
}

/*
 * 构造有向图
 */
static Status CreateDG(MGraph* G) {
    int i, j, k;
    ArcCell arcs = {0, NULL};   // 有向图每条边的初始值
    VertexType v1, v2;

    ReadData(fp, "%d", &((*G).vexnum)); // 录入顶点数
    ReadData(fp, "%d", &((*G).arcnum)); // 录入弧数
    ReadData(fp, "%d", &IncInfo);       // 判断弧上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < (*G).vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vexs[i]));
    }

    // 初始化有向图的邻接矩阵
    for(i = 0; i < (*G).vexnum; i++) {
        for(j = 0; j < (*G).vexnum; j++) {
            (*G).arcs[i][j] = arcs;
        }
    }

    // 录入弧的信息
    for(k = 0; k < (*G).arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);

        i = LocateVex(*G, v1);  // 获取顶点v1在顶点集中的位置
        j = LocateVex(*G, v2);  // 获取顶点v2在顶点集中的位置

        // 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)
        (*G).arcs[i][j].adj = 1;
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * 构造无向图
 */
static Status CreateUDG(MGraph* G) {
    int i, j, k;
    ArcCell arcs = {0, NULL};   // 无向图每条边的初始值
    VertexType v1, v2;

    ReadData(fp, "%d", &((*G).vexnum)); // 录入顶点数
    ReadData(fp, "%d", &((*G).arcnum)); // 录入边数
    ReadData(fp, "%d", &IncInfo);       // 判断边上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < (*G).vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vexs[i]));
    }

    // 初始化无向图的邻接矩阵
    for(i = 0; i < (*G).vexnum; i++) {
        for(j = 0; j < (*G).vexnum; j++) {
            (*G).arcs[i][j] = arcs;
        }
    }

    // 录入边的信息
    for(k = 0; k < (*G).arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c", &v1, &v2);
        i = LocateVex(*G, v1);  // 获取顶点v1在顶点集中的位置
        j = LocateVex(*G, v2);  // 获取顶点v2在顶点集中的位置

        // 将指定的顶点关系设置为1，指示这两个顶点是直接连接的(注：这里没有验证下标是否越界)
        (*G).arcs[i][j].adj = 1;

        // 填充对称点
        (*G).arcs[j][i] = (*G).arcs[i][j];
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * 构造有向网
 */
static Status CreateDN(MGraph* G) {
    int i, j, k;
    ArcCell arcs = {INFINITE, NULL};    // 有向网每条弧的初始值
    VertexType v1, v2;
    VRType w;

    ReadData(fp, "%d", &((*G).vexnum)); // 录入顶点数
    ReadData(fp, "%d", &((*G).arcnum)); // 录入弧数
    ReadData(fp, "%d", &IncInfo);       // 判断弧上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < (*G).vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vexs[i]));
    }

    // 初始化有向网的邻接矩阵
    for(i = 0; i < (*G).vexnum; i++) {
        for(j = 0; j < (*G).vexnum; j++) {
            (*G).arcs[i][j] = arcs;
        }
    }

    // 录入弧的信息
    for(k = 0; k < (*G).arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c%d", &v1, &v2, &w);

        i = LocateVex(*G, v1);  // 获取顶点v1在顶点集中的位置
        j = LocateVex(*G, v2);  // 获取顶点v2在顶点集中的位置

        // 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)
        (*G).arcs[i][j].adj = w;
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}

/*
 * ████████ 算法7.2 ████████
 *
 * 构造无向网
 */
static Status CreateUDN(MGraph* G) {
    int i, j, k;
    ArcCell arcs = {INFINITE, NULL};    // 无向网每条边的初始值
    VertexType v1, v2;
    VRType w;

    ReadData(fp, "%d", &((*G).vexnum)); // 录入顶点数
    ReadData(fp, "%d", &((*G).arcnum)); // 录入边数
    ReadData(fp, "%d", &IncInfo);       // 判断边上是否包含附加信息

    // 录入顶点集
    for(i = 0; i < (*G).vexnum; i++) {
        // 跳过空白，寻找下一个"可读"符号
        skipBlank(fp);
        ReadData(fp, "%c", &((*G).vexs[i]));
    }

    // 初始化无向网的邻接矩阵
    for(i = 0; i < (*G).vexnum; i++) {
        for(j = 0; j < (*G).vexnum; j++) {
            (*G).arcs[i][j] = arcs;
        }
    }
    // 录入边的信息
    for(k = 0; k < (*G).arcnum; k++) {
        // 跳过空白，寻找下一个可读符号
        skipBlank(fp);
        ReadData(fp, "%c%c%d", &v1, &v2, &w);

        i = LocateVex(*G, v1);  // 获取顶点v1在顶点集中的位置
        j = LocateVex(*G, v2);  // 获取顶点v2在顶点集中的位置

        // 在指定的顶点关系上记录权值(注：这里没有验证下标是否越界)
        (*G).arcs[i][j].adj = w;

        // 填充对称点
        (*G).arcs[j][i] = (*G).arcs[i][j];
    }

    // 从文件中读取数据时，最后其实应当判断一下是否读到了足够的信息
    return OK;
}


/*
 * 以图形化形式输出当前结构
 *
 * 注：在图/网中，使用"-"来表示两顶点不直接连通
 */
void PrintGraph(MGraph G) {
    int i, j;

    if(G.vexnum == 0) {
        printf("空图，无需打印！\n");
        return;
    }

    printf("当前图/网包含 %2d 个顶点， %2d 条边/弧...\n", G.vexnum, G.arcnum);

    printf("  ");
    for(i = 0; i < G.vexnum; i++) {
        printf("  %c", G.vexs[i]);
    }
    printf("\n");

    for(i = 0; i < G.vexnum; i++) {
        printf("%c ", G.vexs[i]);

        for(j = 0; j < G.vexnum; j++) {
            if(((G.kind == DG || G.kind == UDG) && G.arcs[i][j].adj == 0) || ((G.kind == DN || G.kind == UDN) && G.arcs[i][j].adj == INFINITE)) {
                printf("  -");
            } else {
                printf("%3d", G.arcs[i][j].adj);
            }
        }

        printf("\n");
    }
}

/*
 * 销毁
 *
 * 邻接矩阵存储的图无需释放内存，只需重置相关遍历即可。
 */
Status DestroyGraph(MGraph* G) {
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
VertexType GetVex(MGraph G, int v){
    if(v < 0 || v >= G.vexnum){
        return '\0';    // 指定的顶点不存在
    }

    return G.vexs[v];
}

/*
 * 赋值
 *
 * 将顶点v赋值为value
 */
Status PutVex(MGraph* G, VertexType v, VertexType value){
    int k;

    // 首先需要判断该顶点是否存在
    k = LocateVex((*G),v);
    if(k == -1){
        return ERROR;    // 指定的顶点不存在
    }

    (*G).vexs[k] = value;

    return OK;
}

/*
 * 首个邻接点
 *
 * 返回顶点v的首个邻接点
 */
int FirstAdjVex(MGraph G, VertexType v) {
    int kv, j;
    VRType adj;

    // 查找所在行
    kv = LocateVex(G, v);
    if(kv == -1) {
        return -1;    // 指定的顶点不存在
    }

    // 确定一个非连通标记
    if(G.kind == DG || G.kind == UDG) {
        adj = 0;            // 图
    } else if(G.kind == DN || G.kind == UDN) {
        adj = INFINITE;     // 网
    } else {
        return -1;
    }

    // 从头开始查找
    for(j = 0; j < G.vexnum; j++) {
        // 找到与v直接连接的顶点
        if(G.arcs[kv][j].adj != adj) {
            return j;
        }
    }

    return -1;
}

/*
 * 下一个邻接点
 *
 * 返回顶点v的(相对于w的)下一个邻接点
 */
int NextAdjVex(MGraph G, VertexType v, VertexType w) {
    int kv, kw, j;
    VRType adj;

    kv = LocateVex(G, v);
    if(kv == -1) {
        return -1;    // 指定的顶点不存在
    }

    kw = LocateVex(G, w);
    if(kw == -1) {
        return -1;    // 指定的顶点不存在
    }

    // 确定一个非连通标记
    if(G.kind == DG || G.kind == UDG) {
        adj = 0;        // 图
    } else if(G.kind == DN || G.kind == UDN) {
        adj = INFINITE; // 网
    } else {
        return -1;
    }

    // 从顶点w后开始查找
    for(j = kw + 1; j < G.vexnum; j++) {
        // 找到与v直接连接的顶点
        if(G.arcs[kv][j].adj != adj) {
            return j;
        }
    }

    return -1;
}


/*
 * 插入顶点
 *
 * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系
 */
Status InsertVex(MGraph* G, VertexType v) {
    int i, k;
    VRType adj;

    // 顶点数过多
    if((*G).vexnum == MAX_VERTEX_NUM) {
        return ERROR;
    }

    // 首先需要判断该顶点是否存在
    k = LocateVex(*G, v);
    if(k >= 0) {
        return ERROR;    // 指定的顶点存在时，无需重复添加
    }

    // 确定一个非连通标记
    if((*G).kind == DG || (*G).kind == UDG) {
        adj = 0;        // 图
    } else if((*G).kind == DN || (*G).kind == UDN) {
        adj = INFINITE; // 网
    } else {
        return ERROR;
    }

    (*G).vexs[(*G).vexnum] = v;
    (*G).vexnum++;

    // 补上0或INFINITE
    for(i = 0; i < (*G).vexnum; i++) {
        (*G).arcs[i][(*G).vexnum - 1].adj = adj;
        (*G).arcs[(*G).vexnum - 1][i].adj = adj;
    }

    return OK;
}

/*
 * 删除顶点
 *
 * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系
 */
Status DeleteVex(MGraph* G, VertexType v) {
    int i, j, k;
    VRType adj;

    k = LocateVex(*G, v);
    if(k == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    // 确定一个非连通标记
    if((*G).kind == DG || (*G).kind == UDG) {
        adj = 0;        // 图
    } else if((*G).kind == DN || (*G).kind == UDN) {
        adj = INFINITE; // 网
    } else {
        return ERROR;
    }

    // 更新边/弧的数量
    for(i = 0; i < (*G).vexnum; i++) {
        // 如果存在从顶点v出发的边，则边的数量减一
        if((*G).arcs[k][i].adj != adj) {
            (*G).arcnum--;
        }

        // 如果这是有向的图/网，依然需要更新边/弧的数量
        if((*G).kind == DG || (*G).kind == DN) {
            // 如果存在到达顶点v的边，则边的数量减一
            if((*G).arcs[i][k].adj != adj) {
                (*G).arcnum--;
            }
        }
    }

    // 将邻接矩阵中的顶点关系左移
    for(j = k + 1; j < (*G).vexnum; j++) {
        for(i = 0; i < (*G).vexnum; i++) {
            (*G).arcs[i][j - 1] = (*G).arcs[i][j];    // 右边的列挪到左边的列
        }
    }

    // 将邻接矩阵中的顶点关系上移
    for(i = k + 1; i < (*G).vexnum; i++) {
        // 注，由于上面进行左移的关系，所以这里的j是小于(*G).vexnum - 1
        for(j = 0; j < (*G).vexnum - 1; j++) {
            (*G).arcs[i - 1][j] = (*G).arcs[i][j];    // 下一行挪到上一行
        }
    }

    // 将该顶点从顶点集中移除
    for(i = k + 1; i < (*G).vexnum; i++) {
        (*G).vexs[i - 1] = (*G).vexs[i];
    }

    // 顶点数减一
    (*G).vexnum--;

    return OK;
}

/*
 * 插入边/弧<v, w>
 *
 * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。
 *
 * 对于图来说，可以在可变参数中列出边/弧的附加信息；
 * 对于网来说，可以在可变参数中依次列出边/弧的权值以及附加信息。
 */
Status InsertArc(MGraph* G, VertexType v, VertexType w, ...) {
    int kv, kw;
    VRType adj;                 // 顶点关系
    Boolean overlay = FALSE;    // 是否为覆盖添加
    InfoType* info = NULL;      // 边/弧的附加信息
    va_list ap;

    kv = LocateVex(*G, v);
    if(kv == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    kw = LocateVex(*G, w);
    if(kw == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    // 拒绝环
    if(kv == kw) {
        return ERROR;
    }

    /* 确定一个顶点关系 */

    // 对于图来说，连通关系用1表示
    if((*G).kind == DG || (*G).kind == UDG) {
        adj = 1;

        // 如果边/弧上存在附加信息
        if(IncInfo) {
            va_start(ap, w);                // 在w后查询首个可变参数
            info = va_arg(ap, InfoType*);   // 获取附加信息
            va_end(ap);
        }

        overlay = (*G).arcs[kv][kw].adj != 0;

        // 对于网来说，此处需要从可变参数中获取权值信息
    } else if((*G).kind == DN || (*G).kind == UDN) {
        va_start(ap, w);    // 在w后查询首个可变参数

        adj = va_arg(ap, VRType);   // 获取权值信息

        // 如果边/弧上存在附加信息
        if(IncInfo) {
            info = va_arg(ap, InfoType*);   // 获取附加信息
        }

        va_end(ap);

        overlay = (*G).arcs[kv][kw].adj != INFINITE;
    } else {
        return ERROR;
    }

    (*G).arcs[kv][kw].adj = adj;    // 记录顶点关系

    // 如果边/弧上存在附加信息，则记录附加关系
    if(IncInfo) {
        (*G).arcs[kv][kw].info = info;
    }

    // 如果是无向图/网，需要考虑对称性
    if((*G).kind == UDG || (*G).kind == UDN) {
        (*G).arcs[kw][kv] = (*G).arcs[kv][kw];
    }

    // 在非覆盖的情形下，才考虑更新边/弧的数量
    if(!overlay) {
        (*G).arcnum++;  // 不论有向无向，边/弧数只增一
    }

    return OK;
}

/*
 * 删除边/弧
 *
 * 此删除只是更新边/弧的连通关系
 */
Status DeleteArc(MGraph* G, VertexType v, VertexType w) {
    int kv, kw;
    VRType adj;
    Boolean found = FALSE;  // 是否存在待删除的边/弧

    kv = LocateVex(*G, v);
    if(kv == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    kw = LocateVex(*G, w);
    if(kw == -1) {
        return ERROR;    // 指定的顶点不存在
    }

    // 确定一个非连通标记
    if((*G).kind == DG || (*G).kind == UDG) {
        adj = 0;        // 图

        found = (*G).arcs[kv][kw].adj != 0;
    } else if((*G).kind == DN || (*G).kind == UDN) {
        adj = INFINITE; // 网

        found = (*G).arcs[kv][kw].adj != INFINITE;
    } else {
        return ERROR;
    }

    // 标记这两个顶点已断开连接
    (*G).arcs[kv][kw].adj = adj;

    // 如果是无向图/网，需要考虑对称性
    if((*G).kind == UDG || (*G).kind == UDN) {
        (*G).arcs[kw][kv] = (*G).arcs[kv][kw];
    }

    // 在找到了指定的弧时，才考虑更新边/弧的数量
    if(found) {
        (*G).arcnum--;  // 不论有向无向，边/弧数只减一
    }

    return OK;
}

/*
 * ████████ 算法7.4 ████████
 *
 * 深度优先遍历(此处借助递归实现)
 */
void DFSTraverse(MGraph G, Status(Visit)(VertexType)) {
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
 * ████████ 算法7.5 ████████
 *
 * 深度优先遍历核心函数
 */
static void DFS(MGraph G, int v) {
    int w;

    // 从第v个顶点出发递归地深度优先遍历图G
    visited[v] = TRUE;

    // 访问第v个顶点
    VisitFunc(G.vexs[v]);

    for(w = FirstAdjVex(G, G.vexs[v]);w >= 0;w = NextAdjVex(G, G.vexs[v], G.vexs[w])) {
        if(!visited[w]) {
            DFS(G, w);  // 对尚未访问的顶点调用DFS
        }
    }
}

/*
 * ████████ 算法7.6 ████████
 *
 * 广度优先遍历(此处借助队列实现)
 */
void BFSTraverse(MGraph G, Status(Visit)(VertexType)) {
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
        Visit(G.vexs[v]);

        EnQueue(&Q, v);

        while(!QueueEmpty(Q)) {
            DeQueue(&Q, &u);

            // 先集中访问顶点v的邻接顶点，随后再访问邻接顶点的邻接顶点
            for(w = FirstAdjVex(G, G.vexs[u]);w >= 0;w = NextAdjVex(G, G.vexs[u], G.vexs[w])) {
                if(!visited[w]) {
                    visited[w] = TRUE;
                    Visit(G.vexs[w]);
                    EnQueue(&Q, w);
                }
            }
        }
    }
}