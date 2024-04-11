---
sidebar_position: 2
---

# 开发板使用

## **创建第1个工程**

本节代码为“项目1-全场景工业互联设备管理系统解决方案(PC上位机+中控+多传感器)\3_程序源码\01_视频配套的源码\2-1_创建第1个工程\demo.7z”。

### 2.1 **创建工程**

启动STM32CubeMX后，点击如下图标开始选择MCU：

![](D:\自学文档\modbus_docs\chapter02\images\image1.png)

如下图输入型号“STM32H563RIV”，双击找到的芯片，开始创建工程：

![](D:\自学文档\modbus_docs\chapter02\images\image2.png)

在弹出的窗口，选择“without TurstZone activated”：

![](D:\自学文档\modbus_docs\chapter02\images\image3.png)

调高CPU频率：

![](D:\自学文档\modbus_docs\chapter02\images\image4.png)

配置工程，如下操作：

![](D:\自学文档\modbus_docs\chapter02\images\image5.png)

指定代码生成方法，如下：

![](D:\自学文档\modbus_docs\chapter02\images\image6.png)

在弹出的窗口，点击“Yes”（以后再使能ICACHE）：

![](D:\自学文档\modbus_docs\chapter02\images\image7.png) 

### 2.2 **选择调试器**

新建的工程要配置调试器，参考[《2.2.3 配置调试器》](#_配置调试器)。

然后就可以编译程序、烧写运行了。

### 2.3 **配置GPIO操作LED**

根据核心板原理图“项目1-全场景工业互联设备管理系统解决方案(PC上位机+中控+多传感器)\5_硬件资料\01_开发板原理图\DshanMCU-LiteH5_SCH_V1.pdf”，可以看到LED引脚图如下：

![](D:\自学文档\modbus_docs\chapter02\images\image8.png) 

可以双击打开工程里如下文件进行配置：

![](D:\自学文档\modbus_docs\chapter02\images\image9.png) 

然后如下配置PC12为输出引脚：

![](D:\自学文档\modbus_docs\chapter02\images\image10.png)

在main函数的循环里，增加如下代码：

```c
 /* Infinite loop */

 /* USER CODE BEGIN WHILE */

 while (1)

 {

    /* set PC13 output high */

    HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_SET);     

    HAL_Delay(500);

    /* set PC13 output low */

    HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_RESET);

    HAL_Delay(500);
     
  /* USER CODE END WHILE */
  /* USER CODE BEGIN 3 */

 }
```

最后编译、烧写、运行，可以看到开发板的LED闪烁。

 