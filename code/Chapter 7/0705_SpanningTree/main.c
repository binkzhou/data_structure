#include <stdio.h>
#include "MGraph.h"
#include "SpanningTree.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    MGraph G;

    char* path[4];

    path[0] = "";
    path[1] = "";
    path[2] = "TestData_UDG.txt";
    path[3] = "";

    CreateGraph(&G, path);
    PrintGraph(G);

    CSTree T;

    printf("构造无向图的生成树（森林）... \n");
    DFSForest(G, &T);


    PrintTree(T);


    return 0;
}
