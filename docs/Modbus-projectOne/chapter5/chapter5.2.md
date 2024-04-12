---
sidebar_position: 5
---

# 4.2 USB 系统硬件框架和软件框架

### 4.2.1 实验现象

现象： 把 USB 设备比如 Android 手机接到 PC

- 右下角弹出"发现 android phone"

- 跳出一个对话框， 提示你安装驱动程序

  - 问 1：USB 设备插到电脑上去， 接触到的对方设备是什么？
    答 1：是 USB 控制器，是 USB 控制器内嵌的 root hub

  - 问 2. 既然还没有"驱动程序"，为何能知道是"android phone"？

    答 2. windows 里已经有了 USB 的总线驱动程序， 接入 USB 设备后， 是"总线驱动程序" 知道你是"android phone"、提示你安装的是"设备驱动程序"。USB 总线驱动程序负责：识 别 USB 设备, 给 USB 设备找到对应的驱动程序。

  - 问 3. 为什么一接入 USB 设备， PC 机就能发现它？

    答 3. PC 的 USB 口内部，D-和 D+接有 15K 的下拉电阻， 未接 USB 设备时为低电平。USB 设备的 USB 口内部， D-或 D+接有 1.5K 的上拉电阻；它一接入 PC，就会把 PC USB 口的 D-或 D+拉高，从硬件的角度通知 PC 有新设备接入。

  - 问 4. USB 设备种类非常多，为什么一接入电脑， 就能识别出来它的种类？

    答 4. PC 和 USB 设备都得遵守一些规范。比如： USB 设备接入电脑后， PC 机会发出"你 是什么"？USB 设备就必须回答"我是 xxx", 并且回答的格式是固定的。USB 总线驱动程序会 发出某些命令想获取设备信息(描述符)，USB 设备必须返回"描述符"给 PC。

  - 问 5. PC 机上接有非常多的 USB 设备， 怎么分辨它们？

    答 5. 每一个 USB 设备接入 PC 时， USB 总线驱动程序都会给它分配一个编号。 PC 机想 访问某个 USB 设备时，发出的命令都含有对应的编号(地址)。

  - 问 6. USB 设备刚接入 PC 时， 还没有编号； 那么 PC 怎么把"分配的编号"告诉它？

    答 6. 新接入的 USB 设备的默认编号是 0，在未分配新编号前， PC 使用 0 编号和它通 信。

### 4.2.2 硬件框架

在 USB 系统中， 有 2 个硬件概念：

- USB Host：它跟处理器相连，处理器通过 USB Host 跟各类 USB 设备通信。 USB Host 中 集成有一个 root hub

- USB Device：这分为两类设备
  - Hub：用来扩展 USB 接口
  - Function：就是普通的 USB 设备，比如 U 盘、声卡等

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image3.png) 

### 4.2.3 软件框架

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image4.png) 

APP 可以通过 USB 设备驱动程序访问 USB 设备，也可以绕过 USB 设备驱动，直接通过 USB 控制器驱动访问 USB 设备。