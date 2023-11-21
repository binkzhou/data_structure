#include <stdlib.h>
#include "SString.h"


int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    char* chars = "12345";
    SString S, T, sub, V;
    int i;

    // 初始化串
    StrAssign(S, chars);

    // 判断是否为空
    if(StrEmpty(S) == TRUE){
        printf("S 为空！！\n");
    } else{
        printf("S不为空！！\n");
    }

    // 长度
    i = StrLength(S);
    printf("S 的长度为 %d \n", i);

    // 复制S到T
    StrCopy(T, S);

    // 比较字符串 S 和 T
    i = StrCompare(S, T);

    // 判断是否相等
    if(i == 0){
        printf("S==T\n");
    }else if(i < 0){
        printf("S<T\n");
    } else{
        printf("S>T\n");
    }

    // 插入到串 S 的第 3 个位置处
    StrAssign(T, "**");
    StrInsert(S, 3, T);

    // 获取 S 中第 2 个字符起的 3 个字符
    SubString(sub, S, 2, 3);

    // 删除 S 中第 3 个字符起的 2 个字符
    StrDelete(S,3,2);

    // 联接 \"+++++\" 和 \"-----\" 形成 Tmp


    return 0;
}
