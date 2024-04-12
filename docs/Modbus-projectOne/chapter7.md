---
sidebar_position: 7
---

# 第6章 libmodbus使用

## 6.1 libmodbus开发库

### 6.1.1 功能概要

libmodbus是一个免费的跨平台支持RTU和TCP的Modbus库，遵循LGPL V2.1+协议。libmodbus支持Linux、Mac Os X、FreeBSD、QNX和Windows等操作系统。libmodbus可以向符合Modbus协议的设备发送和接收数据，并支持通过串口或者TCP网络进行连接。

作为一个开源项目，libmodbus库还处于开发测试阶段，代码量还不十分庞大，文档和注释也不够全面，本章通过对libmodbus源代码的阅读过程，一方面可以进一步理解Modbus协议，同时也可以学习一个好的开源项目的代码组织及开发过程。 libmodbus的官方网站为 http://libmodbus.org/， 可以从 http://libmodbus.org/download/ 下载源代码。作为开源软件，还可以从GitHub网站获取最新版本的代码GitHub: https://github.com/stephane/libmodbus.git

### 6.1.2 源码获取

libmodbus的源码不断更新，本教程选择版本v3.1.10。打开https://github.com/stephane/libmodbus/tags ，如下图下载：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image1.png) 

本源码也放在网盘中如下目录里：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image2.png) 

解压后，简单查看源代码根目录的构成：

- doc目录: libmodbus库的各API接口说明文档。
- m4目录: 存放GNU m4文件，在这里对理解代码没有意义，可忽略。
- src目录: 全部libmodbus源文件。
- tests目录: 包含自带的测试代码 其他文件对理解源代码关系不大，可以暂时忽略

**图6-2解压libmodbus源代码：**

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image3.png) 

进一步展开src代码目录，如图6-3所示：

**图6-3libmodbus源码构成：**

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image4.png) 

各文件作用如下：

- win32: 定义在Windows下使用Visual Studio编译时的项目文件和工程文件以及相关配置选项等。其中，modbus-9.sln默认使用Visual Studio 2008。
- Makefile.am: Makefile.am是Linux下AutoTool编译时读取相关编译参数的配置文件，用于生成Makefile文件，因为用于Linux下开发，所以在这里暂时忽略
- modbus.c: 核心文件，实现Modbus协议层，定义共通的Modbus消息发送和接收函数各功能码对应的函数。
- modbus.h:  libmodbus对外暴露的接口API头文件。
- modbus-data.c: 数据处理的共通函数，包括大小端相关的字节、位交换等函数
- modbus-private.h: libmodbus内部使用的数据结构和函数定义。
- modbus-rtu.c: 通信层实现，RTU模式相关的函数定义，主要是串口的设置、连接及消息的发送和接收等。
- modbus-rtu.h: RTU模式对外提供的各API定义
- modbus-rtu-private.h:  RTU模式的私有定义。
- modbus-tcp.c: 通信层实现，TCP模式下相关的函数定义，主要包括TCP/IP网络的设置连接、消息的发送和接收等。
- modbus-tcp.h: 定义TCP模式对外提供的各API定义
- modbus-tcp-private.h: TCP模式的私有定义。
- modbus-version.h.in: 版本定义文件。

### 6.1.3 源码阅读

对比比较复杂的源码，使用sourceinsight可以很方便地阅读、分析、编辑源码。

#### 1. 新建工程

运行source Insight，点击菜单“Project->New Project”,如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image5.png) 

设置工程名及工程数据目录：在弹出的New Project对话框中设置“New project name”(项目的名称)，然后设置Where do you want to store the project data file? (项目文件保存位置)，点击Browse按钮选择源码的目录即可，如下图:

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image6.png) 

指定源码目录：在上图界面中点击OK后，弹出如下图所示窗口，填入源码路径：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image7.png) 

添加源码：在新弹出的对话框中，点击“Add”或“Add All”。“Add”是手动选择需要添加的文件，而“Add All”是添加所有文件。我们使用“Add All”,在弹出的提示框中选中“Recursively add lower sub-directories”(递归添加下级的子目录)并点击OK。同样的Remove File,Remove All是移除单个文件或者移除所有文件，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image8.png) 

添加文件完成后会弹出下面窗口，点击“确定”即可：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image9.png) 

此时界面会返回到主界面，如下图所示，点击“Close”：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image10.png) 

#### 2. 同步文件

同步文件的意思是让Source Insight去解析源码，生成数据库，这样有助于以后阅读源码。比如点击某个函数时就可以飞快地跳到它定义的地方。

先点击菜单“Project->Synchronize Files”，如图 2.23所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image11.png) 

在弹出的对话框中 选中“Force all files to be re-parsed”(强制解析所有文件)，并点击“Start”按钮开始同步，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image12.png) 

#### 3.打开工程

前面建议工程后，就会自动打开了工程。如果下次你想打开工程，启动Souce Insight后，点击菜单“Project -> Open Porject”就可以在一个列表中选择以前建立的工程，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image13.png) 

#### 4. 操作示例

在工程中打开文件：点击"P"图标打开文件列表，双击文件打开文件，也可以输入文件名查找文件，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image14.png) 

在文件中查看函数或变量的定义：打开文件后，按住ctrl键的同时，用鼠标点击函数、变量，就会跳到定义它的位置，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image15.png) 

查找函数或变量的引用：右键点击函数或变量，弹出对话框选择“Lookup Reference”；或者双击函数后，使用快捷键"ctrl+/"来查找引用，如下图：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image16.png) 

#### 5. 快捷键

| **快捷键**               | **说明**       |
| ------------------------ | -------------- |
| **Alt + ,**          | 后退           |
| **Alt + .**          | 前进           |
| **F8**               | 高亮选中的字符 |
| **Ctrl+F**           | 查找           |
| **F3或Shift+F3** | 往前查找       |
| **F4或Shift+F4** | 往后查找       |

### 6.1.4 libmodbus与应用程序的关系

libmodbus是一个免费的跨平台支持RTU和TCP的Modbus开发库，借助于libmodbus发库能够非常方便地建立自己的应用程序或者将Modbus通信协议嵌入单体设备libmodbus开发库与应用程序的基本关系如图6-4所示。

**图6-4应用程序与libmodbus的关系：**

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image17.png) 

在对libmodbus的接口及代码框架简单了解之后，不妨再深入细节一探究竟，看看libmodbus都实现了哪些基础功能，以及源代码中对Modbus各功能码和消息顿是如何包装的。具体内容请参看下一章。

## 6.2 libmodbus源代码解析

libmodbus作为一个优秀且免费开源的跨平台支持RTU和TCP模式的Modbus开发库，非常值得大家借鉴和学习。本章对libmodbus源代码进行阅读和分析。

### 6.2.1 核心函数

以Modbus RTU协议为例，主设备、从设备初始化后：

- 主设备就可以启动请求，即“发送消息”给从设备
- 从设备接收到请求后构造数据，启动响应即“发送回复”
- 主机收到响应后，会“检查响应”

如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image18.png) 

分析“libmodbus-3.1.10\tests\unit-test-client.c”、“libmodbus-3.1.10\tests\unit-test-server.c”，可以得到下面核心函数的使用过程：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image19.png) 

### 6.2.2 框架分析与数据结构

站在APP开发的角度来说，使用上一节里介绍的libmodbus函数即可。但是，数据的传输必定涉及到底层数据传输。所以，从数据的收发过程，可以把使用libmodbus的源码分为3层：

- APP：它知道要做什么，主设备要读写哪些寄存，从设备提供、接收什么数据
- Modbus核心层：向上提供接口函数，向下调用底层代码构造数据包并发送、接收数据包并解析
- 后端（数据传输）：进行硬件相关的数据封包与发送、接收与解包

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image20.png) 

对于核心层、后端，抽象出了如下结构体：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image21.png) 

核心层modbus_t结构体的成员含义如下：

| 成员                               | 含义                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| int slave;                         | 从站设备地址                                                 |
| int s;                             | RTU下是串口句柄，TCP下是Socket                               |
| int debug;                         | 是否启动Debug模式（打印调试信息）                            |
| int error_recovery;                | 错误恢复模式：MODBUS_ERROR_RECOVERY_NONE：由APP处理错误MODBUS_ERROR_RECOVERY_LINK：如果有连接错误，则重连MODBUS_ERROR_RECOVERY_PROTOCOL：如果数据不符合协议要求，则清空所有数据 |
| int quirks;                        | 一些奇怪的功能，比如：MODBUS_QUIRK_MAX_SLAVE：从站地址最大值可以到达255MODBUS_QUIRK_REPLY_TO_BROADCAST：回应广播包 |
| struct timeval response_timeout;   | 等待回应的超时时间，默认是0.5S                               |
| struct timeval byte_timeout;       | 接收一个字节的超时时间，默认是0.5S                           |
| struct timeval indication_timeout; | 等待请求的超时时间                                           |
| const modbus_backend_t *backend;   | 硬件传输层的结构体                                           |
| void *backend_data;                | 硬件传输层的私有数据                                         |

后端modbus_backend_t结构体的成员含义如下：

| 成员                          | 含义                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| unsigned int backend_type;    | 后端类型，是RTU还是TCP                                       |
| unsigned int header_length;   | 头部长度，比如RTU数据包前面需要有1字节的设备地址，头部长度就是1 |
| unsigned int checksum_length; | 校验码长度，RTU的校验码是2字节                               |
| unsigned int max_adu_length;  | ADU（数据包）最大长度                                        |
| set_slave                     | 设置从站地址                                                 |
| build_request_basis           | 设置RTU请求包的基本数据，这些数据的格式是一样的，比如req[0]是从设备地址，req[1]是功能码，req[2]和req[3]是寄存器地址，req[4]和req[5]是寄存器数量 |
| build_response_basis          | 设置RTU回应包的基本数据，这些数据的格式是一样的，比如req[0]是从设备地址，req[1]是功能码 |
| prepare_response_tid          | 生产传输标识TID，在TCP中使用                                 |
| send_msg_pre                  | 发送消息前的准备工作，对于RTU是填充CRC检验码，对于TCP是填充头部的Length |
| send                          | 发送数据包                                                   |
| receive                       | 接收数据包                                                   |
| recv                          | 接收原始数据，receive会调用recv得到原始数据然后解析出数据包  |
| check_integrity               | 检查数据包的完整性                                           |
| pre_check_confirmation        | 检查响应数据包是否有效时，先执行pre_check_confirmation做一些简单的检查 |
| connect                       | 硬件相关的连接，对于RTU就是打开串口、设置串口波特率等；对于TCP则是连接对端 |
| is_connected                  | 判断是否已经连接                                             |
| close                         | 关闭连接                                                     |
| flush                         | 清空接收到的、未处理的数据                                   |
| select                        | 阻塞一段时间以等待数据                                       |
| free                          | 释放分配的modbus_t等结构体                                   |

### 6.2.3 情景分析

以“modbus_write_bits”函数为例，分析下图的执行流程：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image22.png) 

#### 1. 初始化

#### 2. 主设备发送请求

#### 3. 从设备接收请求

#### 4.从设备回应

### 6.2.4 常用接口函数

下面分析 libmodbus开发库提供的所有接口API函数。其主要对象文括 modbus.h 和 modbus.c ,接口函数大致可分为3类,以下分别进行介绍。

#### 1. 各类辅助接口函数

MODBUS_API int modbus_set_slave(modbus t * ctx,int slave)

此函数的功能是设置从站地址，但是由于传输方式不同而意义稍有不同。

- **RTU模式 :**

如果 libmodbus应用于 主站设备端，则相当于定义 远端设备ID ；如果libmodbus应用于从站设备端 ，则相当于定义 自身设备 ID ；在 RTU 模式下参数 slave 取值范围为 0~247 ，其中 0(MODBUS_BROADCAST_ADDRESS) 为广播地址。

- **TCP模式:**

通常，TCP 模式下此函数不需要使用。在某些特殊场合，例如串行 Modbus设备转换为 TCP模式传输的情况下,此函数才被使用。此种情况下,参数 slave取值范围为 0~247 ，0 为广播地址;如果不进行设置,则 TCP 模式下采用默认值 MODBUS TCP SLAVE(OXFF) 。

**下面的代码以 RTU模式、主设备(MASTER)端为例：**

```c
modbus_t * ctx;

ctx=modbus_new_rtu("COM4"，115200，'N'，8，1);

if (ctx ==NULL)

{

  fprintf(stderr，"Unable to create the libmodbus context\n");

  return -1;

}

rc =modbus_set_slave(ctx，YOUR DEVICE ID);

if (rc==-1)

{

  fprintf(stderr，"Invalid slave ID\n");

  modbus free(ctx);

  return -1;

}

if (modbus connect(ctx)==-1)

{

  fprintf(stderr,"Connection failed:sn",modbus strerror(errno));

  modbus free(ctx);

  return -1;

} 
```

**MODBUS_APIintmodbus_set_error_recovery(modbus_t\*ctx，modbus_error_recovery_mode error_recovery)：**

此函数用于在连接失败或者传输异常的情况下,设置错误恢复模式。有 3种错误恢复模式可选。

```c
typedef enum

{

  MODBUS_ERROR_RECOVERY_NONE        =0,             //不恢复

  MODBUS_ERROR_RECOVERY_LINK        =(1<<1),           //链路层恢复

  MODBUS_ERROR_RECOVERY_PROTOCOL      =(1<<2)           //协议层恢复

}modbus error recovery mode;
```

默认情况下，设置为 MODBUS_ERROR_RECOVERY_NONE ，由应用程序自身处理错误；若设置为 MODBUS_ERROR_RECOVERY_LINK ，则经过一段延时 libmodbus 内部自动尝试进行断开/连接；若设置为 MODBUS_ERROR_RECOVERY_PROTOCOL ，则在传输数据 CRC 错误或功能码错误的情况下,传输会进入延时状态，同时数据直接被清除。在 SLAVE/SERVER 端，不推荐使用此函数。

**基本用法举例:**

modbus_set_error_recovery(ctx,MODBUS_ERROR_RECOVERY_LINK|MODBUS_ERROR_RECOVERY_PROTOCOL)；

**MODBUS_API int modbus_set_socket(modbus t \* ctx,int s)**

此函数设置当前 SOCKET 或串口句柄要用于多客户端连接到单一服务器的场合。简单用法举例如下，后续介绍函数 modbus_tcp_listen() 时将会进一步介绍相关用法。

```c
#define NB_CONNECTION 5

modbus_t * ctx;

ctx=modbus_new_tcp("127.0.0.1", 1502)

server_socket = modbus_tcp_listen(ctx,NB_CONNECTION);

FD_ZERO(&rdset);

FD_SET(server_socket,&rdset);

/* ... */

if (FD_ISSET(master_socket,&rdset))

{

  modbus_set_socket(ctx,master_socket);

  rc =modbus_receive(ctx,query);

  if(rc!=-1)

  {

  modbus_reply(ctx,query, rc,mb_mapping);

  }

}
```

**MODBUS_API int modbus_get_response_timeout (modbus_t \* ctx, uint32_t \* to_sec, uint32_t \* to_usec)；**

**MODBUS_API int modbus_set_response_timeout (modbus_t \* ctx, uint32_t \* to_sec, uint32_t \* to_usec)；**

用于获取或设置响应超时,注意时间单位分别是秒和微秒。

**MODBUS_API int modbus_get_byte_timeout (modbus_t \* ctx, uint32_t \* to_sec，uint32_t \* to_usec);**

**MODBUS_API int modbus_set_byte_timeout (modbus_t \* ctx, uint32_t \* to_sec，uint32_t \* to_usec)；**

用于获取或设置连续字节之间的超时时间,注意时间单位分别是秒和微秒。

**MODBUS_API intmodbus_get_header_length (modbus_t \* ctx)；**

获取报文头长度。

**MODBUS_API int modbus_connect (modbus_t \* ctx)；**

此函数用于主站设备与从站设备建立连接。

在 RTU 模式下，它实质调用了文件 modbus_rtu.c 中的函数 static int modbus_rtu_connect (modbus_t * ctx) ；在此函数中进行了串口波特率校验位、数据位、停止位等的设置。

在 TCP 模式下，modbus_connect() 调用了文件 modbus_tcp.c 中的函数 static int_modbus_tcp_connect (modbus_t * ctx ) ；在函数 **_modbus_tcp_connect() 中，对 TCP/IP** 各参数进行了设置和连接。

**MODBUS_API void modbus_close (modbus_t \* ctx)；**

关闭 Modbus 连接。在应用程序结束之前，一定记得调用此函数关闭连接在 RTU 模式下,实质是调用函数 **_modbus_rtu_close(modbus_t * ctx)** 关闭串口句柄；在 TCP 模式下,实质是调用函数 **_modbus_tcp_close(modbust * ctx)** 关闭 Socket 句柄。 

**MODBUS_API void modbus_free (modbus_t * ctx)；**

释放结构体 modbus_t 占用的内存。在应用程序结束之前，一定记得调用此函数

**MODBUS_API int modbus_set_debug (modbust \* ctx, int flag)；**

此函数用于是否设置为DEBUG模式。

若参数 flag 设置为TRUE,则进入 DEBUG模式。若设置为FALSE,则切换为非 DEBUG模式。在 DEBUG模式下所有通信数据将按十六进制方式显示在屏幕上，以方便调试。

**MODBUS_API const char \* modbus_strerror (int errnum）；**

此函数用于获取当前错误字符串。

#### **2.** **各类Modbus功能接口函数**

**MODBUS_API int modbus_read_bits (modbus t \* ctx, int addr, int nb, uint8_t \* dest)；**

此函数对应于功能码 01(0x01) 读取线圈/离散量输出状态(Read Coil Status/DOs)，其中，所读取的值存放于参数 uint8_t * dest 指向的数组空间因此 dest 指向的空间必须足够大,其大小至少为 nb * sizeof(uint8_t) 个字节。

**用法举例:**

```c
#define SERVER ID        1
#define ADDRESS START      0
#define ADDRESS END       99

modbus_t * ctx;

uint8_t * tab_rp_bits;
int rc;
int nb;

ctx=modbus_new_tcp("127.0.0.1",502);
modbus_set_debug(ctx，TRUE);
if (modbus_connect(ctx)==-1)

{
  fprintf(stderr,"Connection failed:%s\n", modbus_strerror(errno));
  modbus free(ctx);
  return -1;
}

//申请存储空间并初始化
int nb = ADDRESS_END - ADDRESS_START;
tab_rp_bits = (uint8_t * ) malloc (nb * sizeof(uint8_t));
memset(tab_rp_bits, 0, nb * sizeof(uint8_t));

//读取一个线圈
int addr =1;
rc =modbus_read_bits(ctx,addr,1,tab_rp_bits);
if (rc !=1)
{
  printf("ERROR modbus_read_bits_single (%d)\n", rc);
  printf("address =%d\n", addr);
}

//读取多个线圈

rc =modbus_read_bits(ctx,addr,nb,tab_rp_bits);
if (rc !=nb)
{
  printf("ERROR modbus_read_bits\n");
  printf("Address =%d,nb =%d\n", addr, nb);
}

//释放空间关闭连接

free(tab_rp_bits);
modbus_close(ctx);
modbus_free(ctx);
```

**MODBUS_API int modbus_read_input_bits (modbus_t \* ctx, int addr, int nb,uint8_t \* dest)；**

此函数对应于功能码 02(0x02) 读取离散量输入值(Read Input Status/DIs)，各参数的意义与用法，类似于函数 modbus_read_bits() 。

**MODBUS_API int modbus_read_registers (modbus_t \* ctx, int addr, int nb，uint16_t \* dest)；**

此函数对应于功能码 03(0x03) 读取保持寄存器(Read Holding Register),其中,所读取的值存放于参数 uint16_t * dest 指向的数组空间因此 dest 指向的空间必须足够大,其大小至少为 nb * sizeof(uint16_t) 个字节。

当读取成功后,返回值为读取的寄存器个数;若读取失败,则返回-1。此函数调用依赖关系如下图6-5所示。

**用法举例:**

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image23.png)

```c
modbust * ctx;
uint16_t tab_reg[64];
int rc;
int i;

ctx=modbus_new_tcp("127.0.0.1",502);
if (modbusconnect(ctx)==-1)
{
  fprintf(stderr,"Connection failed:%s\n", modbus_strerror(errno));
  modbus_free(ctx);
  return -1;
}

//从地址0开始连续读取10个

rc =modbus_read_registers(ctx,0,10,tab_reg);
if (rc ==-1)
{
  fprintf(stderr,"%s\n",modbus_strerror(errno));
  return -1;
}

for (i=0;i<rc;i++)
{
  printf("reg[%d]=%d(0x%X)\n",i,tab_reg[i],tab_reg[i]);
}

modbus_close(ctx);
modbus_free(ctx);
```

**MODBUS_API int modbus_read_input_registers (modbus_t \* ctx，int addr, int nb, uint16_t \* dest )；**

此函数对应于功能码 04(0x04) 读取输人寄存器(Read Iput Register)，各参数的意义与用法,类似于函数 modbus_read_registers() 。

此函数的调用依赖关系如下图 6-6 所示。

**图6-6函数 modbus_read input_registers()的调用依赖关系**：

  ![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image24.png)

**MODBUS_API int modbus_write_bit (modbus_t \* ctx, int coil_addr, int status)：**

该函数对应于功能码 05(0x05) 写单个线圈或单个离散输出(Force SingleCoil)。其中参数 coil_addr 代表线圈地址；参数 status 代表写值取值只能是TRUE(1)或 FALSE(0) 。

**MODBUS_API int modbus_write_register (modbus_t \* ctx，int reg_addr, int value)：**

该函数对应于功能码 06(0x06) 写单个保持寄存器(Preset Single Register)。

**MODBUS_API int modbus_write_bits (modbus_t \* ctx, int addr, int nb, const uint8_t \* data)：**

该函数对应于功能码 15(0x0F) 写多个线圈(Force Multiple Coils)

参数 addr 代表寄存器起始地址,参数 nb 表示线圈个数，而参数 const uint8_t * data 表示待写入的数据块。一般情况下,可以使用数组存储写入数据,数组的各元素取值范围只能是 TRUE(1)或 FALSE(0) 。

**MODBUS_API int modbus_write_registers (modbus_t \* ctx, int addr, int nb, const uint16_t \* data)：**

该函数对应于功能码 16(0x10) 写多个保持存器(Preset MultipleRegisters)

参数 addr 代表寄存器起始地址,参数 nb 表示存器的个数而参数 const uint16_t * data 表示待写人的数据块。一般情况下,可以使用数组存储写入数据数组的各元素取值范围是 0~0xFFFF 即数据类型 uint16_t 的取值范围。

**MODBUS_API int modbus_mask_registers (modbus_t \* ctx, int addr, uint16_t and_mask, uint16_t or_mask )：**

modbus_mask_write_register() 函数应使用以下算法修改远程设备地址“addr”处的保持寄存器的值：

新值 = (current value AND ‘and’) OR (‘or’ AND (NOT ‘and’)) 。

该功能使用 Modbus 功能代码 0x16（掩码单个寄存器）。

**MODBUS_API int modbus_write_and_read_registers (mobus_t \* ctx ,**

 **int writer_addr,**

**int writer_nb,**

**const uint16_t \* src,**

**int read_addr,**

**int read_nb,**

**uint16_t \* dest);**

modbus_write_and_read_registers() 函数应将 write_nb 保持寄存器的内容从数组 “src” 写入远程设备的地址 write_addr ，然后将 read_nb 保持寄存器的内容读取到远程设备的地址 read_addr 。读取结果作为字值（16 位）存储在 dest 数组中。

必须注意分配足够的内存来存储结果 dest (至少 nb * sizeof(uint16_t)）。该功能使用 Modbus 功能代码 0x17（写/读寄存器）。

**MODBUS_API int modbus_report_slave_id (modbus_t \* ctx, int max_dest, uint8_t \* dest)：**

该函数对应于功能码 17(0x11) 报告从站ID。参数 max_dest 代表最大的存储空间,参数 dest 用于存储返回数据。返回数据可以包括如下内容:从站 ID状态值(0x00= OFF状态, 0xFF=ON状态) 以及其他附加信息，具体的各参数意义由开发者指定。

**用法举例:**

```c
uint8_t tab_bytes[MODBUS_MAX_PDU_LENGTH];

...

rc =modbus_report_slave_id(ctx, MODBUS_MAX_PDU_LENGTH, tab_bytes);

if (rc>1)
{
  printf("Run Status Indicator: %s\n",tab_bytes[1] ?"ON":"OFF");
}
```

#### 3. 数据处理的相关函数或宏定义

在libmodbus开发库中，为了方便数据处理在 modbus.h 文件中定义了一系列数据处理宏。

例如获取数据的高低字节序宏定义：

```c
#define MODBUS_GET_HIGH_BYTE (data) (((data) >>8) & 0xFF)
#define MODBUS_GET_LOW_BYTE (data) ((data) & 0xFF)
```

对于浮点数等多字节数据而言,由于存在字节序与大小端处理等的问题，所以辅助定义了一些特殊函数:

```c
MODBUS_API float modbus_get_float (const uint16_t * src);

MODBUS_API float modbus_get_float_abcd (const uint16_t * src);

MODBUS_API float modbus_get_float_dcba (const uint16_t * src);

MODBUS_API float modbus_get_float_badc (const uint16_t * src);

MODBUS_API float modbus_get_float_cdab (const uint16_t * src);

MODBUS_API void modbus_set_float (float f,uint16_t * dest);

MODBUS_API void modbus_set_float_abcd (float f,uint16_t * dest);

MODBUS_API void modbus_set_float_dcba (float f,uint16_t * dest);

MODBUS_API void modbus_set_float_badc (float f,uint16_t * dest);

MODBUS_API void modbus_set_float_cdab (float f,uint16_t * dest);
```

当然,可以参照 float 类型的处理方法,继续定义其他多字节类型的数据例如int32_t、uint32_t、 int64_t、uint64_t 以及 double 类型的读写函数。

### 6.2.5 RTU/TCP关联接口函数

在文件 modbus.h 的最后位置,有如下语句

\#include "modbus-tcp.h"

\#include "modbus-rtu.h"

可以发现,除了 modbus.h 包含的接口函数之外，modbus-rtu.h 和 modbus-tcp.h 也包含了必要的接口函数。

#### 1. RTU模式关联函数

**MODBUS_API modbus_t \* modbus_new_rtu (const char \* device, int baud, char parity, int data_bit, int stop_bit)：**

此函数的功能是创建一个 RTU 类型的 modbus_t 结构体。参数 const char * device 代表串口字符串，在 Windows 操作系统下形态如 “COMx” ，有一点需要注意的是，对于串口1串口9来说,，传递 “COM1”“COM9” 可以 成功 ，但是如果操作对象为 COM10及以上端口 ，则会出现 错误。

产生这种奇怪现象的原因是:微软预定义的标准设备中含有 “COM1”~“COM9” 。所以，“COM1”~“COM9” 作为文件名传递给函数时操作系统会自动地将之解析为相应的设备。但对于 COM10 及以上的串口，“COM10” 之类的文件名系统只视之为 一般意义上的文件,而非串行设备。为了增加对 COM10 及以上串行端口的支持,微软规定,如果要访问这样的设备,应使用这样的文件名(以COM10 为例):\\\\.\ COM10。

所以,使用时在代码中可以如此定义:.

**const char \* device = “\\\\.\\COM10”;**

在Linux操作系统下可以使用”/dev/ttySo”或”/dev/ttyUSB0”等形式的字符串来表示。而参数 int baud 表示串口波特率的设置值，例如:9600、19200、57600、115200等。

参数char parity 表示奇偶校验位，取值范围：

- ‘N’:无奇偶校验；
- ‘E’:偶校验；
- ‘O’:奇校验。

参数 int data_bit 表示数据位的长度,取值范围为 5、6、7和8。

参数int stop_bit 表示停止位长度，取值范围为1或2。

**用法举例:**

```c
modbus t *ctx;

ctx=modbus_new_rtu("\\\\.\\COM10",115200,'N',8,1);

if (ctx ==NULL)
{
  fprintf(stderr,"Unable to create the libmodbus context\n");
  return -1;
}

modbus_set_slave(ctx,SLAVE_DEVICE_ID);

if (modbus connect(ctx)==-1)
{
  fprintf(stderr,"Connection failed:%s\n",modbus_strerror(errno));
  modbus_free(ctx);
  return -1;
}
```

**MODBUS_API int modbus_rtu_set_serial_mode (modbus_t \* ctx, int mode)：**

该函数用于设置串口为 MODBUS RTU RS232或MODBUSRTU_RS485模式,此函数只适用于 Linux 操作系统下。

**MODBUS_API int modbus_rtu_set_rts (modbus_t \* ctx, int mode)。**

**MODBUS_API int modbus_rtu_set_custom_rts (modbus_t \* ctx, void ( \* set_rts) (modbus_t \* ctx, int on))。**

**MODBUS_API int modbus_rtu_set_rts_delay (modbus_t \* ctx, int us)。**

以上函数只适用于 Linux 操作系统下,RTS 即Request ToSend 的缩写，具体的意义可通过网络搜索，一般情况下，此类函数可忽略。

#### 2. TCP模式关联函数

**MODBUS_API modbus_t \* modbus_new_tcp (const char \*ip_address, int port)**。

此函数的功能是创建一个TCP/IPv4 类型的modbus_t 结构体。

参数 const char * ip_address 为IP地址,port 表示远端设备的端口号。

**MODBUS_API int modbus_tcp_listen (modbus_t \* ctx, int nb_connection)。**

此函数创建并监听一个 TCP/IPv4 上的套接字。

参数int nb_connection 代表最大的监听数量,在调用此函数之前，必须首先调用modbus_new_tcp() 创建modbus_t结构体。

**MODBUS_API int modbus_tcp_accept (modbus_t \* ctx，int \* s)。**

此函数接收一个 TCP/IPv4 类型的连接请求,如果成功将进入数据接收状态。

## 6.3 libmodbus移植与使用

### 6.3.1 移植方法

以串口为例，libmodbus支持了windows系统、Linux系统。如果要在Freertos或者裸机上使用libmodbus，需要移植libmodbus里操作硬件的代码。

根据下图的层次，要移植libmodbus的“后端”，就是构造自己的modbus_backend_t结构体：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image25.png) 

后端modbus_backend_t结构体的成员含义如下：

| 成员                          | 含义                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| unsigned int backend_type;    | 后端类型，是RTU还是TCP                                       |
| unsigned int header_length;   | 头部长度，比如RTU数据包前面需要有1字节的设备地址，头部长度就是1 |
| unsigned int checksum_length; | 校验码长度，RTU的校验码是2字节                               |
| unsigned int max_adu_length;  | ADU（数据包）最大长度                                        |
| set_slave                     | 设置从站地址                                                 |
| build_request_basis           | 设置RTU请求包的基本数据，这些数据的格式是一样的，比如req[0]是从设备地址，req[1]是功能码，req[2]和req[3]是寄存器地址，req[4]和req[5]是寄存器数量 |
| build_response_basis          | 设置RTU回应包的基本数据，这些数据的格式是一样的，比如req[0]是从设备地址，req[1]是功能码 |
| prepare_response_tid          | 生产传输标识TID，在TCP中使用                                 |
| send_msg_pre                  | 发送消息前的准备工作，对于RTU是填充CRC检验码，对于TCP是填充头部的Length |
| send                          | 发送数据包                                                   |
| receive                       | 接收数据包                                                   |
| recv                          | 接收原始数据，receive会调用recv得到原始数据然后解析出数据包  |
| check_integrity               | 检查数据包的完整性                                           |
| pre_check_confirmation        | 检查响应数据包是否有效时，先执行pre_check_confirmation做一些简单的检查 |
| connect                       | 硬件相关的连接，对于RTU就是打开串口、设置串口波特率等；对于TCP则是连接对端 |
| is_connected                  | 判断是否已经连接                                             |
| close                         | 关闭连接                                                     |
| flush                         | 清空接收到的、未处理的数据                                   |
| select                        | 阻塞一段时间以等待数据                                       |
| free                          | 释放分配的modbus_t等结构体                                   |

本节先写出模板：

根据这个源码：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image26.png) 

改出：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image27.png) 

### 6.3.2 使用USB串口作为后端

基于这2个程序：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image28.png) 

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image29.png) 

第1步：合并上述2个源码，并修改到能编译成功（但是libmodbus里对USB串口的操作），结果放在如下目录：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image30.png) 

第2步，继续修改上图的代码，实现USB串口作为后端，得到以下代码：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image31.png) 

USB串口的操作函数：

```c
/* 发送数据 */

int ux_device_cdc_acm_send(uint8_t *datas, uint32_t len, uint32_t timeout);

/* 接收数据 */

int ux_device_cdc_acm_getchar(uint8_t *pData, uint32_t timeout);
```



### 6.3.3 libmodbus从机实验(USB串口)

本节源码为：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image32.png) 

参考“libmodbus-3.1.10\tests\unit-test-server.c”，把开发板当做从机，使用PC上Modbus Poll软件读写开发板：控制LED。

要点：

① printf、fprintf、vfprintf都不能使用，改成空的宏

### 6.3.4 libmodbus主机实验(USB串口)

本节源码为：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image33.png) 

参考“libmodbus-3.1.10\tests\unit-test-client.c”，把开发板当做主机，去读写PC上Modbus Slave软件模拟的从机。

### 6.3.5 使用板载串口作为后端

学习本节课程前，先观看《3.5.3 面向对象封装UART》，并且观看对应视频《3-9-1_面向对象封装UART_完善收发功能》、《3-9-2_面向对象封装UART_实现结构体》。

本节代码如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image34.png) 

按照下图连线：调试、供电、两个485互连，使用CH1（左边的RS485接口）作为主设备，访问CH2（右边的RS485接口）：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image35.png) 

#### 1. 使用UART_Device

这2个视频，是在开始本节课程之前才补录的：《3-9-1_面向对象封装UART_完善收发功能》、《3-9-2_面向对象封装UART_实现结构体》。这两个视频里，把UART2、UART4的发送、接收功能都补全了，并且构造了对应的UART_Device结构体，里面实现了初始化、发送、接收一个自己的的函数，如下：

把UART2、UART4封装为UART_Device的代码为：“3_程序源码\01_视频配套的源码\3-9_面向对象封装UART\uart_rtos_all_ok.7z”。需要把它的代码移植到本节的工程里：

- 使用STM32CubeMX配置UART2、UART4：发送、接收都使用DMA
- 复制代码：Core\Src\usart.c、Drivers\Module_driver\uart_device.c/h

使用STM32CubeMX配置的过程如下：

- 使能DMA通道：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image36.png) 

- 各个DMA通道的配置如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image37.png) 

#### 2. 用作后端

把UART2、UART4用作libmodbus后端时，只需要修改这几个函数即可：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image38.png) 

有两个UART_Device，调用哪个UART_Device？在使用“modbus_new_st_rtu”创建modbus_t时，根据传入的设备名在modbus_t结构体里记录对应的UART_Device。_modbus_rtu_connect、_modbus_rtu_send、_modbus_rtu_recv这三个函数，就可以直接调用modbus_t结构体里的UART_Device函数了。

### 6.3.6 libmodbus实验(板载串口)

本节源码为：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image39.png) 

按照下图连线：调试、供电、两个485互连：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter7/image40.png) 

创建一个ClientTask，使用CH2（右边的RS485接口）对外通信。

创建一个ServerTask，使用CH1（左边的RS485接口）读写从设备数据。

 

 

 

 

 

 

 