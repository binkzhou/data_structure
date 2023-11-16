#include <stdio.h>
#include "SLinkList.h"

// 判断data>e是否成立
Status CmpGreater(ElemType data, ElemType e) {
    return data > e ? TRUE : FALSE;
}

// 测试函数，打印元素
void PrintElem(ElemType e) {
    printf("%d ", e);
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    SLinkList space;   // 备用空间
    int S;             // 静态链表头结点索引
    int i;
    ElemType e;

    InitList(space,&S);

    for(i = 1; i <= 8; i++) {
        printf("在 S 第 %d 个位置插入 \"%d\" ...\n", i, 2 * i);
        ListInsert(space, S, i, 2 * i);
    }

    if(ListEmpty(space,S) == TRUE){
        printf("S为空!!\n");
    } else{
        printf("S不为空!!\n");
    }

    // S中的元素为
    ListTraverse(space,S,PrintElem);

    // S的长度
    printf("S的长度为:%d\n", ListLength(space,S));

    // 删除第6个元素
    ListDelete(space,S,6,&e);

    // 获取第4个元素
    GetElem(space,S,4,&e);
    printf("S中的第4个元素为:%d\n", e);

    // 获取6的前驱
    PriorElem(space,S,6,&e);
    printf("S中的6的前驱为:%d\n", e);

    // 获取6的后继
    NextElem(space,S,6,&e);
    printf("S中的6的后继为:%d\n", e);

    ClearList(space,S);

    DestroyList(space,&S);


    return 0;
}
