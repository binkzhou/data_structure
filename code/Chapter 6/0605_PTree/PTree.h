/*==================
 * 树的双亲表存储表示
 ===================*/

#ifndef PTREE_H
#define PTREE_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Status.h"
#include "LinkList.h"
#include "LinkQueue.h"

/* 树的最大结点树 */
#define MAX_TREE_SIZE 1024

/* 单个结点最大的孩子数量 */
#define MAX_CHILD_CUNT 8

/* 树的元素类型定义，这里假设其元素类型为char */
typedef char TElemType;

/* (双亲)树的结点定义 */
typedef struct PTNode{
    TElemType data;
    int parent;       // 双亲位置域
} PTNode;



#endif
