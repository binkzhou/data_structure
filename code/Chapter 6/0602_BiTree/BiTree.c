/*=============================
 * 二叉树的二叉链表存储结构
 *
 * 包含算法: 6.1、6.2、6.3、6.4
 =============================*/

#include "BiTree.h"
#include "LinkQueue.h"  //**▲03 栈和队列**//
#include "SqStack.h"

/*
 * 初始化
 *
 * 构造空二叉树。
 */
Status InitBiTree(BiTree* T){
    if(T == NULL){
        return ERROR;
    }

    *T = NULL;

    return OK;
}

/*
 * 销毁
 *
 * 释放二叉树所占内存。
 *
 *【注】
 * 二叉树的二叉链表存储结构可以销毁，但是没必要销毁。
 * 因为二叉链表销毁后的状态与置空后的状态是一致的。
 */
Status DestroyBiTree(BiTree* T){
    // 无需销毁，使用置空就可以
    return ERROR;
}

/*
 * 置空
 *
 * 清理二叉树中的数据，使其成为空树。
 */
Status ClearBiTree(BiTree* T){
    if(T == NULL){
        return ERROR;
    }

    // 在*T不为空时进行递归清理
    if(*T){
        if((*T)->lchild != NULL){
            ClearBiTree(&(*T)->lchild);
        }
        if((*T)->rchild != NULL){
            ClearBiTree(&(*T)->rchild);
        }

        free(*T);
        *T = NULL;
    }

    return OK;
}

/*
 * ████████ 算法6.4 ████████
 *
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
Status CreateBiTree(BiTree* T, char* path) {
    FILE* fp;
    int readFromConsole;    // 是否从控制台读取数据

    // 如果没有文件路径信息，则从控制台读取输入
    readFromConsole = path == NULL || strcmp(path, "") == 0;

    if(readFromConsole) {
        printf("请输入二叉树的先序序列，如果没有子结点，使用^代替：");
        CreateTree(T, NULL);
    } else {
        // 打开文件，准备读取测试数据
        fp = fopen(path, "r");
        if(fp == NULL) {
            return ERROR;
        }
        CreateTree(T, fp);
        fclose(fp);
    }

    return OK;
}

/*
 * 判空
 *
 * 判断二叉树是否为空树。
 */
Status BiTreeEmpty(BiTree T){
    return T == NULL ? TRUE : FALSE;
}

/*
 * 树深
 *
 * 返回二叉树的深度（层数）。
 */
int BiTreeDepth(BiTree T) {
    int LD, RD;

    if(T == NULL) {
        return 0;                       // 空树深度为0
    } else {
        LD = BiTreeDepth(T->lchild);    // 求左子树深度
        RD = BiTreeDepth(T->rchild);    // 求右子树深度

        // +1加上当前结点深度
        return (LD >= RD ? LD : RD) + 1;
    }
}

/*
 * 取值
 *
 * 返回二叉树中指定结点的值。
 */
TElemType Value(BiTree T, TElemType e){
    BiTree p;

    // 遇到空树则无需计算
    if(BiTreeEmpty(T)){
        return '\0';
    }

    // 获取结点e的指针
    p = EPtr(T,e);

    // 如果没有找到元素e
    if(p == NULL){
        return '\0';
    } else{
        return p->data;
    }
}
/*
 * 赋值
 *
 * 为二叉树指定的结点赋值。
 */
Status Assign(BiTree T, TElemType e, TElemType value){
    BiTree p;

    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)) {
        return ERROR;
    }

    // 获取结点e的指针
    p = EPtr(T, e);

    // 如果没有找到元素e
    if(p == NULL) {
        return ERROR;
    } else {
        // 进行赋值
        p->data = value;
        return OK;
    }
}

/*
 * 根
 *
 * 返回二叉树的根结点。
 */
TElemType Root(BiTree T){
    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)){
        return '\0';
    }

    return T->data;
}

/*
 * 双亲
 *
 * 返回二叉树中结点e的双亲结点。
 */
TElemType Parent(BiTree T, TElemType e){
    BiTree p;

    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)) {
        return '\0';
    }

    // 获取结点e的双亲结点的指针
    p = PPtr(T,e);

    // 如果没有找到元素e的双亲
    if(p == NULL){
        return '\0';
    } else{
        return p->data;
    }
}

/*
 * 左孩子
 *
 * 返回二叉树中结点e的左孩子结点。
 */
TElemType LeftChild(BiTree T, TElemType e){
    BiTree p;

    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)) {
        return ERROR;
    }

    // 获取结点e的指针
    p = EPtr(T, e);

    // 如果找到了元素e
    if(p != NULL && p->lchild != NULL){
        return p->lchild->data;
    }

    return '\0';
}

/*
 * 右孩子
 *
 * 返回二叉树中结点e的右孩子结点。
 */
TElemType RightChild(BiTree T, TElemType e){
    BiTree p;

    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)) {
        return '\0';
    }

    // 获取结点e的指针
    p = EPtr(T, e);

    // 如果找到了元素e
    if(p != NULL && p->rchild != NULL){
        return p->rchild->data;
    }
    return '\0';
}

/*
 * 左兄弟
 *
 * 返回二叉树中结点e的左兄弟结点。
 */
TElemType LeftSibling(BiTree T, TElemType e){
    BiTree p;

    if(BiTreeEmpty(T)){
        return '\0';
    }

    // 获取结点e的双亲结点的指针
    p = PPtr(T,e);

    // 如果找到了元素e的双亲
    if(p != NULL && p->lchild != NULL){
        return p->lchild->data;
    }

    return '\0';
}

/*
 * 右兄弟
 *
 * 返回二叉树中结点e的右兄弟结点。
 */
TElemType RightSibling(BiTree T, TElemType e){
    BiTree p;

    if(BiTreeEmpty(T)){
        return '\0';
    }

    // 获取结点e的双亲结点的指针
    p = PPtr(T,e);

    // 如果找到了元素e的双亲
    if(p != NULL && p->rchild != NULL){
        return p->rchild->data;
    }

    return '\0';
}

/*
 * ████████ 算法6.1 ████████
 *
 * 先序遍历
 */
Status PreOrderTraverse(BiTree T, Status(Visit)(TElemType)) {
    Status status;

    status = PreTraverse(T, Visit);
    printf("\n");

    return status;
}

/*
 * 中序遍历
 */
Status InOrderTraverse(BiTree T, Status(Visit)(TElemType)) {
    Status status;

    status = InTraverse(T, Visit);
    printf("\n");

    return status;
}

/*
 * 后序遍历
 */
Status PostOrderTraverse(BiTree T, Status(Visit)(TElemType)) {
    Status status;

    status = PostTraverse(T, Visit);
    printf("\n");

    return status;
}

/*
 * 层序遍历
 */
Status LevelOrderTraverse(BiTree T, Status(Visit)(TElemType)){
    LinkQueue Q;
    BiTree e;

    // 二叉树为空
    if(T == NULL) {
        printf("\n");
        return OK;
    }

    // 借助队列实现层序遍历
    InitQueue(&Q);

    // 根指针入队
    EnQueue(&Q, T);

    // 一直循环，直到队列为空
    while(!QueueEmpty(Q)) {
        DeQueue(&Q, &e);

        // 访问元素
        if(!Visit(e->data)) {
            return ERROR;
        }

        // 左孩子入队
        if(e->lchild != NULL) {
            EnQueue(&Q, e->lchild);
        }

        // 右孩子入队
        if(e->rchild != NULL) {
            EnQueue(&Q, e->rchild);
        }
    }

    printf("\n");

    return OK;
}

/*
 * ████████ 算法6.2 ████████
 *
 * 中序遍历
 *
 *【注】
 * 非递归算法
 */
Status InOrderTraverse_2(BiTree T, Status(Visit)(TElemType)) {
    SqStack S;
    BiTree p;

    InitStack(&S);
    Push(&S, T);    // 根指针入栈

    while(!StackEmpty(S)) {
        // 向左走到尽头
        while(GetTop(S, &p) && p != NULL) {
            Push(&S, p->lchild);
        }

        Pop(&S, &p);    // 空指针退栈

        if(!StackEmpty(S)) {
            // 访问结点
            Pop(&S, &p);
            if(!Visit(p->data)) {
                return ERROR;
            }

            // 向右一步
            Push(&S, p->rchild);

        }
    }

    printf("\n");

    return OK;
}

/*
 * ████████ 算法6.3 ████████
 *
 * 中序遍历
 *
 *【注】
 * 非递归算法
 */
Status InOrderTraverse_3(BiTree T, Status(Visit)(TElemType)) {
    SqStack S;
    BiTree p;

    InitStack(&S);

    p = T;

    while(p != NULL || !StackEmpty(S)) {
        if(p != NULL) {
            Push(&S, p);    // 根指针进栈
            p = p->lchild;  // 遍历左子树
        } else {
            // 访问结点
            Pop(&S, &p);
            if(!Visit(p->data)) {
                return ERROR;
            }

            p = p->rchild;
        }
    }

    printf("\n");

    return OK;
}

/*
 * 插入
 *
 * 已知c为与T不相交的非空二叉树，且c的右子树为空，
 * 根据LR的取值(0或1)，将c插入为T中结点p的左子树/右子树，
 * 并且，将p结点原有的左子树/右子树嫁接为二叉树c的右子树。
 */
Status InsertChild(BiTree T, TElemType p, int LR, BiTree c) {
    BiTree p_ptr;

    // 如果待插入的树为空树则无需继续计算
    if(BiTreeEmpty(c)) {
        return ERROR;
    }

    // 获取结点p的指针
    p_ptr = EPtr(T, p);

    // 如果p结点不存在，则返回错误提示
    if(p_ptr == NULL) {
        return ERROR;
    }

    // 将c插入为p的左子树
    if(LR==0) {
        // 如果p处存在左子树，则摘下p的左子树，插入为c的右子树
        if(p_ptr->lchild!=NULL) {
            c->rchild = p_ptr->lchild;
        }

        p_ptr->lchild = c;
    } else {
        // 如果p处存在右子树，则摘下p的右子树，插入为c的右子树
        if(p_ptr->rchild!=NULL) {
            c->rchild = p_ptr->rchild;
        }

        p_ptr->rchild = c;
    }

    return OK;
}

/*
 * 删除
 *
 * 根据LR的取值(0或1)，删除结点p的左子树/右子树。
 */
Status DeleteChild(BiTree T, TElemType p, int LR) {
    BiTree p_ptr;

    // 遇到空树则无需继续计算
    if(BiTreeEmpty(T)) {
        return ERROR;
    }

    // 获取结点p的指针
    p_ptr = EPtr(T, p);

    // 如果p结点不存在，则返回错误提示
    if(p_ptr == NULL) {
        return ERROR;
    }

    // 如果需要删除p的左子树
    if(LR == 0) {
        ClearBiTree(&(p_ptr->lchild));

        // 如果需要删除p的右子树
    } else {
        ClearBiTree(&(p_ptr->rchild));
    }

    return OK;
}
/*━━━━━━━━━━━━━━━━━━━━━━ 仅限内部使用的函数 ━━━━━━━━━━━━━━━━━━━━━━*/
// 创建二叉树的内部函数
static void CreateTree(BiTree* T, FILE* fp) {
    char ch;

    // 读取当前结点的值
    if(fp == NULL) {
        scanf("%c", &ch);
    } else {
        ReadData(fp, "%c", &ch);
    }

    if(ch == '^') {
        *T = NULL;
    } else {
        // 生成根结点
        *T = (BiTree) malloc(sizeof(BiTNode));
        if(!(*T)) {
            exit(OVERFLOW);
        }
        (*T)->data = ch;
        CreateTree(&((*T)->lchild), fp); // 创建左子树
        CreateTree(&((*T)->rchild), fp); // 创建右子树
    }
}

// 返回指向二叉树结点e的指针
static BiTree EPtr(BiTree T, TElemType e){
    BiTree pl,pr;

    if(T == NULL){
        return NULL;
    }

    // 如果找到了目标结点，直接返回其指针
    if(T->data == e){
        return T;
    }

    // 在左子树中查找e
    pl = EPtr(T->lchild, e);
    if(pl != NULL) {
        return pl;
    }

    // 在右子树中查找e
    pr = EPtr(T->rchild, e);
    if(pr != NULL) {
        return pr;
    }

    return NULL;
}

// 返回指向二叉树结点e的双亲结点的指针
static BiTree PPtr(BiTree T, TElemType e){
    BiTree pl, pr;

    if(T == NULL || T->data == e) {
        return NULL;
    }

    // e是T的左孩子
    if(T->lchild != NULL && T->lchild->data == e) {
        return T;
    }

    // e是T的右孩子
    if(T->rchild != NULL && T->rchild->data == e) {
        return T;
    }

    // 在左子树中查找e
    pl = PPtr(T->lchild, e);
    if(pl != NULL) {
        return pl;
    }

    // 在右子树中查找e
    pr = PPtr(T->rchild, e);
    if(pr != NULL) {
        return pr;
    }

    return NULL;
}

// 先序遍历的内部实现
static Status PreTraverse(BiTree T, Status(Visit)(TElemType)) {
    if(T) {
        if(Visit(T->data)) {
            if(PreTraverse(T->lchild, Visit)) {
                if(PreTraverse(T->rchild, Visit)) {
                    return OK;
                }
            }
        }

        return ERROR;

        // 遇到空树则无需继续计算
    } else {
        return OK;
    }
}

// 中序遍历的内部实现
static Status InTraverse(BiTree T, Status(Visit)(TElemType)) {
    if(T) {
        if(InTraverse(T->lchild, Visit)) {
            if(Visit(T->data)) {
                if(InTraverse(T->rchild, Visit)) {
                    return OK;
                }
            }
        }

        return ERROR;

        // 遇到空树则无需继续计算
    } else {
        return OK;
    }
}

// 后序遍历的内部实现
static Status PostTraverse(BiTree T, Status(Visit)(TElemType)) {
    if(T) {
        if(PostTraverse(T->lchild, Visit)) {
            if(PostTraverse(T->rchild, Visit)) {
                if(Visit(T->data)) {
                    return OK;
                }
            }
        }

        return ERROR;

        // 遇到空树则无需继续计算
    } else {
        return OK;
    }
}