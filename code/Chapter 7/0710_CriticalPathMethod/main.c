#include <stdio.h>
#include "ALGraph.h"
#include "CriticalPathMethod.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    ALGraph G;

    char* path[4];

    path[0] = "";
    path[1] = "TestData_DN.txt";
    path[2] = "";
    path[3] = "";

    CreateGraph(&G, path);
    PrintGraph(G);

    // 求取有向网的关键路径
    CriticalPath(G);

    return 0;
}
