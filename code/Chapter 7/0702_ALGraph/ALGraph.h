/*==================
 * 图的邻接表存储表示
 ===================*/

#ifndef ALGRAPH_H
#define ALGRAPH_H

#include <stdio.h>
#include <string.h>
#include <stdarg.h>
#include <stdlib.h>
#include "Status.h"
#include "LinkQueue.h"

/*
 * 注：
 *
 * 通常来讲，无权图被简称为【图】，有权图被简称为【网】。
 * 无向图/网中的顶点关系被称为【边】，有向图/网中的顶点关系被称为【弧】，并区分弧头与弧尾。
 * 实际表述中，未必会严格遵守以上命名。
 *
 * 当前结构适合存储边/弧比较稀疏的图/网。
 *
 * ★ 插入边/弧的信息时，这里的实现是按"升序"插入的，这使得插入的弧是按"升序"排列的。
 */


/* 宏定义 */
#define MAX_VERTEX_NUM 26   // 最大顶点个数


// 图的类型
typedef enum {
    DG,     // 0-有向图
    DN,     // 1-有向网(带权值)
    UDG,    // 2-无向图
    UDN     // 3-无向网(带权值)
} GraphKind;

// 顶点类型
typedef char VertexType;

// 边/弧的相关附加信息
typedef struct {
    /*
     * 注：
     * 教材中给出的结构只考虑了无权图，而没考虑有权图(网)。
     * 这里为了把“网”的情形也考虑进去，特在附加信息中增加了"权重"属性。
     */
    int weight;
} InfoType;

/* 边/弧结点 */
typedef struct ArcNode {
    int adjvex;                 // 该弧所指向的顶点的位置
    struct ArcNode* nextarc;    // 指向下一条弧的指针
    InfoType* info;             // 弧的附加信息，通常忽略
} ArcNode;

// 每个链表的头结点
typedef struct VNode {
    VertexType data;    // 顶点信息
    ArcNode* firstarc;  // 指向第一条依附该顶点的弧的指针
} VNode;

/* 图的邻接表存储表示类型定义 */
typedef struct {
    VNode vertices[MAX_VERTEX_NUM]; // 邻接表
    int vexnum, arcnum;             // 图/网的顶点数和弧数
    GraphKind kind;                 // 图的类型标志
} ALGraph;


// 边/弧上是否存在附加信息
extern Boolean IncInfo;

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
Status CreateGraph(ALGraph* G, char* path[]);

/*
 * 构造有向图
 */
static Status CreateDG(ALGraph* G);

/*
 * 构造有向网
 */
static Status CreateDN(ALGraph* G);

/*
 * 构造无向图
 */
static Status CreateUDG(ALGraph* G);

/*
 * 构造无向网
 */
static Status CreateUDN(ALGraph* G);

/*
 * 录入边/弧的相关附加信息
 */
static void Input(ALGraph G, InfoType** info);

/*
 * 销毁
 *
 * 邻接表存储的图需要释放内存。
 */
Status DestroyGraph(ALGraph* G);

/*
 * 查找
 *
 * 返回顶点u在图/网中的位置
 */
int LocateVex(ALGraph G, VertexType u);

/*
 * 取值
 *
 * 返回索引v处的顶点值
 */
VertexType GetVex(ALGraph G, int v);

/*
 * 赋值
 *
 * 将顶点v赋值为value
 */
Status PutVex(ALGraph* G, VertexType v, VertexType value);

/*
 * 首个邻接点
 *
 * 返回顶点v的首个邻接点
 */
int FirstAdjVex(ALGraph G, VertexType v);

/*
 * 下一个邻接点
 *
 * 返回顶点v的(相对于w的)下一个邻接点
 */
int NextAdjVex(ALGraph G, VertexType v, VertexType w);

/*
 * 插入顶点
 *
 * 将指定的顶点v追加到顶点集中，未建立该顶点与其他顶点的关系
 */
Status InsertVex(ALGraph* G, VertexType v);

/*
 * 删除顶点
 *
 * 从顶点集中删除指定的顶点v，注意需要更新相关的顶点关系
 */
Status DeleteVex(ALGraph* G, VertexType v);

/*
 * 构造一个边/弧结点(仅限内部使用)
 */
static ArcNode* newArcNodePtr(int adjvex, ArcNode* nextarc, InfoType* info);

/*
 * 插入边/弧<v, w>
 *
 * 如果当前图/网是无向的，则插入一条弧需要增加两个顶点关系，但弧的数量只增一。
 * 对于图/网来说，可以在可变参数中列出边/弧的附加信息。
 *
 * 注：此处接收的参数与MGraph有些不一样：网的附加信息中包含了各条边/弧的权值。
 */
Status InsertArc(ALGraph* G, VertexType v, VertexType w, ...);

/*
 * 删除边/弧<v, w>
 */
Status DeleteArc(ALGraph* G, VertexType v, VertexType w);

/*
 * 深度优先遍历(此处借助递归实现)
 */
void DFSTraverse(ALGraph G, Status(Visit)(VertexType));

/*
 * 深度优先遍历核心函数
 */
static void DFS(ALGraph G, int v);

/*
 * 广度优先遍历(此处借助队列实现)
 */
void BFSTraverse(ALGraph G, Status(Visit)(VertexType));

/*
 * 以图形化形式输出当前结构
 */
void PrintGraph(ALGraph G);


#endif
