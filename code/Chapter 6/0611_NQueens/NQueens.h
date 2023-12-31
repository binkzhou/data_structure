/*==============
 * N皇后问题
 *
 * 包含算法: 6.16
 ===============*/

#ifndef NQUEENS_H
#define NQUEENS_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Status.h"

/* 棋盘最大范围N*N，其值必须>=4 */
#define N 8

/* 棋盘类型定义 */
typedef int ChessBoard;



/*
 * 初始化N*N规模的棋盘CB。
 *
 *【注】
 * 0号单元已弃用
 */
void InitChessBoard();

/*
 * ████████ 算法6.16 ████████
 *
 * 在指定大小棋盘上求出N皇后问题的各解。
 */
void Trial(int i, int n);


/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/

/*
 * 判断在x行y列放入棋子后棋盘布局是否合理。
 */
static Status AllowLayout(int i, int j);


/*━━━━━━━━━━━━━━━━━━━━━━ 图形化输出 ━━━━━━━━━━━━━━━━━━━━━━*/

/*
 * 展示棋盘中的皇后布局。
 */
void ShowChessBoard();

#endif
