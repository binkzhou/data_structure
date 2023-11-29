#include <stdio.h>
#include "BiTree.h"

// 测试函数，打印元素
Status PrintElem(TElemType c) {
    printf("%c", c);
    return OK;
}


int main() {
    BiTree T;

    // 初始化二叉树
    InitBiTree(&T);

    // 按先序创建二叉树
    CreateBiTree(&T,"TestData_Pre.txt");

    // 查找D
    printf("D=%c\n",Value(T,'D'));

    // 查找D的双亲
    printf("D parent is %c\n", Parent(T,'D'));


    // 先序遍历
    PreOrderTraverse(T,PrintElem);

    // 中序遍历
    InOrderTraverse(T,PrintElem);
    InOrderTraverse_2(T,PrintElem);

    // 层序遍历
    LevelOrderTraverse(T,PrintElem);
    return 0;
}
