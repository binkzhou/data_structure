cmake_minimum_required(VERSION 3.25)
project(0404_KMP C)

set(CMAKE_C_STANDARD 11)

add_executable(0404_KMP main.c SString.c SString.h KMP.h KMP.c)
