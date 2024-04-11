---
sidebar_position: 1
---
# 第0章 项目方案介绍

##  0.1 功能介绍

本课程来自一个真实项目：多个气体传感器的管理。由于气体传感器比较昂贵，本课程里使用普通传感器来做实验。真实项目的使用场景如下图所示：

- 上位机操作界面：可以监测多个传感器
![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image1.png)
- 中控：图片暂时无法放出来，它的功能是向下通过 RS485 连接多个传感器，向上通过USB 口连接 PC。中控平时就要时刻采样传感器的数据，当上位机需要数据时通过 USB 口高效率地传输数据。
- 传感器：有多个机位，每个机位都有传感器

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image2.png)

使用场景如下：

- 设置传感器 ID：拿到一个传感器后，要通过上位机设置它的 ID，然后把它放在某个机位
- 中控监测传感器的状态：在线/离线，上位机周期性地读取状态信息
- 中控读取传感器数据，上位机周期性地读取这些数据
- 上位机显示传感器状态、显示传感器数据
- 上位机可以读取中控、各个传感器的程序版本信息，升级固件

## 0.2 硬件方案

在工业控制场景中，上位机通过中控，去控制多个设备，硬件框图如下：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image3.png)

各部件的作用如下：

- 上位机：功能强大，方便操作，比如记录历史数据、图像化显示数据、升级硬件程序
- 中控：在上位机和传感器之间转发数据，当传感器很多时，不使用中控的话，上位机无法快速获得各个传感器的数据
- 传感器：采样数据、上报数据

## 0.3 软件方案

### 0.3.1 上位机方案

上位机：

- 界面使用 LVGL 编写，界面和底层数据通过 JSON 进行隔离，方便更换 GUI
- 数据传输基于 libmodbus，可以使用 Modbus RTU 协议，也可以使用 Modbus TCP 协议
- 自定义协议，以实现：设备 ID 写入、设备状态检测、数据读写、程序升级等功能

### 0.3.2 **中控方案**

中控程序复杂，基于 FreeRTOS 编写。

中控上的程序分为 2 个：Bootloader（用于升级应用程序）、应用程序。中控的

Flash 如下划分：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image4.png)

中控上电后，首先运行 Bootloader，它根据配置信息决定是否启动 APP1 或 APP2，

还是保存运行 Bootloader 本身：

- Bootloader：接收上位机下发的固件，升级 APP
- APP1 或 APP2：平时运行的程序，收集传感器数据，等待上位机读取

上位机和中控 Bootloader 的程序框架如下：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image5.png)

上位机和中控 APP 的程序框架如下：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image6.png)

### 0.3.3 **传感器方案**

传感器上的程序也分为 2 个：Bootloader（用于升级应用程序）、应用程序。传感器的 Flash 如下划分：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image7.png)

传感器上电后，首先运行Bootloader，它根据配置信息决定是否启动APP1或APP2，还是保存运行Bootloader本身：

- Bootloader：上位机给中控下发传感器的固件，中控再把它传给传感器的Bootloader，Bootloader升级APP
- APP1或APP2：平时运行的程序，读取传感器数据，返回给中控

中控APP和传感器Bootloader的程序框架如下：

![](http://photos.100ask.net/modbus-docs/project_one/chapter1/image8.png)

### 0.3.4 **技术难点**

难点在于如何保证多个传感器数据上报以及上位机下发不丢包，因为它不仅仅是单块板了，还可以集联多个，所以它的拓展性很强。后期还可以非常方便地给传感器进行批量升级；另外在工厂场景下，会涉及到数据监控，产线情况监控等场景。项目涉及上位机开发、FreeRTOS程序开发、裸机程序开发、单片机的控制。也能掌握传感器数据通讯、传感器协议定义、程序升级等知识点。还可以学习良好的程序开发模式：一套代码如何适应不同的主控芯片、不同的操作系统（FreeRTOS和裸机）。最后，怎么写出稳定可靠、容

易扩展的程序，这个将会贯穿整个学习过程——这是产品，不是练手Demo。