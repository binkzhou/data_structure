#include <stdio.h>
#include "MGraph.h"
// 测试函数，打印元素
Status PrintElem(VertexType c) {
    printf("%c ", c);
    return OK;
}


int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    MGraph G;

    char* path[4];

    path[0] = "TestData_DG.txt";
    path[1] = "TestData_DN.txt";
    path[2] = "TestData_UDG.txt";
    path[3] = "TestData_UDN.txt";

    // 创建图/网
    CreateGraph(&G, path);

    // 输出
    PrintGraph(G);

    // 顶点A的第一个邻接顶点为
    int k = FirstAdjVex(G, 'A');
    printf("%c\n", G.vexs[k]);

    // 顶点A的下一个邻接顶点为(从C开始查找)
    k = NextAdjVex(G, 'A', 'C');
    printf("%c\n", G.vexs[k]);

    // 删除顶点X
    DeleteVex(&G,'X');
    // 输出
    PrintGraph(G);

    // 插入边
    if(G.kind == DG || G.kind == UDG) {
        // 插入无权值的边：<E, C>
        InsertArc(&G, 'E', 'C');

        // 网
    } else if(G.kind == DN || G.kind == UDN) {
        // 插入带权值的边：<E, C, 8>
        InsertArc(&G, 'E', 'C', 8);
    }
    // 输出
    PrintGraph(G);

    printf("深度优先遍历图/网...\n");
    DFSTraverse(G, PrintElem);
    printf("\n");


    // 广度优先遍历
    printf("广度优先遍历图/网...\n");
    BFSTraverse(G, PrintElem);
    printf("\n");

    return 0;
}

