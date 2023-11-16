#include <stdio.h>
#include "DuLinkList.h"                        //**▲02 线性表**//

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

    DuLinkList L;
    int i;
    ElemType e;

    // 初始化双向循环链表
    InitList(&L);

    // 判断是否为空
    if(ListEmpty(L) == TRUE){
        printf("L 为空！！\n");
    } else{
        printf("L 不为空！！\n");
    }

    // 插入数据
    for(i = 1; i <= 8; i++) {
        printf("在 L 第 %d 个位置插入 \"%d\" ...\n", i, 2 * i);
        ListInsert(L, i, 2 * i);
    }

    // 遍历数据
    ListTraverse(L,PrintElem);

    // 获取长度
    printf("L 的长度为 %d \n", ListLength(L));

    // 删除第6个元素
    ListDelete(L,6,&e);
    printf("删除的元素为 %d \n", e);

    // 获取第4个位置的元素
    printf("L 中第 4 个位置的元素为 \"%d\" \n", e);

    // 获取大于7的元素
    i = LocateElem(L,7,CmpGreater);
    GetElem(L,i,&e);
    printf("L 中第一个元素值大于 \"7\" 的元素是 \"%d\" \n", e);

    // 元素6的前驱是
    PriorElem(L, 6, &e);
    printf("元素 \"%d\" 的前驱为 \"%d\" \n", 6, e);

    // 元素6的后继是
    NextElem(L, 6, &e);
    printf("元素 \"%d\" 的前驱为 \"%d\" \n", 6, e);

    // 清空列表
    ClearList(L);

    // 销毁列表
    DestroyList(&L);

    return 0;
}
