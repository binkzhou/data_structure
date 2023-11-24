#include <stdio.h>
#include "TSMatrix.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    TSMatrix M,N;

    // 创建稀疏矩阵
    CreateSMatrix(&M, "TestData_M.txt");
    CreateSMatrix(&N, "TestData_N.txt");

    // 输出矩阵
    PrintSMatrix(M);
    printf("\n");
    PrintSMatrix(N);
    printf("\n");

    // 矩阵加法
    TSMatrix Q1;

    AddSMatrix(M, N, &Q1);

    printf("Q1 = M + N = \n");
    PrintSMatrix(Q1);
    printf("\n");

    MultSMatrix(M,N,&Q1);
    printf("Q1 = M * N = \n");
    PrintSMatrix(Q1);
    printf("\n");

    // 转置
    TransposeSMatrix(M,&Q1);
    PrintSMatrix(Q1);

    // 快速转置
    FastTransposeSMatrix(M,&Q1);
    return 0;
}
