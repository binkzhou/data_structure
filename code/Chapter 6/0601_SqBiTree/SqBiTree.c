/*==================
 * 二叉树顺序存储结构
 ===================*/

#include "SqBiTree.h"

/*
 * 初始化
 *
 * 构造空二叉树。
 */
Status InitBiTree(SqBiTree T){
    // 使用空字符填充二叉树的顺序结构
    // 整个数组填'\0'
    memset(T,'\0', sizeof(SqBiTree));
    return OK;
}

/*
 * 销毁
 *
 * 释放二叉树所占内存。
 *
 *【注】
 * 二叉树的顺序存储结构无法销毁。
 */
Status DestroyBiTree(SqBiTree T){
    // 二叉树的顺序存储结构无法销毁
    return ERROR;
}

/*
 * 置空
 *
 * 清理二叉树中的数据，使其成为空树。
 */
Status ClearBiTree(SqBiTree T) {
    // 使用空字符填充二叉树的顺序结构
    memset(T, '\0', sizeof(SqBiTree));

    return OK;
}

/*
 * 创建
 *
 * 按照预设的定义来创建二叉树。
 * 这里约定使用【先序序列】来创建二叉树。
 *
 *
 *【备注】
 *
 * 教材中默认从控制台读取数据。
 * 这里为了方便测试，避免每次运行都手动输入数据，
 * 因而允许选择从预设的文件path中读取测试数据。
 *
 * 如果需要从控制台读取数据，则path为NULL或者为空串，
 * 如果需要从文件中读取数据，则需要在path中填写文件名信息。
 */
Status CreateBiTree(SqBiTree T, char* path) {
    FILE* fp;
    int readFromConsole;    // 是否从控制台读取数据

    // 如果没有文件路径信息，则从控制台读取输入
    readFromConsole = path == NULL || strcmp(path, "") == 0;

    if(readFromConsole) {
        printf("请输入二叉树的先序序列，如果没有子结点，使用^代替：");
        CreateTree(T, 0, NULL);
    } else {
        // 打开文件，准备读取测试数据
        fp = fopen(path, "r");
        if(fp == NULL) {
            return ERROR;
        }
        CreateTree(T, 0, fp);
        fclose(fp);
    }

    return OK;
}

/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/

// 创建二叉树的内部函数
// 创建二叉树的内部函数
static void CreateTree(SqBiTree T, int i, FILE* fp) {
    char ch;

    // 读取当前结点的值
    if(fp == NULL) {
        scanf("%c", &ch);
    } else {
        ReadData(fp, "%c", &ch);
    }

    if(ch == '^') {
        T[i] = '\0';
    } else {
        T[i] = ch;
        CreateTree(T, 2 * i + 1, fp); // 创建左子树
        CreateTree(T, 2 * i + 2, fp); // 创建右子树
    }
}