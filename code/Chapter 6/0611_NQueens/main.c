#include <stdio.h>
#include "NQueens.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    // 初始化一个 %2d * %-2d 的空棋盘
    InitChessBoard();

    // 展示当前棋盘中的皇后布局
    ShowChessBoard();

    // 计算N皇后问题的各解
    Trial(1, N);

    return 0;
}
