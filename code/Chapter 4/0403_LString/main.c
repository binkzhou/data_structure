#include <stdio.h>
#include "LString.h"

int main() {
    char* chars = "1234567";
    LString S, T, sub, V;
    int i;

    // 初始化
    StrAssign(&S, chars);

    // 复制
    StrCopy(&T,S);

    // 比较大小
    i = StrCompare(S, T);

    if(i == 0){
        printf("S==T\n");
    }else if(i < 0){
        printf("S<T\n");
    } else{
        printf("S>T\n");
    }

    // 插入到串 S 的第 2 个位置处
    LString T2;
    StrAssign(&T2,"***");
    StrInsert(&S, 5, T2);

    // 获取字符串
    SubString(&sub, S, 3, 2);

    // 删除字符串
    StrDelete(&S,5,3);

    return 0;
}
