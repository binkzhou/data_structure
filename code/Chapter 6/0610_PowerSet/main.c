#include <stdio.h>
#include "PowerSet.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    List A;

    // 创建集合 A
    CreatePowerSet(&A, "TestData_A.txt");
    PrintPowerSet(A);


    // 计算集合的幂集
    LinkList B;
    InitList(&B);
    printf("依次输出求取的幂集中的各子集...\n");
    GetPowerSet(1, A, B);

    return 0;
}
