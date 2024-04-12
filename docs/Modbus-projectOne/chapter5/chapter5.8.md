---
sidebar_position: 5
---

# 4.8 虚拟串口源码分析与改造

本节程序源码为“3_程序源码\01_视频配套的源码\ 4-8_虚拟串口源码分析与改造 \uart_usb_freertos.7z”，在上一节代码 uart_usb.7z 的基础上修改得来。

###  4.8.1 描述符的设置

在“Middlewares\Third_Party\usbx\app\ux_device_descriptors.c”有设备描述符、 配置描述符、接口描述符、端点描述符的定义。

比如， 设备描述符在如下代码中设置：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image73.png) 

配置描述符在如下代码中设置：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image74.png) 

### 4.8.2 数据收发函数

涉及文件为：demo\Middlewares\Third_Party\usbx\app\ux_device_cdc_acm.c。 开发板通过 USB 串口发出数据时， 使用以下函数：

```c
/* 启动发送 */
UINT ux_device_class_cdc_acm_write_with_callback(UX_SLAVE_CLASS_CDC_ACM *cdc_acm, UCHAR *buffer, ULONG requested_length);

/* 发送完毕的回调函数 */
static UINT ux_device_class_cdc_acm_write_callback(struct UX_SLAVE_CLASS_CDC_ACM_STRUCT *cdc_acm, UINT status, ULONG length);
```

我们将会实现如下函数，它使用“ux_device_class_cdc_acm_write_with_callback ” 来启动发送，然后等待“ux_device_class_cdc_acm_write_callback”唤醒：

```c
int ux_device_cdc_acm_send(uint8_t *datas, uint32_t len, uint32_t timeout);
```

开发板接收到 USB 串口数据时，以下回调函数被调用：

```c
static UINT ux_device_class_cdc_acm_read_callback(struct UX_SLAVE_CLASS_CDC_ACM_STRUCT *cdc_acm, UINT status, UCHAR *data_pointer, ULONG length);
```

我们可以改造这个函数， 把接收到的数据写入队列。

###  4.8.3 使用 FreeRTOS 改造代码

对于发送， 实现以下函数：启动发送之后阻塞，等待回调函数唤醒或超时。

```c
static UINT ux_device_class_cdc_acm_read_callback(struct UX_SLAVE_CLASS_CDC_ACM_STRUCT *cdc_acm, UINT status, UCHAR *data_pointer, ULONG length);
```

对于接收， 实现以下函数：把接收到的数据写入队列。

```c
static UINT ux_device_class_cdc_acm_read_callback(struct UX_SLAVE_CLASS_CDC_ACM_STRUCT *cdc_acm, UINT status, UCHAR *data_pointer, ULONG length);
```

 然后提供这个函数：

```c
int ux_device_cdc_acm_getchar(uint8_t *pData, uint32_t timeout);
```

