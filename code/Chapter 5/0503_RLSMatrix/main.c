#include <stdio.h>
#include "RLSMatrix.h"

int main() {
    RLSMatrix M, N;

    // 创建两个稀疏矩阵 M、N
    CreateSMatrix(&M, "TestData_M.txt");
    CreateSMatrix(&N, "TestData_N.txt");


    // 输出矩阵
    PrintSMatrix(M);
    return 0;
}
