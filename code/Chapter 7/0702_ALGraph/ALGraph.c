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
    int kind;
    Status flag;

    printf("请输入图的类型(0-有向图 │ 1-有向网 │ 2-无向图 │ 3-无向网)：");
    scanf("%d", &kind);

    // 类型不合规
    if(kind < 0 || kind > 3) {
        return ERROR;
    }

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
 * 插入边/弧<v, w>
 *
 * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。
 * 对于图/网来说，可以在可变参数中列出边/弧的附加信息。
 *
 * 注：此处接收的参数与MGraph有些不一样：网的附加信息中包含了各条边/弧的权值。
 */
Status InsertArc(ALGraph* G, VertexType v, VertexType w, ...){
    //

    return OK;
}
/*
 * 构造有向图
 */
static Status CreateDG(ALGraph* G){
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
