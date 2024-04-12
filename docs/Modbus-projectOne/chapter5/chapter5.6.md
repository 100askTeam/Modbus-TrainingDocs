---
sidebar_position: 5
---

# 4.6 USBX 组件

### 4.6.1 Azure RTOS 介绍

Azure RTOS 平台是运行时解决方案的集合，包括 Azure RTOS ThreadX、Azure RTOS NetX 和 NetX Duo、Azure RTOS FileX、Azure RTOS GUIX 和 Azure RTOS USBX。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image58.png) 

Azure RTOS ThreadX 是专用于深度嵌入式应用程序的高级实时操作系统 (RTOS)。 Azure RTOS ThreadX 具有多种优势，其中包括高级调度设施、消息传递、中断管理和消息 服务。  Azure RTOS ThreadX 具有许多高级功能， 其中包括 picokernel 体系结构、抢占 式阈值调度、事件链和一系列丰富的系统服务。

USBX 是 Azure®RTOS USB 主机和 USB 设备嵌入式堆栈。它与 ThreadX 紧密耦合。在某些 类中， 它需要 FileX 和 NetX Duo 堆栈。它允许使用具有多种配置的 USB 设备、复合设备和 USB OTG 进行操作。它支持 USB 电源管理。

USBX 为 USB 主机和 USB 设备堆栈提供了大量的 USB 类。 一旦低级驱动程序能够响应 USBX 请求， 模块化架构就可以更容易地移植到不同的 USB 硬件 IP 上。

所有 STM32 USB IP（主机、设备、 OTG、高速和全速） 均由 USBX 通过通用 STM32 HAL 驱动程序 API 透明支持。 

### 4.6.2 USBX 层次

参考资料：

https://wiki.stmicroelectronics.cn/stm32mcu/wiki/Introduction_to_USBX

USBX 分为三层， 如下图所示：

- 控制器层：最底层，USB 设备控制器的驱动程序，通常是 HAL 库
- stack layer：实现 USB 设备的基本操作，比如描述符的操作、使用 endpoint 进行数据 传输
- Class layer：实现各类 USB 设备的操作，比如 HID 设备、音频设备、虚拟串口，给 APP 提供接口

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image59.png) 

在 STM32 的固件中， 可以看到 USBX 目录，比如：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image60.png) 

移植 Controller layer、stack layer、Class layer 并不复杂， 重点在于 2 点： 

- 怎么初始化硬件以确保 Controller layer 可以正常运行
- 怎么编写 APP：提供设备信息、传输数据 

### 4.6.3 USBX 的基本配置

USBX 依赖于 Azure®RTOS ThreadX，但是也可以单独使用 USBX，这需要配置。通常在 “ux_user.h”里进行配置，配置项如下：

- 使用单独模式或 RTOS 模式：

```c
/* Defined, this macro will enable the standalone mode of usbx.  */
#define UX_STANDALONE
```

当没有定义“UX_STANDALONE”时就是使用 RTOS 模式， 可以使用 ThreadX 提供的互斥 量函数实现阻塞式读写（“blocking”）， 比如对于 USB 虚拟串口， 可以使用如下函数：

```c
UINT _ux_device_class_cdc_acm_read(UX_SLAVE_CLASS_CDC_ACM *cdc_acm, UCHAR *buffer,
ULONG requested_length, ULONG *actual_length);

UINT _ux_device_class_cdc_acm_write(UX_SLAVE_CLASS_CDC_ACM *cdc_acm, UCHAR *buffer, ULONG requested_length, ULONG *actual_length);
```

这 2 个函数发起数据传输，在传输过程中线程阻塞，传输完成后线程被唤醒。

当定义“UX_STANDALONE”时就是使用单独模式， 不能再使用上面的阻塞函数，而要使 用非阻塞的函数（non-blocke）：

```c
UINT _ux_device_class_cdc_acm_read_run(UX_SLAVE_CLASS_CDC_ACM *cdc_acm,
UCHAR *buffer, ULONG requested_length, ULONG *actual_length);

UINT _ux_device_class_cdc_acm_write_run(UX_SLAVE_CLASS_CDC_ACM *cdc_acm,
UCHAR *buffer, ULONG requested_length, ULONG *actual_length);
```

它们只是发起传输，然后就即刻返回。需要提供回调函数，在回调函数里分辨数据是 否传输完成。

- 非阻塞模式：

```c
/* Defined, this macro disables CDC ACM non-blocking transmission support. */ //#define UX_DEVICE_CLASS_CDC_ACM_TRANSMISSION_DISABLE
```

定义 UX_DEVICE_CLASS_CDC_ACM_TRANSMISSION_DISABLE 是，就禁止了“非阻塞模式”， 这时只能使用基于 RTOS 的阻塞函数。

换句话说， 要使用单独模式的非阻塞函数， 就不能定义这个配置项。

- USB HOST/Device 模式

```c
/* Defined, this value will only enable the host side of usbx.  */
/* #define UX_HOST_SIDE_ONLY */

/* Defined, this value will only enable the device side of usbx.  */
#define UX_DEVICE_SIDE_ONLY
```

本课程定义“UX_DEVICE_SIDE_ONLY”， 仅作为 USB Device。