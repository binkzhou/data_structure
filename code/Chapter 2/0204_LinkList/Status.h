/**
 * 公共模块
 */

#ifndef STATUS_H
#define STATUS_H

#define TRUE    1  // 真
#define FALSE   0  // 假
#define OK      1  // 成功
#define ERROR   0  // 失败

//系统中已有此状态码定义，要防止冲突
#ifdef  OVERFLOW
#define OVERFLOW -2 // 堆栈上溢
#endif

//系统中已有此状态码定义，要防止冲突
#ifndef NULL
#define NULL ((void*)0)
#endif

/* 状态码类型 */
typedef int Status;

/* 布尔类型 */
typedef int Boolean;

#endif
