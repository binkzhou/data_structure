#include <stdio.h>
#include "BiThrTree.h"

// 测试函数，打印元素
Status PrintElem(TElemType c) {
    printf("%c", c);
    return OK;
}

int main() {
    BiThrTree T;    // 二叉树
    BiThrTree Thr;  // 中序全线索二叉树

    // 按先序序列创建二叉树
    CreateBiTree(&T, "TestData_Pre.txt");

    // 对二叉树进行中序全线索化
    InOrderThreading(&Thr, T);

    // 中序遍历中序全线索二叉树
    InOrderTraverse_Thr(Thr, PrintElem);
    return 0;
}
