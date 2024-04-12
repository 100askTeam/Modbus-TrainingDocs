---
sidebar_position: 5
---

# 4.3 软件工程师眼里的 USB 电气信号

参考资料：

- 《圈圈教你玩 USB》

- 简书 jianshu_kevin@126.com 的文章
  - https://www.jianshu.com/p/3afc1eb5bd32
  - https://www.jianshu.com/p/cf8e7df5ff09
  - [USB 协议(三)：](https://www.jianshu.com/p/2a6e22194cd3)https://www.jianshu.com/p/2a6e22194cd3

- 官网：https://www.usb.org/documents

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image5.png) 

- 《usb_20.pdf》的《chapter5 7 Electrical》

- USB 的 NRZI 信号格式： https://zhuanlan.zhihu.com/p/460018993

- USB2.0 包 Packet 的组成： https://www.usbzh.com/article/detail-459.html

### 4.3.1 USB 设备状态切换图

USB 2.0 协议支持 3 种速率： 低速(Low Speed，1.5Mbps)、全速(Full Speed, 12Mbps)、 高速(High Speed, 480Mbps)。

USB Hub、USB 设备， 也分为低速、全速、高速三种类型。 一个 USB 设备， 可能兼容低 速、全速， 可能兼容全速、高速， 但是不会同时兼容低速、高速。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image6.png) 

### 4.3.2 硬件线路

下图是兼容高速模式的 USB 收发器电路图：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image7.png) 

USB 连接涉及 Hub Port 和 USB 设备，硬件连接如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image8.png) 

### 4.3.3 电子信号

USB 连接线有 4 条： 5V、D+、D-、GND。数据线 D+、D-，只能表示 4 种状态。 USB 协议 中，很巧妙地使用这两条线路实现了空闲(Idle)、开始(SOP)、传输数据(Data)、结束(EOP) 等功能。

### 4.3.4 低速/全速信号电平

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image9.png) 

### 4.3.5 高速信号电平

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image10.png) 

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image11.png) 

### 4.3.6 设备连接与断开

#### 1. 连接

Hub 端口的 D+、D-都有 15K 的下拉电阻，平时为低电平。全速设备内部的 D+有 1.5K 的 上拉电阻， 低速设备内部的 D-有 1.5K 的上拉电阻，连接到 Hub 后会导致 Hub 的 D+或 D-电 平变化，Hub 根据变化的引脚分辨接进来的是全速设备还是低速设备。

高速设备一开始也是作为全速设备被识别的。

全速设备、高速设备连接时， D+引脚的电平由低变高：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image12.png) 

低速设备连接时，D-引脚的电平由低变高：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image13.png) 

#### 2. 断开

对于低速、全速设备，接到 Hub 时导致 D-或 D+引脚变为高电平， 断开设备后， D-或 D+ 引脚变为低电平：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image14.png) 

对于高速设备，它先作为全速设备被识别出来，然后再被识别为高速设备。工作于高 速模式时， D+的上拉电阻是断开的，所以对于工作于高速模式的 USB 设备， 无法通过 D+的 引脚电平变化监测到它已经断开。

工作于高速模式的设备， D+、D-两边有 45 欧姆的下拉电阻，用来消除反射信号：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image15.png) 

当断开高速设备后， Hub 发出信号，得到的反射信号无法衰减， Hub 监测到这些信号后 就知道高速设备已经断开，内部电路图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image16.png)

### 4.3.7 复位

从状态切换图上看，一个 USB 设备连接后，它将会被供电， 然后被复位。当软件出错 时，我们也可以发出复位信号重新驱动设备。

那么， USB Hub 端口或 USB 控制器端口如何发出复位信号？ 发出 SE0 信号，并维持至少 10ms。

USB 设备看到 Reset 信号后，需要准备接收"SetAddress()"请求； 如果它不能回应这个 请求， 就是"不能识别的设备"。 

### 4.3.8 设备速率识别

#### 1. 低速/全速

Hub 端口的 D+、D-都有 15K 的下拉电阻，平时为低电平。全速设备内部的 D+有 1.5K 的 上拉电阻， 低速设备内部的 D-有 1.5K 的上拉电阻，连接到 Hub 后会导致 Hub 的 D+或 D-电

平变化，Hub 根据变化的引脚分辨接进来的是全速设备还是低速设备。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image17.png) 

#### 2. 高速

高速设备必定兼容全速模式， 所以高速设备内部 D+也有 1.5K 的上拉电阻， 只不过这个 电阻是可以断开的： 工作于高速模式时要断开它。

高速设备首先作为全速设备被识别出来，然后 Hub 如何确定它是否支持高速模式？ Hub 端口如何监测一个新插入的 USB 设备能否工作于高速模式？ 流程如下：

- 对于低速设备，Hub 端口不会监测它能否工作于高速模式。低速设备不能兼容高速模式。 
- Hub 端口发出 SE0 信号，这就是复位信号
- USB 设备监测到 SE0 信号后，会发出"a high-speed detection handshake"信号表示自 己能支持高速模式， 这可以细分为一下 3 种情景：
  - 如果 USB 设备原来处于"suspend"状态，它检测到 SE0 信号后， 就发出"a high- speed detection handshake"信号。
  - 如果 USB 设备原来处于"non-suspend"状态，并且处于全速模式， 它检测到 SE0 信 号后， 就发出"a high-speed detection handshake"信号。这个情景，就是一个设备刚插 到 Hub 端口时的情况，它一开始工作于全速模式。
  - 如果 USB 设备原来处于"non-suspend"状态， 并且处于高速模式，它会切换回到全 速模式(重新连接 D+的上拉电阻)，然后发出"a high-speed detection handshake"信号。

"a high-speed detection handshake"信号，就是"高速设备监测握手信号"，既然是 握手信号， 自然是有来有回： 

- USB 设备维持 D+的上拉电阻，发出"Chirp K "信号， 表示自己能支持高速模式 
- 如果 Hub 没监测到"Chirp K "信号， 它就知道这个设备不支持高速模式
- 如果 Hub 监测到"Chirp K "信号后， 如果 Hub 能支持高速模式， 就发出一系列的"Chirp K"、"Chirp J"信号，这是用来通知 USB 设备： Hub 也能支持高速模式。发出一系列的 "Chirp K"、"Chirp J"信号后，Hub 继续维持 SE0 信号直到 10ms。
- USB 设备发出"Chirp K "信号后，就等待 Hub 回应一系列的"Chirp K"、"Chirp J"信号 
  - 收到一系列的"Chirp K"、"Chirp J"信号： USB 设备端口 D+的上拉电阻，使能高速模式
  - 没有收到一系列的"Chirp K"、"Chirp J"信号： USB 设备转入全速模式

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image18.png)  

### 4.3.9 数据信号

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image19.png) 

#### 1. 低速/全速的 SOP 和 EOP

SOP：Start Of Packet，Hub 驱动 D+、D-这两条线路从 Idle 状态变为 K 状态。 SOP 中 的 K 状态就是 SYNC 信号的第 1 位数据， SYNC 格式为 3 对 KJ 外加 2 个 K。

EOP：End Of Packet，由数据的发送方发出EOP，数据发送方驱动D+、D-这两条线路， 先设为 SE0 状态并维持 2 位时间， 再设置为 J 状态并维持 1 位时间， 最后 D+、D-变为高阻 状态， 这时由线路的上下拉电阻使得总线进入 Idle 状态。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image20.png) 

#### 2. 高速的 SOP

高速的 EOP 比较复杂，作为软件开发人员无需掌握。

高速模式中，Ide 状态为：D+、D-接地。SOP 格式为： 从 Idle 状态切换为 K 状态。 SOP 中的 K 状态就是 SYNC 信号的第 1 位数据。

高速模式中的 SYNC 格式为：KJKJKJKJ KJKJKJKJ KJKJKJKJ KJKJKJKK，即 15 对 KJ，外 加 2 个 K。 

#### 3. NRZI 与位填充

参考文章：[USB 的 NRZI 信号格式,](https://zhuanlan.zhihu.com/p/460018993) https://zhuanlan.zhihu.com/p/460018993

NRZI：Non Return Zero Inverted Code，反向不归零编码。 NRZI 的编码方位为：对于 数据 0，波形翻转；对于数据 1，波形不变。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image21.png) 

使用 NRZI，发送端可以很巧妙地把"时钟频率"告诉接收端： 只要传输连续的数据 0 即 可。在下图中， 低速/全速协议中"Sync Pattern"的原始数据是"00000001"，接收端从前面 的 7 个 0 波形就可以算出"时钟频率"。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image22.png) 

使用 NRZI 时， 如果传输的数据总是"1"，会导致波形维持不变。如果电平长时间维持 不变， 比如传输 100 位 1 时， 如果接收方稍有偏差，就可能认为接收到了 99 位 1、101 位 1。而 USB 中采用了 Bit-Stuffing 位填充处理，即在连续发送 6 个 1 后面会插入 1 个 0，强 制翻转发送信号，从而让接收方调整频率，同步接收。而接收方在接收时只要接收到连续 的 6 个 1 后，直接将后面的 0 删除即可恢复数据的原貌。

NRZI 数据格式如上图所示。