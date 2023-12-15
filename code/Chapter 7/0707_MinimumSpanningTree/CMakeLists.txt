cmake_minimum_required(VERSION 3.25)
project(0707_MinimumSpanningTree C)

set(CMAKE_C_STANDARD 11)

add_executable(0707_MinimumSpanningTree main.c Status.h Status.c MGraph.h MGraph.c MFSet.h MFSet.c MinimumSpanningTree.h MinimumSpanningTree.c)

# 记录要拷贝到*.exe目录下的资源文件
file(GLOB TestData TestData*.txt)
# 将资源文件拷贝到*.exe目录下，不然无法加载
file(COPY ${TestData} DESTINATION ${CMAKE_CURRENT_BINARY_DIR})
