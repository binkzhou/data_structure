cmake_minimum_required(VERSION 3.25)
project(0603_BiTriTree C)

set(CMAKE_C_STANDARD 11)

add_executable(0603_BiTriTree main.c BiTriTree.h SqStack.h SqStack.c Status.c LinkQueue.c BiTriTree.c)

# 记录要拷贝到*.exe目录下的资源文件
file(GLOB TestData TestData*.txt)
# 将资源文件拷贝到*.exe目录下，不然无法加载
file(COPY ${TestData} DESTINATION ${CMAKE_CURRENT_BINARY_DIR})