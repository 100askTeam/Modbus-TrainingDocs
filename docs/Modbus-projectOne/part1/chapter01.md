---
sidebar_position: 1
---

# 启动开发板

## 硬件连接

### 1.1 **连接ST-Link**

本课程使用ST-Link给开发板供电、烧录、调试。

百问网全场景工业互联开发板上有4个插座，它们分别是从左往右分别是 GND、SWDIO、SWCLK、3.3V，对应线序黑、蓝、绿、红。ST-Link上有10个插针，它们的功能在外壳上有标注。接线方法如下图所示：

![img](D:\自学文档\modbus_docs\chapter0\images\image1.png) 

连接好的实物图像如下（ST-Link的USB口要插到电脑上）：

![img](D:\自学文档\modbus_docs\chapter0\images\image2.png) 

### 1.2 **连接USB串口**

USB默认只为开发板提供供电，将来我们会将它作为串口进行通信。

![img](D:\自学文档\modbus_docs\chapter0\images\image3.png)

### 1.3 **连接SPI屏**

使用提供的24PIN排线分别连接开发板和SPI屏，开发板使用上接，屏幕使用下接。

连接实物图如下：

![img](D:\自学文档\modbus_docs\chapter0\images\image4.png)

## 2. 运行测试程序验证硬件

### 2.1 **硬件接线（RS485、CAN）**

使用提供的接线端子分别连接两对端子线，分别插入两路RS485，CAN。

接线如下表所示：

| RS485                | CAN                  |
| -------------------- | -------------------- |
| CH1-485A —— CH2-485A | CH1-CANL —— CH2-CANL |
| CH1-485B —— CH2-485B | CH2-CANH —— CH2-CANH |

连接实物图如下：

![img](D:\自学文档\modbus_docs\chapter0\images\image5.png)

### 2.2 **编译工程**

把开发板配套资料中如下程序复制到 目录名里没有空格等特殊字符、没有中文字符 的目录下并解压开。比如，可以在D盘根目录新建一个名为 100ask 的目录，并将其解压到其中：

![img](D:\自学文档\modbus_docs\chapter0\images\image6.png)

在工程的“MDK-ARM”目录下，双击如下文件，就会使用Keil打开工程：

![img](D:\自学文档\modbus_docs\chapter0\images\image7.png)

在Keil界面，点击一下红框中任意一个按钮即可编译程序：

![img](D:\自学文档\modbus_docs\chapter0\images\image8.png) 

左边的按钮名为“Build”，点击这个按钮后，这些文件将会被编译：

● 所有没有被编译过的C文件

● 所被修改了但是尚未再次编译的C文件

如果你曾经编译过工程，但是只是修改了某些文件，使用“Buld”按钮时，只会编译这些被修改的文件，这会加快编译速度。

右边的按钮名为“Rebuild”，点击这个按钮后，所有的文件都会被再次编译。

### 2.3 **配置调试器**

先点击如下图所示按钮：

![img](D:\自学文档\modbus_docs\chapter0\images\image9.png)

然后如下图依次点击“Debug”，选择“ST-Link Debugger”，点击“Setting”（可能会一是升级固件，见本节后面部分）：

![img](D:\自学文档\modbus_docs\chapter0\images\image10.png)

如一切正常，ST-Link会自动识别出芯片，如下图所示：

![img](D:\自学文档\modbus_docs\chapter0\images\image11.png)

然后如下图选择：

![img](D:\自学文档\modbus_docs\chapter0\images\image12.png) 

注意：如果你的ST-Link是第1次使用，它的固件可能已经很老了。设置调试器时可能会提示升级固件。如下图所示：点击“Yes”表示升级：

![img](D:\自学文档\modbus_docs\chapter0\images\image13.png)

然后会弹出升级界面，点击“Device Connect”，表示连接设备；再点击“Yes”开始升级。如下图所示：

![img](D:\自学文档\modbus_docs\chapter0\images\image14.png)

### 2.4 **烧录运行**

点击如下按钮，即可烧写、运行程序：

![img](D:\自学文档\modbus_docs\chapter0\images\image15.png)

如果一切正常，可以看到开发板SPI屏幕上呈现出，两路RS485、CAN，和WIFI、芯片ID,前面的方框都打上了对勾【√】,并且左上角Drag me方块处可以在屏幕上任意滑动。

实物现象如下图所示：

![img](D:\自学文档\modbus_docs\chapter0\images\image16.png) 

 