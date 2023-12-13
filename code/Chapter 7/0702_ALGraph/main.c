#include <stdio.h>
#include "ALGraph.h"

// 测试函数，打印元素
Status PrintElem(VertexType c) {
    printf("%c ", c);
    return OK;
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    ALGraph G;

    char* path[4];

    path[0] = "TestData_DG.txt";
    path[1] = "TestData_DN.txt";
    path[2] = "TestData_UDG.txt";
    path[3] = "TestData_UDN.txt";

    // 创建图/网
    CreateGraph(&G, path);

    // 输出图/网的邻接矩阵
    PrintGraph(G);

    // 获取顶点X位置
    printf("顶点X的位置为 %d\n", LocateVex(G, 'X'));

    // 索引1处的顶点值为
    printf("索引1处的顶点值为 %c\n",  GetVex(G, 1));

    // 顶点X的第一个邻接顶点为
    int k = FirstAdjVex(G, 'X');
    printf("顶点X的第一个邻接顶点为 '%c'\n", G.vertices[k].data);

    // 顶点X相对于顶点A的下一个邻接顶点为
    k = NextAdjVex(G, 'X', 'A');
    printf("顶点X相对于顶点A的下一个邻接顶点为 '%c'\n", G.vertices[k].data);

    // 删除顶点X
    DeleteVex(&G, 'X');
    PrintGraph(G);

    // 插入顶点Y
    InsertVex(&G, 'Y');
    PrintGraph(G);

    // 插入边
    if(G.kind == DG || G.kind == UDG) {
        // 插入无权值的边：<B, Y>
        InsertArc(&G, 'B', 'Y');

        // 网
    } else if(G.kind == DN || G.kind == UDN) {
        // 插入带权值的边：<'B','Y', 8>
        InfoType info = {8};
        InsertArc(&G, 'B', 'Y', &info);
    }
    PrintGraph(G);

    // 删除边：<'D', 'A'>
    DeleteArc(&G, 'D', 'A');

    // 深度优先遍历图/网
    DFSTraverse(G, PrintElem);
    printf("\n");

    // 广度优先遍历图/网
    BFSTraverse(G, PrintElem);
    printf("\n");

    // 销毁图/网G
    DestroyGraph(&G);
    PrintGraph(G);

    return 0;
}
