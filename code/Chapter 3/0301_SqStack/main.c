#include <stdio.h>
#include "SqStack.h"

// 测试函数，打印元素
void PrintElem(SElemType e) {
    printf("%d ", e);
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    SqStack S;
    int i;
    SElemType e;

    // 初始化栈
    InitStack(&S);

    // 入栈
    for(i = 1; i <= 6; i++) {
        Push(&S, 2 * i);
        printf("将 \"%2d\" 压入栈 S ...\n", 2 * i);
    }

    // 获取栈顶值
    GetTop(S,&e);
    printf("栈顶的值为:%d\n", e);

    // 出栈
    Pop(&S,&e);
    printf("出栈的值为:%d\n", e);

    // 置空
    ClearStack(&S);

    // 销毁栈
    DestroyStack(&S);

    return 0;
}
