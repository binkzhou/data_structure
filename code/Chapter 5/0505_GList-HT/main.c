#include <stdio.h>
#include "GList-HT.h"

// 打印广义表原子
void PrintElem(AtomType e) {
    printf("%c ", e);
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    GList Tmp, G;
    GList g1, g2, g3;
    SString S1, S2, S3;


    // 创建空的广义表
    InitGList(&Tmp);

    // 创建广义表
    char* s3 = "(a,(b,c,d),(e,f))";

    StrAssign(S3,s3);
    CreateGList(&g3,S3);

    // 计数
    GListLength(g3);
    printf("广义表 G 的长度为： %d \n", GListLength(g3));

    // 遍历
    Traverse(g3,PrintElem);

    // 销毁结点
    DestroyGList(&g3);



    return 0;
}
