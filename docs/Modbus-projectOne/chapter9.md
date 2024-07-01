---
sidebar_position: 9
---

# 第8章 程序升级

本章课程抛开modbus，让大家减少前置知识尽快掌握升序升级。在第9章，再结合modubs、上位机改进升级功能。

## 8.1 程序升级的概念

### 8.1.1 OTA和IAP

OTA是Over-the-Air的简写，即空中下载技术，通过移动通信网络（2G/3G/4G或Wifi）对设备终端上固件、数据及应用进行远程管理的技术。简单来说OTA技术实现分三步：首先将更新软件上传到OTA中心，然后OTA中心无线传输更新软件到设备端，最后设备端自动更新软件。

下图中，OTA终端和OTA云端交互，下载到固件，然后烧录：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image1.png) 

IAP是“In Application Programming”的简写，就是用户程序运行时对Flash的某些区域进行烧写，可以写入新版本的软件、用户数据等。IAP主要包括BootLoader和应用程序两部分：在升级时运行的是Bootloader，它接收新版本的应用程序，烧写在Flash上。

要实现OTA（就是通过网络升级软件），需要使用IAP技术。要使用IAP，需要引入Bootloader。

上电后，先运行的程序被称为BootLoader。它的作用和工作流程如下：

- 判断是否需要升级固件，如果无需升级，就启动Flash另一个区域的应用程序
- 如果需要升级，通过OTA数据包交互协议，接收新版本的软件、烧录到FLASH上，然后设置升级标志位并重启
- 重启后运行的仍然是Bootloader，它根据标志位启动新版本的软件。

### 8.1.2 阿里OTA服务器简单体验

在阿里云物联网平台，可以购买OTA服务：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image2.png) 

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image3.png) 

它的OTA升级流程如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image4.png) 

在项目2里才讲解MQTT协议，所以我们暂时不深究OTA技术。

### 8.1.3 IAP与Bootloader

在Linux系统中，软件组成可以跟Windows进行类比：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image5.png) 

BootLoader的主要作用是：

- 初始化硬件：比如设置时钟、初始化内存
- 启动内核：从Flash读出内核、存入内存、给内核设置参数、启动内核
- 调试作用：在开发产品时需要经常调试内核，使用BootLoader可以方便地更新内核

在单片机中，软件没那么复杂，一般只有一个程序，上电就运行这个程序，并不需要BootLoader。

但是涉及软件升级时，必须引入要BootLoader。假设没有BootLoader，程序无法升级自己：

- 单片机资源比较紧张，Flash容量比较小，一般无法存储两份程序
- 当前的程序在Flash上运行，它无法更新自己：通过网络等手段下载程序到内存后，烧写到Flash不就破坏本身正在运行的程序了吗？

所以在单片机中，涉及软件升级时，必须引入BootLoader：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image6.png) 

Flash上烧写有BootLoader和APP(用户程序)，启动过程如下：

- 上电时BootLoader先运行
- BootLoader判断发现：Flash上有APP并且无需升级，BootLoader就会启动APP
- BootLoader判断发现：Flash上没有APP或者需要升级，BootLoader执行升级操作

## 8.2 实现升级功能

### 8.2.1 升级方案设计

#### **1. 上位机与下位机**

上位机与下位机使用USB串口相连：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image7.png) 

上位机使用sscom串口调试助手发送固件，如下图（数据定义后面再设计）：

- 先发送文件信息
- 再发送文件

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image8.png) 

下位机：等待文件信息、读取上位机发来的数据、烧写。

#### **2. Flash使用规划**

STM32H563RIV内置2MB Flash，划分如下：

- Bootloader占据256KB空间
- APP占据1784KB空间
- 配置信息占据最后一个扇区8KB空间：用来保存APP版本、大小、校验码等信息。

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image9.png) 

#### **3. 下位机启动流程**

Bootloader流程图如下：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image10.png) 

### 8.2.2 必备知识

#### **1. Cortex M3/M4/M33启动流程**

上电后，CPU默认从0地址开始启动：

- 地址0就是默认的异常向量表基地址，使用Flash启动时0地址被映射到Flash基地址0x08000000。
- CPU读取异常向量表第1个word（4字节），写入SP寄存器
- CPU读取异常向量表第2个word（4字节），跳转执行：这就是CPU运行的第1个指令

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image11.png) 

#### **2. 异常向量表**

当发生各类异常、中断时：

- 硬件会从异常向量表中，根据异常号、中断号找到一项，这项里保存的是“处理函数的地址”
- 硬件跳转执行这个处理函数。

以SysTick中断为例，SysTick中断发生时，硬件会调用如下函数：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image12.png) 

能正确使用中断的前提是：

- 把异常向量表的基地址告诉CPU：这可以设置SCB里的VTOR寄存器（寄存器地址为0xE000ED08）
- 在异常向量表里，填充中断处理函数

#### **3. CPU内部寄存器**

无论是cortex-M3/M4/M33，CPU内部都有R0、R1、……、R15寄存器；它们可以用来“暂存”数据。

对于R13、R14、R15，还另有用途：

- R13：别名SP(Stack Pointer)，栈指针
- R14：别名LR(Link Register)，用来保存返回地址
- R15：别名PC(Program Counter)，程序计数器，表示当前指令地址，写入新值即可跳转

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image13.png) 

#### **3. 几条汇编**

读内存：Load

```c
# 示例
LDR  R0, [R1, #4]  ; 读地址"R1+4", 得到的4字节数据存入R0
```

写内存：Store

```c
# 示例
STR  R0, [R1, #4]  ; 把R0的4字节数据写入地址"R1+4"
```

加减：

```c
ADD R0, R1, R2  ; R0=R1+R2
ADD R0, R0, #1  ; R0=R0+1
SUB R0, R1, R2  ; R0=R1-R2
SUB R0, R0, #1  ; R0=R0-1
```

比较：

```c
CMP R0, R1  ; 结果保存在PSR(程序状态寄存器) 
```

跳转：

```c
B  main  ; Branch, 直接跳转
BL main  ; Branch and Link, 先把返回地址保存在LR寄存器里再跳转
BX R1   ; 先在R1里保存地址再跳转
```

### 8.2.3 编写APP

本节源码为“3_程序源码\01_视频配套的源码\ 8-3_编写APP\h5_app”。

编写一个APP（点灯），烧写在Flash开头时能看到灯闪烁。然后修改RO地址为0x08040000，烧写后灯不闪烁（需要先擦除Flash开头的程序）。

参考《2.3 创建第1个工程》。

要点：

- 设置RO地址为0x08040000：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image14.png) 

- 不要使用默认的异常向量表：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image15.png) 

### 8.2.4 编写Bootloader实现启动功能

本节源码为“3_程序源码\01_视频配套的源码\8-4_编写Bootloader实现启动功能\h5_bootloader、h5_app”。

Bootloader要启动APP，需要模仿硬件上电后做的事情：

- 读取异常向量表的第1个word，设置进SP寄存器
- 读取异常向量表的第1个word，跳转执行

为了使用新的异常向量表，Bootloader还要设置VTOR寄存器为新的异常向量表。参考《ARM Cortex-M3与Cortex-M4权威指南.pdf》，如下图：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image16.png) 

并且，APP里不应该再设置VTOR：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image17.png) 

我们使用STM32CubeMX创建工程时经常看到如下警告：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image18.png) 

如果不想看到上述警告，可以使能ICACHE，如下操作：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image19.png) 

但是！注意！！Bootloader和APP，只能让一个程序使能ICACHE。如果两个程序都使能ICACHE的话，APP再次初始化ICACHE时会导致死机。

上机实验：

- 编译、烧写h5_app：灯不闪烁
- 编译、烧写h5_bootloader：灯闪烁。

### 8.2.5 定义下载协议

本节源码为“3_程序源码\01_视频配套的源码\8-5_定义下载协议\create_firmware_info.7z”。

下载协议可以自己定义，根据使用流程定义如下：

- Bootloader发出获取固件信息的请求：发出“1”字符给上位机
- 上位机发送固件信息：先发出5个“0x5a”数据给下位机，用于同步，再发送固件信息。固件信息如下定义：

```c
struct FirmwareInfo {
      uint32_t version;
      uint32_t file_len;
      uint32_t load_addr;
      uint32_t crc32;
      uint8_t file_name[16];
};
```

**注意**：为了方便在串口里操作，上位机发送uint32_t的整数时，先发送高字节（大字节序）。

- Bootloader发出获取固件的请求：发出“2”字符给上位机
- 上位机发送bin文件
- Bootloader在烧写过程中，可以发送进度：“$1%”、“$2%”、“$100%”。以字符“$”开头、字符“%”结束。

在Keil里生成bin、反汇编文件：

> fromelf --bin --output app.bin  app.axf
>
> fromelf --text -a -c --output=app.dis app.axf

在keil里添加用户命令生成bin文件后，可以使用这个工具生成固件信息：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image20.png) 

它的用法为（尖括号表示的参数是不可省略的，中括号表示的参数可以省略，version是整数）：

```c
create_firmware_info.exe  <bin_file>  <version>   [load_addr]
```

它会分析bin文件，打印出长度、加载地址、校验码、文件名。

示例如下：

把“create_firmware_info.exe”复制到bin文件目录下，然后在命令行执行如下命令：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image21.png) 

### 8.2.6 编写Bootloader实现下载功能

本节源码为“3_程序源码\01_视频配套的源码\8-6_编写Bootloader实现下载功能\h5_bootloader_download”。

它由这2个程序合并、修改得到：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image22.png) 

上机实验：

- 生成h5_app.bin后，制作固件信息，在串口工具中粘贴待用：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image24.png) 

- 烧写h5_bootloader_download程序
- 观察串口工具，接收到“1”字符时，点击“发送”：发送固件信息
- 观察串口工具，接收到“2”字符时，点击“发送文件”：发送bin文件
- 观察串口工具，可以看到“Download OK”

### 8.2.7 编写Bootloader实现烧录功能

本节源码为“3_程序源码\01_视频配套的源码\8-7_编写Bootloader实现烧录功能\h5_bootloader_ok、h5_app”。

本节要实现2个功能：

- 烧录
- 启动

#### **1. 烧写Flash**

对于烧录，要先擦除（使用“HAL_FLASHEx_Erase”函数），再烧写（使用“HAL_FLASH_Program”函数）。

烧写固件的函数如下（在“Core\Src\bootloader.c”）：

```c
static int WriteFirmware(uint8_t *firmware_buf, uint32_t len, uint32_t flash_addr)
{
  FLASH_EraseInitTypeDef tEraseInit;
  uint32_t SectorError;
  uint32_t sectors = (len + (SECTOR_SIZE - 1)) / SECTOR_SIZE;
  uint32_t flash_offset = flash_addr - 0x08000000;
  uint32_t bank_sectors;
  uint32_t erased_sectors = 0;
  HAL_FLASH_Unlock();
  /* erase bank1 */
  if (flash_offset < 0x100000)
  {
	tEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;
    tEraseInit.Banks   = FLASH_BANK_1;
	tEraseInit.Sector   = flash_offset / SECTOR_SIZE;
	bank_sectors = (0x100000 - flash_offset) / SECTOR_SIZE;
	if (sectors <= bank_sectors)
		erased_sectors = sectors;
	else
		erased_sectors = bank_sectors;
	tEraseInit.NbSectors = erased_sectors; 
	if (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))
	{
		g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\r\n", strlen("HAL_FLASHEx_Erase Failed\r\n"), UPDATE_TIMEOUT);
		HAL_FLASH_Lock();
		return -1;
		}
		flash_offset += erased_sectors*SECTOR_SIZE;
   }
   sectors -= erased_sectors;
   flash_offset -= 0x100000;

   /* erase bank2 */
   if (sectors)
   {
		tEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;
		tEraseInit.Banks   = FLASH_BANK_2;
		tEraseInit.Sector   = flash_offset / SECTOR_SIZE;
		bank_sectors = (0x100000 - flash_offset) / SECTOR_SIZE;
		if (sectors <= bank_sectors)
			erased_sectors = sectors;
		else
			erased_sectors = bank_sectors;
		tEraseInit.NbSectors = erased_sectors;
		if (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))
		{
			g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\r\n", strlen("HAL_FLASHEx_Erase Failed\r\n"), UPDATE_TIMEOUT);
			HAL_FLASH_Lock();
	    	return -1;
	  	}
      }
      /* program */
      len = (len + 15) & ~15;
      
      for (int i = 0; i < len; i+=16)
      {
		 if (HAL_OK != HAL_FLASH_Program(FLASH_TYPEPROGRAM_QUADWORD, flash_addr, (uint32_t)firmware_buf))
         {
			g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASH_Program Failed\r\n", strlen("HAL_FLASH_Program Failed\r\n"), UPDATE_TIMEOUT);
			HAL_FLASH_Lock();
			return -1;
		}
		
		flash_addr += 16;
		firmware_buf += 16;
     }
        
      HAL_FLASH_Lock();
      return 0;
}
```

烧写配置信息的函数如下：

```c
static int WriteFirmwareInfo(PFirmwareInfo ptFirmwareInfo)
{   
    FLASH_EraseInitTypeDef tEraseInit;
    uint32_t SectorError;
    uint32_t flash_addr = CFG_OFFSET;
    uint8_t *src_buf = ptFirmwareInfo;
    
    HAL_FLASH_Unlock();

    /* erase bank2 */
    tEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;
    tEraseInit.Banks     = FLASH_BANK_2;
    tEraseInit.Sector    = (flash_addr – 0x08000000 – 0x100000) / SECTOR_SIZE;
    tEraseInit.NbSectors = 1;
    
    if (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))
    {
        g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\r\n", strlen("HAL_FLASHEx_Erase Failed\r\n"), UPDATE_TIMEOUT);
        HAL_FLASH_Lock();
        return -1;
    }

    /* program */
    for (int i = 0; i < sizeof(FirmwareInfo); i+=16)
    {
        if (HAL_OK != HAL_FLASH_Program(FLASH_TYPEPROGRAM_QUADWORD, flash_addr, (uint32_t)src_buf))
        {
            g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASH_Program Failed\r\n", strlen("HAL_FLASH_Program Failed\r\n"), UPDATE_TIMEOUT);
            HAL_FLASH_Lock();
            return -1;
        }

        flash_addr += 16;
        src_buf += 16;
    }

    HAL_FLASH_Lock();
    return 0;
}
```

#### **2. 启动**

在启动APP之前，应该让系统“尽量”处于初始状态。比如：关闭各类中断、让各类设备处于初始状态。有一个办法可以轻松实现这点：软件复位。

所以，Bootloader启动APP时，可以这样改进：

- 触发软件复位
- 会再次运行Bootloader
- Bootloader在初始各类硬件之前判断复位原因，发现是软件服务时，启动APP

关键代码如下（在“Core\Src\bootloader.c”）：

```c
int isSoftReset(void)
{
    return HAL_RCC_GetResetSource() & RCC_RESET_FLAG_SW;
}

uint32_t get_app_vector(void)
{
    PFirmwareInfo ptFlashInfo = (PFirmwareInfo)CFG_OFFSET;
    return ptFlashInfo->load_addr;
}

static void SoftReset(void)
{
    __set_FAULTMASK(1);//关闭所有中断
    HAL_NVIC_SystemReset();
}

static void start_app_c(void)
{
    /* 触发软件复位 */
    SoftReset();
}
在main函数前面，判断是否软件复位，是的话启动APP：
int main(void)
{

  /* USER CODE BEGIN 1 */
    if (isSoftReset())
    {
        extern void start_app(uint32_t vector);
        
        start_app(get_app_vector());
    }
  /* USER CODE END 1 */
```

#### **3. 上机实验**

上机实验：

- 生成h5_app.bin后，制作固件信息，在串口工具中粘贴待用：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image24.png) 

- 烧写h5_bootloader_ok程序
- 观察串口工具，接收到“1”字符时，点击“发送”：发送固件信息
- 观察串口工具，接收到“2”字符时，点击“发送文件”：发送bin文件
- 观察串口工具，可以看到“Download OK”
- 观察串口工具，可以看到“start app”，并且看到LED闪烁
- 修改h5_app，让LED闪烁更快，重新编译：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image25.png) 

- 重新制作固件信息，在串口里粘贴待用：

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image26.png) 

![img](http://photos.100ask.net/modbus-docs/project_one/chapter9/image27.png) 

- 手工复位开发板（一定要手工复位），重复步骤③④，可以观察到烧录成功后，程序被启动（LED闪烁更快）。