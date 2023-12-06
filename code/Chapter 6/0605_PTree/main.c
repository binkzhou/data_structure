#include <stdio.h>
#include "PTree.h"

// 测试函数，打印元素
Status PrintElem(TElemType c) {
    printf("%c", c);
    return OK;
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    PTree T;

    // 初始化空树T
    InitTree(&T);

    // 按先序序列创建数T
    CreateTree(&T,"TestData_T.txt");

    // 查找结点E
    Value(T,'E');
    printf("%c\n", Value(T,'E'));

    // 树 T 的深度
    printf("%d\n", TreeDepth(T));

    // 结点E的左兄弟为
    printf("%c\n", LeftSibling(T,'E'));

    // 结点B的右兄弟为
    printf("%c\n", RightSibling(T,'B'));

    // 前序遍历树
    PreOrderTraverse(T, PrintElem);

    // 后序遍历树
    PostOrderTraverse(T, PrintElem);

    return 0;
}
