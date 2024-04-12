---
sidebar_position: 4
---

# 第3章 UART 开发基础

## 3.1 同步传输与异步传输

### 3.1.1 概念与示例

使用生活例子来说明什么是同步、异步：

- 同步：朋友打电话说到我家吃饭，我在家里等他们
- 异步：朋友没有提前打招呼，突然就到我家来了

它们的差别在于：有没有使用一种方法“实现约好时间”。

在电子产品中， 使用同步传输时， 一般涉及两个信号：

- 时钟信号：用来通知对方要读取数据了
- 数据信号：用来传输数据

同步传输示例如下：

- 时钟信号：打电话，起约定作用
- 数据信号：传输数据

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image1.png) 

异步传输示例如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image2.png) 

使用异步信号传输数据时，双方遵守相同的约定：

- 起始信号：发送方可以通知接收方"注意了，我要开始传输数据了"
- 数据的表示： 怎么表示逻辑 1，怎么表示逻辑 0。

以红外遥控器解码器为例，它向单片机发出的数据格式如下：

- 起始信号：解码器发出一个 9ms 的低电平、 4.5ms 的高电平， 用来同时对方说"开始了"

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image3.png) 

- 表示一位数据
  - 逻辑 1：0.56ms 的低电平+1.69ms 的高电平
  - 逻辑 0：0.56ms 的低电平+0.56ms 的高电平

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image4.png) 

- 接收方、发送方都遵守这样的约定， 就可以使用一条线传输数据

### 3.1.2 差别

|            | 同步传输                    | 异步传输           |
| ---------- | --------------------------- | ------------------ |
| 信号线     | 多：时钟信号、数据信号      | 少：只需要数据信号 |
| 速率       | 可变， 提高时钟信号频率即可 | 双方提前约定       |
| 抗干扰能力 | 强                          | 弱                 |

##  3.2 UART 协议与操作方法

### 3.2.1 UART 协议

通用异步收发器简称 UART，即“Universal Asynchronous Receiver Transmitter”， 它用来传输串行数据：发送数据时，CPU 将并行数据写入 UART，UART 按照一定的格式在一 根电线上串行发出；接收数据时， UART 检测另一根电线上的信号，将串行数据收集放在缓 冲区中，CPU 即可读取 UART 获得这些数据。 UART 之间以全双工方式传输数据，最精简的连 线方法只有三根电线：TxD 用于发送数据， RxD 用于接收数据，GND 用于给双方提供参考电 平，连线如图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image5.png)  

UART 使用标准的 TTL/CMOS 逻辑电平(0～5V、0～3.3V、0～2.5V 或 0～1.8V 四种)来表 示数据，高电平表示 1，低电平表示 0。进行长距离传输时，为了增强数据的抗干扰能力、 提高传输长度， 通常将 TTL/CMOS 逻辑电平转换为 RS-232 逻辑电平， 3～12V 表示 0，-3～- 12V 表示 1。

TxD、RxD 数据线以“位”为最小单位传输数据。帧(frame)由具有完整意义的、不可  分割的若干位组成，它包含开始位、数据位、较验位(需要的话)和停止位。发送数据之前，

UART 之间要约定好数据的传输速率(即每位所占据的时间，其倒数称为波特率)、数据的传

输格式(即有多少个数据位、是否使用较验位、是奇较验还是偶较验、有多少个停止位)。 数据传输流程如下：

- 平时数据线处于“空闭”状态(1 状态)。
- 当要发送数据时，UART 改变 TxD 数据线的状态(变为 0 状态)并维持 1 位的时间──这 样接收方检测到开始位后，再等待 1.5 位的时间就开始一位一位地检测数据线的状态 得到所传输的数据。
- UART 一帧中可以有 5、6、7 或 8 位的数据，发送方一位一位地改变数据线的状态将它 们发送出去，首先发送最低位。
- 如果使用较验功能， UART 在发送完数据位后，还要发送 1 个较验位。有两种较验方法： 奇较验、偶较验──数据位连同较验位中， “1”的数目等于奇数或偶数。
- 最后， 发送停止位， 数据线恢复到“空闭”状态(1 状态)。停止位的长度有 3 种： 1 位、 1.5 位、 2 位。

下图演示了 UART 使用 7 个数据位、偶较验、2 个停止位的格式传输字符“A ”(二进制 值为 0b01000001)时， TTL/CMOS 逻辑电平、 RS-232 逻辑电平对应的波形。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image6.png)

双方约定了“传输一 bit 数据的时间”， 就可以算出 1 秒内能传输多少 bit 数据， 这 被称为“比特率”， 又经常被称为“波特率”。两者有什么关系？

假设发送方 A 能精确控制信号的电压， 接收方 B 也能精确识别电压， 双方如此约定：

| 电压范围  | 表示的两 bit 数据 |
| --------- | ----------------- |
| 0~0.7V    | 0b00              |
| ~0.8 1.5V | 0b01              |
| 1.6~2.3V  | 0b10              |
| ~2.4 3.3V | 0b11              |

那么要传输一个字节的数据， 比如 0x78，它的二进制数为 0b01,11,10,00，只需要传 输 4 次（假设 1ms 改变一次电压， 假设先传输低位）：

- 第 1ms，A 设置电压为 0V，B 识别出电压后，认为收到了 bit1 为 0、bit0 为 0
- 第 2ms，A 设置电压为 1.6V，B 识别出电压后， 认为收到了 bit3 为 1、bit2 为 0 
- 第 3ms，A 设置电压为 2.4V，B 识别出电压后， 认为收到了 bit5 为 1、bit4 为 1
- 第 4ms，A 设置电压为 0.8V，B 识别出电压后， 认为收到了 bit7 为 0、bit6 为 1

只需要 4ms，就传输了 4 个状态，但是传输了 8bit 数据：波特率*2=比特率。

假设发送方 A 精确控制信号电压的能力比较差，只能保证 0~0.7V、1.8~3.3V 的电压比 较稳定；接收方 B 识别电压的能力也不够精确，只能保证可以识别出 0~0.7V、1.8 3.3V 的 电压， 于是双方约定：

| 电压范围 | 表示的 1 bit 数据 |
| -------- | ----------------- |
| 0~0.7V   | 0                 |
| 1.8~3.3V | 1                 |

那么要传输一个字节的数据， 比如 0x78，它的二进制数为 0b01111000，需要传输 8 次 （假设 1ms 改变一次电压，假设先传输低位）：

- 第 1ms，A 设置电压为 0V，B 识别出电压后，认为收到了 bit0 为 0
- 第 2ms，A 设置电压为 0V，B 识别出电压后，认为收到了 bit1 为 0
- 第 3ms，A 设置电压为 0V，B 识别出电压后，认为收到了 bit2 为 0
- 第 4ms，A 设置电压为 3.3V，B 识别出电压后， 认为收到了 bit3 为 1
- 第 5ms，A 设置电压为 3.3V，B 识别出电压后， 认为收到了 bit4 为 1
- 第 6ms，A 设置电压为 3.3V，B 识别出电压后， 认为收到了 bit5 为 1
- 第 7ms，A 设置电压为 3.3V，B 识别出电压后， 认为收到了 bit6 为 1
- 第 8ms，A 设置电压为 0V，B 识别出电压后，认为收到了 bit7 为 0

需要 8ms，传输 8 个状态， 传输了 8bit 数据：波特率=比特率。

所以，波特率： 1 秒内传输信号的状态数（波形数）。比特率： 1 秒内传输数据的 bit 数。如果一个波形， 能表示 N 个 bit，那么：波特率 * N = 比特率。

### 3.2.2 STM32H5 UART 硬件结构

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image7.png) 

### 3.2.3 RS485 协议

使用 RS485 协议传输数据时， 电路图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image8.png) 

RS485 协议里，使用 A、B 差分信号线传输数据： 两线间的电压差为+（2 至 6）V 表示 逻辑 1，电压差为-（2 至 6）V 时表示逻辑 0。它是半双工的传输方式：MCU1 要发送数据 时，从 TxD 引脚把数据发送给电平转换芯片 MAX13487EESA，它把 TxD 的信号转换为差分信 号传递给另一个电平转换芯片 MAX13487EESA，进而转换为 TTL 电平通过 RO 发送到 MCU2 的 RxD 引脚。MCU2 要给 MCU1 发送数据的话，必须等待差分信号线处于空闲状态。

对于软件而言， 使用 RS485 跟普通的 UART 没有区别。

## 3.3 UART 编程

### 3.3.1 硬件连接

按照下图连线： 调试、供电、两个 485 互连。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image9.png) 

### 3.3.2 三种编程方式

结合 UART 硬件结构， 有 3 种编程方法：

- 查询方式：
  - 要发送数据时， 先把数据写入 TDR 寄存器， 然后判断 TDR 为空再返回。当然也可以先 判断 TDR 为空， 再写入。
  - 要读取数据时， 先判断 RDR 非空， 再读取 RDR 得到数据。
- 中断方式：
  - 使用中断方式， 效率更高，并且可以在接收数据时避免数据丢失。
  - 要发送数据时， 使能“TXE”中断（发送寄存器空中断）。在 TXE 中断处理函数里， 从 程序的发送 buffer 里取出一个数据， 写入 TDR。等再次发生 TXE 中断时， 再从程序的发送 buffer 里取出下一个数据写入 TDR。
  - 对于接收数据，在一开始就使能“RXNE”中断（接收寄存器非空） 。这样，UART 接收 到一个数据就会触发中断，在中断程序里读取 RDR 得到数据， 存入程序的接收 buffer。当 程序向读取串口数据时， 它直接读取接收 buffer 即可。
  - 这里涉及的“发送 buffer”、“接收 buffer”，特别适合使用“环形 buffer ”。
- DMA 方式：
  - 使用中断方式时， 在传输、接收数据时，会发生中断， 还需要 CPU 执行中断处理函数。 有另外一种方法：DMA（Direct Memory Access）， 它可以直接在 2 个设备之间传递数据，无需 CPU 参与。

框图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image10.png)  

设置好 DMA（源、目的、地址增减方向、每次读取数据的长度、读取次数）后，DMA 就 会自动地在 SRAM 和 UART 之间传递数据：

- 发送时： DMA 从 SRAM 得到数据， 写入 UART 的 TDR 寄存器
- 接收时： DMA 从 UART 的 RDR 寄存器得到数据， 写到 SRAM 去
- 指定的数据传输完毕后，触发 DMA 中断；在数据传输过程中，没有中断， CPU 无需处理。

函数如下：

|       | 查询方式          | 中断方式                                    | DMA 方式                                                     |
| ----- | ----------------- | ------------------------------------------- | ------------------------------------------------------------ |
| 发送  | HAL_UART_Transmit | HAL_UART_Transmit_ITHAL_UART_TxCpltCallback | HAL_UART_Transmit_DMAHAL_UART_TxHalfCpltCallback HAL_UART_TxCpltCallback |
| 接 收 | HAL_UART_Receive  | HAL_UART_Receive_ITHAL_UART_RxCpltCallback  | HAL_UART_Receive_DMAHAL_UART_RxHalfCpltCallback HAL_UART_RxCpltCallback |
| 错误  |                   | HAL_UART_ErrorCallback                      | HAL_UART_ErrorCallback                                       |

### 3.3.3 查询方式

本 节 程 序 源 码 为 “ 3_ 程 序 源 码 \01_ 视 频 配 套 的 源 码 \3-4_UART 编程 ( 查 询 方 式)\uart_poll.7z”。
缺点： 发送数据时要死等发送完毕，接收数据时容易丢失。

### 3.3.4 中断方式

本 节 程 序 源 码 为 “ 3_ 程 序 源 码 \01_ 视 频 配 套 的 源 码 \3-5_UART 编程 ( 中 断 方 式)\uart_int.7z”。
缺点： 需要是事先调用接收函数， 才能通过中断接收数据， 易丢失。

### 3.3.5 DMA 方式

本 节 程 序 源 码 为 “ 3_ 程序源码 \01_ 视 频 配 套 的 源 码 \3-6_UART 编程 (DMA 方 式)\uart_dma.7z”。
本节讲的是传统 DMA 方式，不涉及“idle 中断”， 它会在后面讲解。 缺点： 需要是事先调用接收函数， 才能通过中断接收数据， 易丢失。

## 3.4 效率最高的 UART 编程方法

### 3.4.1 IDLE 中断

IDLE，空闲的定义是：总线上在一个字节的时间内没有再接收到数据。

UART 的 IDLE 中断何时发生？ RxD 引脚一开始就是空闲的啊， 难道 IDLE 中断一直产生？ 不是的。当我们使能 IDLE 中断后，它并不会立刻产生，而是： 至少收到 1 个数据后， 发现 在一个字节的时间里，都没有接收到新数据，才会产生 IDLE 中断。

我们使用 DMA 接收数据时，确实可以提高 CPU 的效率， 但是“无法预知要接收多少数 据”， 而我们想尽快处理接收到的数据。怎么办？ 比如我想读取 100 字节的数据， 但是接 收到 60 字节后对方就不再发送数据了， 怎么办？ 我们怎么判断数据传输中止了？ 可以使用 IDLE 中断。在这种情况下，DMA 传输结束的条件有 3：

- 接收完指定数量的数据了， 比如收到了 100 字节的数据了，HAL_UART_RxCpltCallback 被调用
-  总线空闲了： HAL_UARTEx_RxEventCallback 被调用
- 发生了错误： HAL_UART_ErrorCallback 被调用

使用 IDLE 状态来接收的函数有：

|          | 函数                         | 回调函数                                                     |
| -------- | ---------------------------- | ------------------------------------------------------------ |
| 查询方式 | HAL_UARTEx_ReceiveToIdle     | 根据返回参数 RxLen 判断是否接收 完毕， 还是因为空闲而返回    |
| 中断方式 | HAL_UARTEx_ReceiveToIdle_IT  | 完毕： HAL_UART_RxCpltCallback 因为空闲而中止：HAL_UARTEx_RxEventCallback |
| DMA 方式 | HAL_UARTEx_ReceiveToIdle_DMA | 传输一半：HAL_UART_RxHalfCpltCallback 完毕：HAL_UART_RxCpltCallback因为空闲而中止：HAL_UARTEx_RxEventCallback |
| 错误     |                              | HAL_UART_ErrorCallback                                       |

### 3.4.2 DMA 发送/DMA+IDLE 接收

要点有 3：

- 对于发送：使用“HAL_UART_Transmit_DMA”函数
- 对于接收：一开始就调用“HAL_UARTEx_ReceiveToIdle_DMA”启动接收
- 在回调函数“HAL_UART_RxCpltCallback”或“HAL_UARTEx_RxEventCallback”里读取、 存储数据后，再次调用“HAL_UARTEx_ReceiveToIdle_DMA”启动接收

## 3.5 在 RTOS 里使用 UART

### 3.5.1 程序框架

本程序的重点在于如何高效地接收数据：

- 使用 DMA+IDLE 中断的方式接收数据，它会把数据存入临时缓冲区；
- 在回调函数里：把临时缓冲器的数据写入队列，然后再次使能 DMA
- AP 读取队列： 如果队列里没有数据则阻塞。

框架如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image11.png) 

### 3.5.2 编写程序

本 节 程 序 源 码 为 “ 3_ 程 序 源 码 \01_ 视 频 配 套 的 源 码 \3-8_ 在 RTOS 里 使 用 UART\uart_rtos.7z”。

### 3.5.3 面向对象封装 UART

我们使用多个 UART：UART2、UART4，以初始化为例，有如下函数：

```c
void UART2_Rx_Start(void);
void UART4_Rx_Start(void) ;
```

对于使用者而言，非常不友好：当 UART 数量增多，他需要记住、使用多个函数名；当 更换某个 UART，他需要修改多处代码。 比如对于如下代码， 当需要更换为 UART4 时， 需要 修改第 1、3 行代码为 UART4 的函数：

```c
 uart2_init(115200, 'N', 8, 1);
 char *str = “www.100ask.net”;
 uart2_sendp(str, strlen(str), 100);
```

把 UART 的操作封装为结构体， 可以解决这个问题。 UART 的操作主要有 3 个函数： 初始 化、发送数据、接收数据。那么可以抽象出如下结构体：

```c
struct UART_Device {
    char *name;
    int (*Init)( struct UART_Device *pDev, int baud, char parity, int data_bit, int stop_bit);
    int (*Send)( struct UART_Device *pDev, uint8_t *datas, uint32_t len, int timeout); 
    int (*RecvByte)( struct UART_Device *pDev, uint8_t *data, int timeout);
};
```

本节为 UART2、UART4 分别构造一个“struct UART_Device”结构体，比如：

```c
strcut UART_Device g_uart2_dev = {“uart2”, uart2_init, uart2_send, uart2_recvbyte};
strcut UART_Device g_uart4_dev = {“uart4”, uart4_init, uart4_send, uart4_recvbyte};
```

使用时，示例代码如下：

```c
struct UART_Device *pDev = &g_uart2_dev;
pDev->Init(pDev, 115200, 'N', 8, 1);
char *str = “www.100ask.net”;
pDev->Send(pDev, str, strlen(str), 100);
```

如果要更换串口，只需要修改第 1 行代码， 让它指向 g_uart4_dev 即可：这就是面向 对象编程的优点。

本节代码为： 本节程序源码为“3_程序源码\01_视频配套的源码\3-9_面向对象封装 UART\uart_rtos_all_ok.7z ”

先使用 STM32CubeMX 配置 UART2、UART4，把它们的发送、接收都使用 DMA。如下图配 置：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter4/image12.png) 