#include <stdio.h>
#include "MGraph.h"
#include "MinimumSpanningTree.h"


int main() {
    MGraph G;

    char* path[4];

    path[0] = "";
    path[1] = "";
    path[2] = "";
    path[3] = "TestData_UDN.txt";

    CreateGraph(&G, path);
    // 使用普里姆算法获取最小生成树...
    MinSpanTree_PRIM(G, 'A');

    // 使用克鲁斯卡尔算法获取最小生成树
    MinSpanTree_KRUSKAL(G);

    return 0;
}
