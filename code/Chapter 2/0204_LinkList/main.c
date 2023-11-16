#include <stdio.h>
#include "LinkList.h"

// 测试函数，打印元素
void PrintElem(ElemType e) {
    printf("%d ", e);
}

// 判断data>e是否成立
Status CmpGreater(ElemType data, ElemType e) {
    return data > e ? TRUE : FALSE;
}
int main() {
    LinkList L;
    ElemType e; // 存储返回的值
    int i;      // 存储下标
    // 设置输出为UTF-8
    system("chcp 65001");
    // 初始化单链表
    InitList(&L);

    // 插入元素
    for (int j = 1; j < 6; ++j) {
        ListInsert(L,j,j);
    }

    // 获取元素数量
    printf("数量:%d\n",ListLength(L));

    // 判空
    if(ListEmpty(L) == TRUE){
        printf("列表为空\n");
    } else{
        printf("列表不为空\n");
    }

    // 获取第3个元素
    GetElem(L,3,&e);
    printf("第3个元素为:%d\n",e);


    // 删除元素
    ListDelete(L,2,&e);
    printf("删除的值为:%d\n",e);


    // 遍历
    ListTraverse(L,PrintElem);

    // 查找大于3的元素
    i = LocateElem(L,3,CmpGreater);
    GetElem(L, i, &e);
    printf("大于3的元素为:%d\n", e);

    // 3的前驱为
    PriorElem(L,3,&e);
    printf("3的前驱为:%d\n",e);

    // 3的后继为
    NextElem(L,3,&e);
    printf("3的后继为:%d\n",e);

    // 清空元素
    ClearList(L);

    // 销毁
    DestroyList(&L);

    CreateList_Head(&L,5);
    // 遍历
    ListTraverse(L,PrintElem);

    // 销毁
    DestroyList(&L);
    CreateList_Tail(&L,5);
    // 遍历
    ListTraverse(L,PrintElem);

    return 0;
}
