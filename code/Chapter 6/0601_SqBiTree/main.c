#include <stdio.h>
#include "SqBiTree.h"

int main() {
    SqBiTree T;

    // 初始化空二叉树 T
    InitBiTree(T);

    // 按先序序列创建二叉树
    CreateBiTree(T, "TestData_Pre.txt");

    return 0;
}
