#include <stdio.h>
#include "ALGraph.h"
#include "TopologicalSorting.h"


int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    ALGraph G;

    char* path[4];

    path[0] = "TestData_DG.txt";
    path[1] = "";
    path[2] = "";
    path[3] = "";

    CreateGraph(&G, path);
    PrintGraph(G);

    int topo[MAX_VERTEX_NUM];
    int i;

    if(TopologicalSort(G, topo)) {
        printf("拓扑序列构建成功：");
        for(i=0; i<G.vexnum; i++) {
            printf("%c ", G.vertices[topo[i]].data);
        }
    } else {
        printf("异常退出：给定的有向图中存在回路，故无法生成完整的拓扑序列...\n");
    }

    return 0;
}
