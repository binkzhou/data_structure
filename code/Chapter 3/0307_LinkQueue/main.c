#include <stdio.h>
#include "LinkQueue.h"

// 测试函数，打印整型
void PrintElem(QElemType e) {
    printf("%d ", e);
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    LinkQueue Q;
    int i;
    QElemType e;

    // 初始化数据
    InitQueue(&Q);

    // 入队
//    for(i = 1; i <= 6; i++) {
//        EnQueue(&Q, 2 * i);
//        printf("元素 \"%2d\" 入队...\n", 2 * i);
//    }

    EnQueue(&Q, 2);

    // 遍历队列
    QueueTraverse(Q, PrintElem);

    // 队头元素
    GetHead(Q, &e);
    printf("队头元素是:%d\n",e);

    // 元素长度
    i = QueueLength(Q);
    printf("元素长度为:%d\n",i);

    // 出队
    DeQueue(&Q, &e);
    printf("出队元素为:%d\n",e);

    // 清空队列
    ClearQueue(&Q);

    // 销毁队列
    DestroyQueue(&Q);

    return 0;
}
