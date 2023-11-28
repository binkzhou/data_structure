cmake_minimum_required(VERSION 3.25)
project(0505_GList_HT C)

set(CMAKE_C_STANDARD 11)

add_executable(0505_GList_HT main.c SString.h SString.c Status.c GList-HT.h GList-HT.c)
