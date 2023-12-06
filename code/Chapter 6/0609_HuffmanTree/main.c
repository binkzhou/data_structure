#include <stdio.h>
#include "HuffmanTree.h"

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    int *w;
    int n;
    HuffmanTree HT;
    HuffmanCode HC;

    // 初始化环境，主要是初始化权值信息
    InitEnvironment(&w,&n,"TestData_HT.txt");

    // 编码：由权值信息获取赫夫曼编码
    HuffmanCodeing_1(&HT, &HC, w, n);

    // 打印赫夫曼树结构
    PrintHuffmanTree(HT);

    // 打印赫夫曼编码
    PrintHuffmanCode(HT, HC);

    int* weight;

    // 解码：由赫夫曼编码获取权值信息
    HuffmanDecoding(HT,HC,&weight,n);
    PrintWeight(HC, weight, n);

    return 0;
}
