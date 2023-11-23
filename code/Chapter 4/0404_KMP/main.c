#include <stdio.h>
#include "KMP.h"

int main() {

    // 设置输出为UTF-8
    system("chcp 65001");

    char* s = "abaaabcaabaabcacabaabcaabaabcac";
    char* t = "abaabcac";
    SString S, T;
    int* next;      // 模式串的next函数值
    int* nextval;   // 模式串的nextval函数值
    int pos;        // 匹配起点
    int i, j;

    // 初始化主串
    StrAssign(S, s);

    // 初始化模式串
    StrAssign(T, t);

    next = (int*) malloc((T[0] + 1) * sizeof(int));
    nextval = (int*) malloc((T[0] + 1) * sizeof(int));

    get_next(T, next);
    get_nextval(T,nextval);


    for(i = 1; i <= T[0]; i++) {
        printf("%d", next[i]);
    }

    printf("\n");

    printf("nextval : ");
    for(i = 1; i <= T[0]; i++) {
        printf("%d", nextval[i]);
    }

    pos = 1;

    i = Index_KMP(S, T, pos, next);
    j = Index_KMP(S, T, pos, nextval);

    printf("从%d个字符起，T 在 S 中第一次匹配成功的位置为 %d\n", pos, i);
    printf("从%d个字符起，T 在 S 中第一次匹配成功的位置为 %d\n", pos, j);
    return 0;
}
