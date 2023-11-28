#include <stdio.h>
#include "GList-E.h"

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

    // 初始化空表
    InitGList(&Tmp);

    // 创建广义表
    char* s1 = "()";
    char* s2 = "(e)";
    char* s3 = "(a,(b,c,d))";

    StrAssign(S1, s1);
    CreateGList(&g1, S1);

    StrAssign(S2, s2);
    CreateGList(&g2, S2);

    StrAssign(S3, s3);
    CreateGList(&g3, S3);

    // 将 S3、S2、S1 依次插入到 Tmp 的首个位置
    InsertFirst(&Tmp, g3);
    InsertFirst(&Tmp, g2);
    InsertFirst(&Tmp, g1);

    // 输出广义表中原子
    Traverse(Tmp, PrintElem);
    return 0;
}
