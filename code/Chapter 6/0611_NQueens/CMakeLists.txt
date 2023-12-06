cmake_minimum_required(VERSION 3.25)
project(0611_NQueens C)

set(CMAKE_C_STANDARD 11)

add_executable(0611_NQueens Status.h Status.c NQueens.h NQueens.c main.c)
