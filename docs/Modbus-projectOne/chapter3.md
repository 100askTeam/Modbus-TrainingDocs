---
sidebar_position: 3
---

# 第2章 开发板使用

## 2.1 硬件连接

### 2.1.1 连接 ST-Link

本课程使用 ST-Link 给开发板供电、烧录、调试。

百问网全场景工业互联开发板上有 4 个插座，它们分别是从左往右分别是 GND 、 SWDIO 、SWCLK 、3.3V，对应线序黑、蓝、绿、红。ST-Link 上有 10 个插针， 它们的功能 在外壳上有标注。接线方法如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image1.png) 

连接好的实物图像如下（ST-Link 的 USB 口要插到电脑上） ：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image2.png) 

### 2.1.2 连接 USB 串口

USB 默认只为开发板提供供电， 将来我们会将它作为串口进行通信。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image3.png) 

### 2.1.3 连接 SPI 屏

使用提供的 24PIN 排线分别连接开发板和 SPI 屏， 开发板使用上接， 屏幕使用下接。 连接实物图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image4.png) 

## 2.2 运行测试程序验证硬件

### 2.2.1 硬件接线（RS485、CAN）

使用提供的接线端子分别连接两对端子线， 分别插入两路 RS485 ，CAN。

接线如下表所示：

| RS485                | CAN                  |
| -------------------- | -------------------- |
| CH1-485A —— CH2-485A | CH1-CANL —— CH2-CANL |
| CH1-485B —— CH2-485B | CH2-CANH —— CH2-CANH |

连接实物图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image5.png) 

### 2.2.2 编译工程

把开发板配套资料中如下程序复制到 目录名里没有空格等特殊字符、没有中文字符 的 目录下并解压开。比如， 可以在 D 盘根目录新建一个名为 100ask  的目录，并将其解压到 其中：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image6.png) 

在工程的“MDK-ARM”目录下， 双击如下文件， 就会使用 Keil 打开工程：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image7.png) 

在 Keil 界面， 点击一下红框中任意一个按钮即可编译程序：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image8.png) 

左边的按钮名为“Build”， 点击这个按钮后，这些文件将会被编译：

- 所有没有被编译过的 C 文件
- 所被修改了但是尚未再次编译的 C 文件

如果你曾经编译过工程， 但是只是修改了某些文件，使用“Buld”按钮时，只会编译 这些被修改的文件， 这会加快编译速度。

右边的按钮名为“Rebuild”，点击这个按钮后， 所有的文件都会被再次编译。

### 2.2.3 配置调试器

先点击如下图所示按钮：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image9.png) 

然后如下图依次点击“Debug”， 选择“ST-Link  Debugger”， 点击“Setting”（可 能会一是升级固件， 见本节后面部分） ：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image10.png) 

如一切正常，ST-Link 会自动识别出芯片， 如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image11.png) 

然后如下图选择：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image12.png) 

注意： 如果你的 ST-Link  是第 1  次使用，它的固件可能已经很老了。设置调试器时可 能会提示升级固件。如下图所示： 点击“Yes”表示升级：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image13.png) 

然后会弹出升级界面， 点击“Device Connect”，表示连接设备；再点击“Yes”开 始升级。如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image14.png) 

### 2.2.4 烧录运行

点击如下按钮， 即可烧写、运行程序：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image15.png) 

如果一切正常， 可以看到开发板 SPI 屏幕上呈现出，两路 RS485、CAN，和 WIFI、芯  片 ID,前面的方框都打上了对勾【 √ 】,并且左上角 Drag me 方块处可以在屏幕上任意滑动。

实物现象如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image16.png)

## 2.3 创建第 1 个工程

本节代码为“项目 1-全场景工业互联设备管理系统解决方案(PC 上位机+中控+多传感 器)3_程序源码01_视频配套的源码2-1_创建第 1 个 工程demo.7z”。

### 2.3.1 创建工程

启动 STM32CubeMX 后， 点击如下图标开始选择 MCU：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image17.png) 

如下图输入型号“STM32H563RIV”，双击找到的芯片，开始创建工程：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image18.png) 

在弹出的窗口， 选择“without TurstZone activated”：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image19.png) 

调高 CPU 频率：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image20.png) 

配置工程， 如下操作：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image21.png) 

指定代码生成方法， 如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image22.png) 

在弹出的窗口， 点击“Yes”（以后再使能 ICACHE）：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image23.png) 

### 2.3.2 选择调试器

新建的工程要配置调试器，参考[《2.2.3 配置调试器》 。](#bookmark1)

然后就可以编译程序、烧写运行了。

### 2.3.3 配置 GPIO 操作 LED

根据核心板原理图“项目 1-全场景工业互联设备管理系统解决方案(PC 上位机+中控+ 多传感器)5_硬件资料01_开发板原理图DshanMCU-LiteH5_SCH_V1.pdf”， 可以看到 LED 引脚图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image24.png) 

可以双击打开工程里如下文件进行配置：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image25.png) 

然后如下配置 PC12 为输出引脚：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image26.png) 

- 在 main 函数的循环里，增加如下代码：

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

	最后编译、烧写、运行， 可以看到开发板的 LED 闪烁

## 2.4 使用 LCD 打印信息

本节代码为“项目 1-全场景工业互联设备管理系统解决方案(PC 上位机+中控+多传感 器)3_程序源码01_视频配套的源码2-2_使用 LCD 打印调试信息demo.7z”。

### 2.4.1 接口信息

在上 一 个程序的基础上配 置 SPI 。 在 底 板 原 理 图 “ 100ASK_MCU-Industrial- DevKit_SCH_V1.pdf”中可以看到 SPI LCD 的接口信息：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image27.png) 

所涉及引脚列表如下：

| 原理图引脚名 | 功能              | 引脚 | 描述                                     |
| ------------ | ----------------- | ---- | ---------------------------------------- |
| PWM          | 背光控制          | PB11 | 高电平打开背光，也可使用 PWM 波控制 亮度 |
| LCD_RESET    | 复位              | PB4  | 低电平复位                               |
| RS           | LCD 数据/命令选择 | PD12 | 高电平表示传输数 据，低电平表示传 输命令 |
| SPI_CS       | SPI LCD 片选      | PD11 |                                          |
| SPI_MOSI     | SPI MOSI          | PC1  |                                          |
| SPI_MISO     | SPI MISO          | PC2  |                                          |
| SPI_SCK      | SPI1 SCK          | PB10 |                                          |

### 2.4.2 配置 SPI

在 STM32CubeMX 中， 如下进行配置。

#### 1. SPI2 参数配置

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image28.png) 

#### 2.SPI2 GPIO 配置

SPI LCD 的 SPI 频率很高， 所涉及的 SPI 引脚速率都要配置为“very high”， 如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image29.png) 

#### 3. 其他引脚配置

如下图所示：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image30.png) 

#### 4. 修改堆的大小

要使用“Draw_ChineseFont”显示汉字，需要把堆调大（因为里面使用到 malloc 函数 分配比较大的内存） ，如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image31.png) 

### 2.4.3 添加驱动

我们已经事先编写好驱动程序，把“项目 1-全场景工业互联设备管理系统解决方案 (PC 上位机+中控+多传感器)3_程序源码01_视频配套 的源码2-2_使用 LCD 打印调试信息 Module_driver.7z ”解压得到“ Module_driver ”文件夹，这个文件夹放入工程 的 “Drivers”目录。

然后在 MDK-ARM 工程里添加 group、文件，如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image32.png) 

最后添加头文件目录，如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image33.png) 

### 2.4.4 添加代码

- 在 main.c 的 main 函数中，添加如下代码：

  ```c
  /* USER CODE BEGIN 2 */
  LCD_Init(1);   /* 初始化LCD为横屏 */
  Draw_Init();   /* 初始化绘制系统 */
  Draw_Clear(0); /* 清屏 */
  
  Draw_String(0, 0, "www.100ask.net\r\n10ask.taobao.com", 0x0000ff00, 0); /* 绘制字符串 */
  
  Draw_ChineseFont(0, 40, "悦己之作方能悦人", 0xff0000, 0); /* 绘制汉字 */
  
  extern const unsigned char gImage_100ask[36968];
  Draw_Picture(0, 100, gImage_100ask);  /* 绘制图片 */
  
  Draw_Circle(60, 250, 50, 0xffffff); /* 画圆 */
  
  Draw_Rectangle(180, 200, 280, 300, 0xffffff); /* 画矩形 */
  ```

编译、烧写、运行即可在 LCD 上看到信息。


### 2.4.5 函数使用说明

除了“LCD_Init”在“spi_lcd.h”里声明外，其他函数都在“draw.h”里声明。

#### 1. 初始化函数

有 2 个初始化函数：

- SPI LCD 的初始化函数“LCD_Init”，原型与用法如下：

```c
/**********************************************************************
* 函数名称：  LCD_Init
* 功能描述：  初始化LCD
* 输入参数：  rotation - 旋转角度, 取值如下
*    LCD_DISPLAY_ROTATION_0,
*    LCD_DISPLAY_ROTATION_90,
*    LCD_DISPLAY_ROTATION_180,
*    LCD_DISPLAY_ROTATION_270,
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/ void LCD_Init(lcd_display_rotation_t rotation);
```

- 绘制系统的初始化函数“Draw_Init”， 原型与用法如下：

```c
/**********************************************************************
* 函数名称：  Draw_Init
* 功能描述：  Draw初始化,得到LCD的分辨率
* 输入参数：  无
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/ void Draw_Init(void) ;
```

#### 2. 清屏函数

原型与用法如下：

```c
/**********************************************************************
* 函数名称：  Draw_Clear
* 功能描述：  把屏幕清屏为某种颜色
* 输入参数：  dwColor, 颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/ 
void Draw_Clear(uint32_t dwColor);
```

#### 3. ASCII 字符、字符串绘制函数

在 LCD 上打印 ASCII 字符、字符串的函数：

```c
/**********************************************************************
* 函数名称：  Draw_ASCII
* 功能描述：  绘制ASCII字符
* 输入参数：  x,y - 左上角坐标
*            c   - 字符
*            front_color - 前景颜色, 格式为0x00RRGGBB
*            back_color  - 背景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值：  字符宽度(单位:像素)
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
int Draw_ASCII(uint32_t x, uint32_t y, char c, uint32_t front_color, uint32_t back_color);

/**********************************************************************
* 函数名称：  Draw_String
* 功能描述：  绘制ASCII字符串
* 输入参数：  x,y - 左上角坐标
*            str - 字符串
*            front_color - 前景颜色, 格式为0x00RRGGBB
*            back_color  - 背景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值：  字符串宽度(单位:像素)
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
int Draw_String(uint32_t x, uint32_t y, char *str, uint32_t front_color, uint32_t back_color);
```

#### 4.数值绘制函数

在 LCD 上打印十进制数、十六进制数的函数：

```c
/**********************************************************************
* 函数名称：  Draw_Number
* 功能描述：  以十进制显示数字
* 输入参数：  (x,y) - 坐标
*            num   - 数值
*            front_color - 前景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值：  显示的字符的总宽度(单位:像素)
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
int Draw_Number(uint32_t x, uint32_t y, uint32_t num, uint32_t front_color);

/**********************************************************************
* 函数名称：  Draw_HexNumber
* 功能描述：  以16进制显示数字
* 输入参数：  (x,y) - 坐标
*            num   - 数值
*            front_color - 前景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值：  显示的字符的总宽度(单位:像素)
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
int Draw_HexNumber(uint32_t x, uint32_t y, uint32_t num, uint32_t front_color);
```

####  5. 几何图形绘制函数

可以画线、画矩形、圆形：

```c
/**********************************************************************
* 函数名称：  Draw_Line
* 功能描述：  画线
* 输入参数：  x1,y1 - 起点坐标
*            x2,y2 - 终点坐标
*            front_color - 前景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
void Draw_Line(uint32_t x1, uint32_t y1, uint32_t x2, uint32_t y2, uint32_t front_color);

/**********************************************************************
* 函数名称：  Draw_Rectangle
* 功能描述：  画矩形
* 输入参数：  (x1,y1),(x2,y2):矩形的对角坐标
*            front_color - 前景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
void Draw_Rectangle(uint32_t x1, uint32_t y1, uint32_t x2, uint32_t y2, uint32_t front_color);

/**********************************************************************
* 函数名称：  Draw_Circle
* 功能描述：  画圆
* 输入参数：  (x0,y0) - 中心点
*            r       - 半径(单位:像素)
*            front_color - 前景颜色, 格式为0x00RRGGBB
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
void Draw_Circle(uint32_t x0, uint32_t y0, uint32_t r, uint32_t front_color);
```



####  6. 汉字绘制函数

函数原型如下：

```c
/**********************************************************************
* 函数名称：  Draw_Picture
* 功能描述：  绘制图片
* 输入参数：  (x,y) - 坐标
*            pic   - 使用image2lcd生成的图片(水平扫描,包含图像头数据,16位真彩色,高位在前)
*                    先使用"image2lcd.EXE"生成图片的点阵,存入picture.c
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
void Draw_Picture(uint32_t x, uint32_t y, const uint8_t *pic);
```

使用这个函数的前提是： 先使用"取字模软件.EXE"生成点阵,存入 font_chinese.c 的 CnChar32x29 数组中。这个工具在“4_工具软件9_文字取模软件”目录里，操作示意图如 下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image34.png) 

复制出来的点阵数据，存入 font_chinese.c 的 CnChar32x29 数组中， 如下添加索引：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image35.png) 

以后， 就可以使用如下代码显示汉字了：

```c
Draw_ChineseFont(0, 40, "悦己悦人之作", 0xff0000, 0); /* 绘制汉字 */
```

Draw_ChineseFont”函数里第 3 个参数里只能有汉字， 不能有其他字符，并且这些汉 字必须在“font_chinese.c”的索引里。

注意： 使用“Draw_ChineseFont”函数时， 它所在的文件编码格式必须是“UTF-8”， “font_chinese.c”文件的编码格式也必须是“UTF-8”。

#### 7. 图片绘制函数

函数原型如下：

```c
/**********************************************************************
* 函数名称：  Draw_Picture
* 功能描述：  绘制图片
* 输入参数：  (x,y) - 坐标
*            pic   - 使用image2lcd生成的图片(水平扫描,包含图像头数据,16位真彩色,高位在前)
*                    先使用"image2lcd.EXE"生成图片的点阵,存入picture.c
* 输出参数：  无
* 返 回 值： 无
* 修改日期：       版本号     修改人       修改内容
* -----------------------------------------------
* 2024/02/01        V1.0     韦东山       创建
***********************************************************************/
void Draw_Picture(uint32_t x, uint32_t y, const uint8_t *pic);
```

使用这个函数的前提是： 先使用"Image2Lcd"生成图片的点阵,存入 picture.c 中。这 个工具在“4_工具软件\10_图片点阵生成工具”目录里，操作示意图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image36.png) 

打开生成的文件，把它的代码全部复制进 picture.c 里， 示例如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image37.png)  

以后， 就可以使用如下代码显示图片了：

```c
    extern const unsigned char gImage_100ask[36968];
    Draw_Picture(0, 100, gImage_100ask);
```

## 2.5 使用 FreeRTOS

本节代码为“项目 1-全场景工业互联设备管理系统解决方案(PC 上位机+中控+多传感 器)\3_程序源码\01_视频配套的源码\2-3_使用 FreeRTOS\demo.7z”。

### 2.5.1 添加 FreeRTOS

打开工程的 STM32CubeMX 配置，如下使能 FreeRTOS：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image38.png) 

### 2.5.2 配置 FreeRTOS

如下配置：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image39.png) 

使用 FreeRTOS 时， 它的时钟基准来之 SysTick 定时器； HAL 库的时钟基准建议更好为

其他定时器，如下修改（TIMER6、TIMER7 是功能最弱的基础定时器， 可以选择它们）：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter3/image40.png) 

### 2.5.3 添加用户代码

在“Core\Src\app_freertos.c”中，有一个默认任务，可以用来点灯， 代码如下：

```c
void StartDefaultTask(void *argument)
{
 /* USER CODE BEGIN defaultTask */
 /* Infinite loop */
 for(;;)
 {
     HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_RESET);
     vTaskDelay(500);	

     HAL_GPIO_WritePin(GPIOC, GPIO_PIN_12, GPIO_PIN_SET);
     vTaskDelay(500);
 }
 /* USER CODE END defaultTask */
}
```

然后再创建第2 个任务， 它在 LCD 上不断显示变化的字符。任务的入口函数如下：

```c
static void SPILCDTaskFunction( void *pvParameters )
{
    char buf[100];
    int cnt = 0;

    while (1)
    {
        sprintf(buf, "LCD Task Test : %d", cnt++);
        Draw_String(0, 0, buf, 0x0000ff00, 0);
        vTaskDelay(1000);
    }
}
```

在“MX_FREERTOS_Init”函数中， 创建第 2 个任务：

```c
    /* USER CODE BEGIN RTOS_THREADS */
    /* add threads, ... */
    xTaskCreate(
        SPILCDTaskFunction, // 函数指针, 任务函数
        "spi_lcd_task", // 任务的名字
        200, // 栈大小,单位为word,10表示40字节
        NULL, // 调用任务函数时传入的参数
        osPriorityNormal, // 优先级
        NULL); // 任务句柄, 以后使用它来操作这个任务
```

编译、烧写、运行， 可以看到开发板的 LED 不断闪烁， LCD 上不断显示变化的数值。、