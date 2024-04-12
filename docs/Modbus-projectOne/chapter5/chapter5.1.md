---
sidebar_position: 5
---

# 4.1 USB 学习指南

阅读源码时，经常碰到如下术语：

- HCD（Host Controller Driver）
- DCD（Device Controller Driver）
- PCD（Low layer USB Peripheral Control Driver）
- CDC（Communication Device Class） 

## 4.1 USB 学习指南

USB 本身是一个很庞大、复杂的体系， 本课程的重点在于工业互联， USB 是其中的一个 小小知识点。本章课程的目的在于：能理解 USB 的一些概念，能使用 USB 传输数据。 4.2~4.5 节， 介绍 USB 概念；4.6~4.7 节，移植 USBX 实现 USB 串口功能。

参考资料：

- 《圈圈教你玩 USB》
- 官网：https://www.usb.org/documents

![](http://photos.100ask.net/modbus-docs/project_one/chapter5/image1.png) 

- 我们从官网下载后放在网盘如下目录：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image2.png) 

- ST 官方资料：

https://wiki.stmicroelectronics.cn/stm32mcu/wiki/Introduction_to_USBX过 USB 设备驱动，直接通过 USB 控制器驱动访问 USB 设备。