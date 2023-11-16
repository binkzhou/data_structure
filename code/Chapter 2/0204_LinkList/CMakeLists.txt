cmake_minimum_required(VERSION 3.25)
project(0204_LinkList C)

set(CMAKE_C_STANDARD 11)

add_executable(0204_LinkList LinkList.h Status.h Status.h LinkList.c main.c)
