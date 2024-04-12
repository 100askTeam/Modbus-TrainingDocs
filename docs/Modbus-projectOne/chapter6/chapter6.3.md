---
sidebar_position: 6
---

# 5.3 Modbus软件与使用

### 5.3.1 Modbus软件简介

为了更好的学习和理解Modbus，这里推出三个软件Modbus Poll（主站设备）、Modbus Slave（从站设备）和虚拟串口软件，借助三款设备我们可以在PC上做一些基础实验，更加直观地观察通信数据，加深我们的理解，我们将它称为Modbus学习必备三件套，这是一个很好的入门方法。

### 5.3.2 Modbus Poll（主站设备）

#### 1. Modbus Poll简介

Modbus Poll是Modbus主站设备仿真器，用于测试和调试Modbus从设备便于观察Modbus通信过程中的各种报文数据。该软件支持ModbusRTU、ASCII、TCP/IP。用来帮助开发人员测试Modbus从设备，或者其它Modbus协议的测试和仿真。它支持多文档接口，即，可以同时监视多个从设备/数据域。每个窗口简单地设定从设备ID，功能，地址，大小和轮询间隔。你可以从任意一个窗口读写寄存器和线圈。如果你想改变一个单独的寄存器，简单地双击这个值即可。或者你可以改变多个寄存器/线圈值。提供数据的多种格式方式，比如浮点、双精度、长整型（可以字节序列交换）。该软件支持Modbus RTU、ASCII、TCP/IP等协议模式。

Modbus Poll支持下列协议模式:

| Modbus RTU    | Modbus RTU Over TCP/IP   |
| ------------- | ------------------------ |
| Modbus ASCII  | Modbus ASCI Over TCP/IP  |
| Modbus TCP/IP | Modbus RTU Over UDP/IP   |
| Modbus UDP/IP | Modbus ASCII Over UDP/IP |

#### 2. Modbus Poll 使用

点击链接获取软件，按照提示安装即可;链接：

https://pan.baidu.com/s/1SpTRz6Z1XlkoCZjDozwqog 提取码：timc

下载完界面如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image13.png) 

状态栏：

- Tx = 0表示向主站发送数据帧次数，图中为0次；
- Err = 0表示通讯错误次数，图中为0次；
- ID = 1表示模拟的Modbus子设备的设备地址，图中地址为1；
- F = 03表示所使用的Modbus功能码，图中为03功能码；
- SR = 1000ms表示发送周期，1S一次。
- 红字部分，表示当前的错误状态，“No Connection”表示未连接状态。

建立连接：

点击Connection->Connect进入配置页面，选择我们想要的连接，选择我们虚拟出来的串口，选择模式，例如:我们选择串口的连接方式，选则RTU模式，对应我们的Modbus RTU协议；接下来在设置波特率、比特位、校验位、停止位，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image14.png) 

设置参数：点击Setup->Read/Write Definition进入配置页面，配置从机地址、功能码、地址类型、寄存器地址、访问数量、轮询时间，具体配置如下图：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image15.png) 

### 5.3.3 Modbus Slave（从站设备）

#### 1. Modbus Slave简介

Modbus从设备仿真器，可以仿真32个从设备/地址域。每个接口都提供了对EXCEL报表的OLE自动化支持。主要用来模拟Modbus从站设备,接收主站的命令包,回送数据包。帮助Modbus通讯设备开发人员进行Modbus通讯协议的模拟和测试，用于模拟、测试、调试Modbus通讯设备，便于观察Modbus通信过程中的各种报文数据；可以32个窗口中模拟多达32个Modbus子设备。与Modbus Poll的用户界面相同，支持功能01, 02, 03, 04, 05, 06, 15, 16, 22和23，监视串口数据。

Modbus Slave支持下列协议模式:

| Modbus RTU    | Modbus RTU Over TCP/IP   |
| ------------- | ------------------------ |
| Modbus ASCII  | Modbus ASCI Over TCP/IP  |
| Modbus TCP/IP | Modbus RTU Over UDP/IP   |
| Modbus UDP/IP | Modbus ASCII Over UDP/IP |

#### 2. Modbus Slave使用

获取软件链接同上，下载完后主页面如图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image16.png) 

建立连接：

点击Connection->Connect进入配置页面，选择我们想要的连接，选择我们虚拟出来的串口，选择模式，接下来在设置波特率、比特位、校验位、停止位，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image17.png) 

设置参数：点击Setup->Read/Write Definition进入配置页面，配置从机地址、功能码、地址类型、寄存器地址、访问数量，具体配置如下图：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image18.png) 

这里有两点需要我们注意一下：

- 一是：Function列表框选择功能中的0x~4x，表示的是存储区0区、1区、3区、4区
  - 输出线圈
  - 输入线圈
  - 保持寄存器
  - 输入寄存器

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image19.png) 

Modbus协议规定了4个存储区 分别是0、1、3、4区 其中0区和4区是可读可写，1区和3区是只读。

| 区号 | 名称       | 读写           | 地址范围    |
| ---- | ---------- | -------------- | ----------- |
| 0区  | 输出线圈   | 可读可写布尔量 | 00001-09999 |
| 1区  | 输入线圈   | 只读布尔量     | 10001-19999 |
| 3区  | 输入寄存器 | 只读寄存器     | 30001-39999 |
| 4区  | 保持寄存器 | 可读可写寄存器 | 40001-49999 |

- 二是：Address项，这里需要特别强调一下，Address表示Modbus寄存器地址，其取值范围与设备寄存器地址存在映射关系，如下表所示：

| Device address | Modbus address  | Description       | Function | R/W        |
| -------------- | --------------- | ----------------- | -------- | ---------- |
| 1…10000        | address - 1     | Coils(outputs)    | 01       | Read/Write |
| 10001…20000    | address - 10001 | Discrete Inputs   | 02       | Read       |
| 40001…50000    | address - 40001 | Holding Registers | 03       | Read/Write |
| 30001…40000    | address - 30001 | Input Registers   | 04       | Read       |

这里我们只简单介绍下地址和存储区，下面我们会详细展开。

### 5.3.4 虚拟串口软件

#### 1.软件简介

虚拟串口工具，可以创建2个互联的串口，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image20.png) 

比如Modbus Poll工具使用COM1发送数据给COM2，Modbus Slave从COM2读到数据。使用虚拟串口，就可以不使用开发板也可以体验Modbus Poll、Modbus Slave。

软件在网盘里：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image21.png) 

#### 2.虚拟串口的使用

安装后运行虚拟串口程序“Virtual Serial Port Tools”，安装下图创建2个串口：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image22.png) 

打开设备管理器，可以看到如下串口：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image23.png) 

### 5.3.5 Modbus Poll 与 Modbus Slave互联/通

下面我们进行Modbus Poll 与 Modbus Slave互联互通实验，通过形象直观的方式展示Modbus数据流，根据前面的设定我们已将知道了如何运用Modbus学习必备三件套，下面我们就通过三件套来进行实验，首先打开VSPD虚拟串口软件，设置虚拟串口，我这里就以上面设订COM1,COM2为例，接下来我们再来配置我们的Modbus Poll 与 Modbus Slave；

我们首先打开Modbus Slave端，设置连接，连接方式我们选择Serial Port串口连接，选择我们设置的串口COM1,模式选择RTU模式，如下图所示：

- Modbus Slave连接设定

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image24.png) 

在设置参数，从机地址我们设定1（你也可以自己随意设定），Function项我们选择03 Holding Register(4x)，地址类型我们选择DEC（十进制格式），Address首地址我们设置为0，访问寄存器数量设置为10，如下图所示：

- Modbus Slave参数设定

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image25.png) 

接下来我们再来设置Modbus Poll端，设置方法也是和Modbus Slave端一一对应的，连接设定，参数设定，如下图所示：

- Modbus Poll连接设定

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image26.png) 

注意这里串口要选择我们设定的COM20,其它串口参数必须一一对应。

- Modbus Poll参数设定

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image27.png) 

设置好后，我们主设备和从设备分别连接了我们设置的COM1，COM2，这样我们便可观察当前寄存器的读取情况。

我们双击Modbus Poll（主设备端）地址中的0值，便可打开值设置窗口如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image28.png) 

修改值为66，点击Send打开Modbus Slave（从设备端）便可发现也做出了改变，如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image29.png) 

我们还可以打开Modbus Poll，点击Display，选择Commuaction，查看发送的报文：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter6/image30.png) 

TX是我们主站发送的报文，RX是从站返回的报文，报文我们下面会展开说明，带领大家一起看报文；