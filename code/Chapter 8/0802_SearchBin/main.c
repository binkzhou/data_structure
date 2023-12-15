#include <stdio.h>
#include <stdlib.h>

#define MAX 10


// 折半查找
int Search_Bin(const int* arr,int key){
    int low = 0;
    int high = MAX - 1;
    int mid;

    while (low <= high){
        mid = (low + high) / 2;
        if(arr[mid] == key){
            return mid;
        }

        if(arr[mid] > key){
            high = mid - 1;
        } else{
            low = mid + 1;
        }
    }

    return -1;
}

int main() {
    // 设置输出为UTF-8
    system("chcp 65001");
    int location;


    int arr[MAX] = {10,14,19,26,27,31,33,35,42,44};

    // 二分查找
    location = Search_Bin(arr,33);

    if(location == -1){
        printf("查找失败");
    } else{
        printf("目标元素在查找表中的位置为：%d", location + 1);
    }

    return 0;
}
