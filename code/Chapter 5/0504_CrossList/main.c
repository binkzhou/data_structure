#include <stdio.h>
#include "CrossList.h"

int main() {
    CrossList M, N, W;

    // 创建矩阵
    CreateSMatrix(&M, "TestData_M.txt");
    CreateSMatrix(&N, "TestData_N.txt");
    CreateSMatrix(&W, "TestData_W.txt");

    // 输出矩阵
    PrintSMatrix(W);

    // 矩阵相加
    CrossList Q1;
    AddSMatrix(M,N,&Q1);
    PrintSMatrix(Q1);
    printf("\n");

    // 矩阵相减
    CrossList Q2;
    SubSMatrix(M,N,&Q2);
    PrintSMatrix(Q2);
    printf("\n");

    // 矩阵相乘
    CrossList Q3;
    MultSMatrix(M,N,&Q3);
    PrintSMatrix(Q3);
    printf("\n");

    return 0;
}
