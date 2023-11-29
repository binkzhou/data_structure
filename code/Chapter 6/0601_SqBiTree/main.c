#include <stdio.h>
#include "SqBiTree.h"

// 测试函数，打印元素
Status PrintElem(TElemType c) {
    printf("%c", c);
    return OK;
}

int main() {
    SqBiTree T;

    // 初始化空二叉树 T
    InitBiTree(T);

    // 按先序序列创建二叉树
    CreateBiTree(T, "TestData_Pre.txt");

    // 深度
    printf("deep: %d \n", BiTreeDepth(T));

    // 取值
    printf("Value: %c \n",Value(T,'A'));

    // 赋值
//    Assign(T,'B','R');

    // 获取D的双亲
    printf("D parent: %c \n",Parent(T,'D'));

    // 先序遍历
    PreOrderTraverse(T,PrintElem);

    // 中序遍历
    InOrderTraverse(T,PrintElem);

    // 后序遍历
    PostOrderTraverse(T,PrintElem);

    // 层序遍历
    LevelOrderTraverse(T,PrintElem);

    // 二叉树插入
    SqBiTree c1, c2;
    TElemType p1 = 'F';
    TElemType p2 = 'E';

    // 创建子树c1
    InitBiTree(c1);
    CreateBiTree(c1, "TestData_c1.txt");

    // 创建子树 c2
    InitBiTree(c2);
    CreateBiTree(c2, "TestData_c2.txt");

    // 将子树 c1 插入为二叉树 T 中 D 结点的右子树
    InsertChild(T, p1, 1, c1);

    // 将子树 c2 插入为二叉树 T 中 E 结点的左子树
    InsertChild(T, p2, 0, c2);

    // 先序遍历
    PreOrderTraverse(T,PrintElem);

    // 中序遍历
    InOrderTraverse(T,PrintElem);

    return 0;
}
