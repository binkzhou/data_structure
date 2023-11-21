cmake_minimum_required(VERSION 3.25)
project(0305_Expression_ C)

set(CMAKE_C_STANDARD 11)

add_executable(0305_Expression_ main.c SqStack.c Expression.h Expression.c)
