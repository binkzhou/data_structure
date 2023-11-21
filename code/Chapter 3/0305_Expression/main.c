#include <stdio.h>
#include "Expression.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    char opnd;
    char* exp = "(1+3)*2/4#";

    opnd = EvaluateExpression(exp);

    printf("作为示例， %s 的计算结果为：%d\n", exp, opnd - '0');
    return 0;
}
