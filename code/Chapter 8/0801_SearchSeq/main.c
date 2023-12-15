#include <stdio.h>
#include <stdlib.h>

#define keyType int

typedef struct {
    keyType key;
}ElemType;

// 顺序表表示查找表
typedef struct {
    ElemType* elem; // 存放查找元素的数组
    int length; // 记录查找表中的总数量
}SSTable;

// 创建查找表
void Create(SSTable* st,int* arr){
    int i,length;
    int* p;
    length = 0;
    p = arr;
    while (*p != '\0'){
        length++;
        p++;
    }

    st->elem = (ElemType*) malloc((length + 1) * sizeof(ElemType));
    st->length = length;

    for (i = 0; i<length; i++){
        st->elem[i].key = arr[i];
    }
}

// 顺序查找
int SearchSeq(SSTable st,int key){
    int i;
    for(i = 0; i < st.length; i++){
        if(st.elem[i].key == key){
            return i;
        }
    }
    return -1;
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");

    int location;
    SSTable st;
    // 最后一位为
    int arr[] = {10,14,19,26,27,31,33,35,42,44,'\0'};
    Create(&st,arr);

    location = SearchSeq(st,33);

    if(location == -1){
        printf("查找失败");
    } else{
        printf("目标元素在查找表中的位置为：%d", location + 1);
    }

    free(st.elem);
    return 0;
}
