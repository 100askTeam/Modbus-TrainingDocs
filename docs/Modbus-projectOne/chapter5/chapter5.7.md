---
sidebar_position: 5
---

# 4.7 移植 USBX 实现虚拟串口

本节程序源码为“3_程序源码01_视频配套的源码 4-7_移植 USBX 实现虚拟串口 uart_usb.7z”，在上一节代码 uart_rtos.7z 的基础上修改得来。

移植 Controller layer、stack layer、Class layer 并不复杂， 重点在于 2 点：

- 怎么初始化硬件以确保 Controller layer 可以正常运行
- 怎么编写 APP：提供设备信息、传输数据

### 4.7.1 配置 USB

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image61.png)

### 4.7.2 添加 USBX 代码

#### 1. 复制代码

找到固件库，如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image62.png) 

把 usbx 整个目录复制到工程“MiddlewaresThird_Party”目录下， 如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image63.png) 

#### 2. 添加进工程

需要添加 USBX 的 3 层源码。

先仿照下图添加“Class layer”源码，添加含有“ux_device_class_cdc_acm ”前缀 的 C 文件：

 ![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image64.png) 

 再仿照下图添加“stack layer”源码，可以从文件名的前面看出它们的作用， 比如 “ ux_device_stack ”表示这是 stack 源码，“ ux_utility ”表示这 是 辅助 函数 ， “ux_system”表示是这是系统函数：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image65.png)  

最后仿照下图添加“Controller layer”， 添加“ux_dcd_stm32”前缀的 C 文件：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image66.png) 

### 4.7.3 添加 USBX APP 代码

参考工程：

- GIT 仓库：[https://github.com/STMicroelectronics/STM32CubeH5.git，](https://github.com/STMicroelectronics/STM32CubeH5.git) 

- 工程路径：

```c
STM32CubeH5\Projects\NUCLEO-H563ZI\Applications\USBX\Ux_Device_HID_CDC_ACM
```

在网盘资料中， 找到如下目录：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image67.png) 

把 app 文件夹复制到工程的“MiddlewaresThird_Partyusbx”目录下， 如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image68.png) 

各个文件的作用为：

- ux_user.h：配置 USBX

- ux_stm32_config.h：里面含有配置项， 表示 STM32 支持多少个 endpoint

- ux_device_descriptors.c/h：USB 虚拟串口的描述符信息

- ux_device_cdc_acm.c：USB 串口的 Activate/DeActivate 函数

- app_usbx_device.c：调用 stack layer 函数， 模拟 USB 串口

在工程里添加上述文件， 如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image69.png) 

 

### 4.7.4 修改 usb.c

使用 STM32CubeMX 配置 usb 后生成的 usb.c 里，只是初始化了 USB 控制器，并未启动 它，也没有跟 USBX 建立联系， 需要修改代码。

代码如下：

```c
23 /* USER CODE BEGIN 0 */
24 #include "ux_port.h"
25 #include "ux_device_descriptors.h"
26 #include "ux_dcd_stm32.h"
27 /* USER CODE END 0 */
/* 省略 */
33 void MX_USB_PCD_Init(void)
34 {
35
36   /* USER CODE BEGIN USB_Init 0 */
37   UINT MX_USBX_Device_Init(void);
38   MX_USBX_Device_Init();
39
40   /* USER CODE END USB_Init 0 */
41
42   /* USER CODE BEGIN USB_Init 1 */
43
44   /* USER CODE END USB_Init 1 */
45   hpcd_USB_DRD_FS.Instance = USB_DRD_FS;
46   hpcd_USB_DRD_FS.Init.dev_endpoints = 8;
47   hpcd_USB_DRD_FS.Init.speed = USBD_FS_SPEED;
48   hpcd_USB_DRD_FS.Init.phy_itface = PCD_PHY_EMBEDDED;
49   hpcd_USB_DRD_FS.Init.Sof_enable = DISABLE;
50   hpcd_USB_DRD_FS.Init.low_power_enable = DISABLE;
51   hpcd_USB_DRD_FS.Init.lpm_enable = DISABLE;
52   hpcd_USB_DRD_FS.Init.battery_charging_enable = DISABLE;
53   hpcd_USB_DRD_FS.Init.vbus_sensing_enable = DISABLE;
54   hpcd_USB_DRD_FS.Init.bulk_doublebuffer_enable = DISABLE;
55   hpcd_USB_DRD_FS.Init.iso_singlebuffer_enable = DISABLE;
56   if (HAL_PCD_Init(&hpcd_USB_DRD_FS) != HAL_OK)
57   {
58     Error_Handler();
59   }
60   /* USER CODE BEGIN USB_Init 2 */
61
62   HAL_PWREx_EnableVddUSB();
63   HAL_PWREx_EnableUSBVoltageDetector();
64
65   HAL_PCDEx_PMAConfig(&hpcd_USB_DRD_FS, 0x00, PCD_SNG_BUF, 0x14);
66   HAL_PCDEx_PMAConfig(&hpcd_USB_DRD_FS, 0x80, PCD_SNG_BUF, 0x54);
67   HAL_PCDEx_PMAConfig(&hpcd_USB_DRD_FS, USBD_CDCACM_EPINCMD_ADDR, PCD_SNG_BUF, 0x94); 68   HAL_PCDEx_PMAConfig(&hpcd_USB_DRD_FS, USBD_CDCACM_EPOUT_ADDR, PCD_SNG_BUF, 0xD4);
69   HAL_PCDEx_PMAConfig(&hpcd_USB_DRD_FS, USBD_CDCACM_EPIN_ADDR, PCD_SNG_BUF, 0x114); 70   ux_dcd_stm32_initialize((ULONG)USB_DRD_FS, (ULONG)&hpcd_USB_DRD_FS);
71
72   HAL_PCD_Start(&hpcd_USB_DRD_FS);
73
74   /* USER CODE END USB_Init 2 */
75 }
```

第 38 行：调用 USBX 的函数， 添加 USB 串口的支持。

第 62~63 行：使能 USB 控制器的电源。

第 65 69 行：设置 endpoint 的“Packet Buffer Memory”，这个概念可以参考：

[http://www.51hei.com/bbs/dpj-40953-1.html。](http://www.51hei.com/bbs/dpj-40953-1.html)

第  70 行 ： 把 STM32  USB  控 制 器 的 句 柄 ， 传 给 USBX 系 统 ，

“usbx_stm32_device_controllers”的代码会使用这个句柄来操作硬件。 第 72 行：启动 USB 控制器。

### 4.7.5 创建 USBX 任务

使 用 单 独 模 式 （STANDALONE ） 时 ， 需 要 创 建 一 个 任 务 ， 不 断 运 行 “_ux_system_tasks_run ”函数。以下代码是在 FreeRTOS 的默认任务里运行和这个函数：

```c
26 /* USER CODE BEGIN Includes */
27 #include "stdio.h"
28 #include "draw.h"
29 #include "ux_api.h"
30 /* USER CODE END Includes */
/* 省略 */
195 /* USER CODE END Header_StartDefaultTask */
196 void StartDefaultTask(void *argument)
197 {
198   /* USER CODE BEGIN defaultTask */

199	/* Infinite loop */
200	for(;;)
201	{
202     HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_RESET);
203     vTaskDelay(500);
204
205     HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_SET);

206	vTaskDelay(500);
207	ux_system_tasks_run();
208	}
209   /* USER CODE END defaultTask */
210 }
```

第 29 行，包含 USBX 的头文件。

第 207 行， 调用 USBX 的系统函数。

### 4.7.6 设置 MDK-ARM 工程

如下图配置：

- 添加宏开关： UX_INCLUDE_USER_DEFINE_FILE（图中标号 2）
- 添加头文件目录（图中标号 5）

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image70.png) 

### 4.7.7 添加使用串口的代码

在“CoreSrcapp_freertos.c”里添加 USB 串口的发送测试代码：

```c
26 /* USER CODE BEGIN Includes */
27 #include "stdio.h"
28 #include "draw.h"
29 #include "ux_api.h"
30 /* USER CODE END Includes */
/* 省略 */
69 static void SPILCDTaskFunction( void *pvParameters )
70 {
71      char buf[100];
72      int cnt = 0;
73
74      while (1)
75      {
76         sprintf(buf, "USB Serial Send Test : %d\r\n", cnt++);
77         //Draw_String(0, 0, buf, 0x0000ff00, 0);
78
79         int ux_device_cdc_acm_send(uint8_t *datas, uint32_t len, uint32_t timeout);
80         ux_device_cdc_acm_send((uint8_t *)buf, strlen(buf), 1000);
81         vTaskDelay(1000);
82      }
83 }
```

第 29 行：包含头文件。

第 79~80 行：使用 USB 串口发送数据。

在“MiddlewaresThird_Partyusbxappux_device_cdc_acm.c”中，有如下代码：

```c
111 static UINT ux_device_class_cdc_acm_read_callback(struct UX_SLAVE_CLASS_CDC_ACM_STRUCT *cdc_acm, UINT status, UCHAR *data_pointer, ULONG length)
112 {
113     int Draw_String(uint32_t x, uint32_t y, char *str, uint32_t front_color, uint32_t
back_color);
114     if (status == UX_SUCCESS)
115     {
116         data_pointer[length] = '\0';
117         Draw_String(0, 0, (char *)data_pointer, 0x0000ff00, 0);
118     }
119         return 0;
120 }
```

当 USB 串口收到数据后， ux_device_class_cdc_acm_read_callback 函数被调用。 第 117 行把接收到的数据在 LCD 上显示处来。

### 4.7.8 上机实验

烧写运行程序后，接上 USB 线，在电脑上可以识别出 USB 串口，查看设备管理器，可 以看到如下设备：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image71.png) 

使用串口工具打开这个串口， 可以连续不断接收到数据，如下所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter5/image72.png) 

在串口工具上发送数据时，在板子的 LCD 上会有显示。