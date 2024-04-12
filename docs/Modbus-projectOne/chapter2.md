---
sidebar_position: 2
---
# 第1章 搭建开发环境

## 1.1开发套件硬件接口资源介绍

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image1.png)

## 1.2资料下载

从百问网资料下载中心 （https://download.100ask.net） 下载本开发板的所有资料。进入下载中心后，在左侧标签栏找到“百问网全场景工业互联开发板”并点击，根据页面提示下载百度网盘的资料。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image2.png)

下载到网盘资料后，本套课程的文档、源码放在如下目录：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image3.png)

## 1.3安装Keil MDK

### 1.3.1**软件下载**

开发板配套资料里有Keil MDK软件包：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image4.png)

也可以（但是不建议）在Keil官网 （https://www.keil.com/download/product/） 直接下载“MDK-Arm”，如图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image5.png)

### 1.3.2**软件安装**

双击运行“MDK532.EXE”，进入安装界面，选择“Next >>”，如图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image6.png)

接着进入用户协议界面，勾选同意协议，点击“Next >>”，如图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image7.png)

然后设置安装路径，第一个“Core”是软件的安装路径，第二个“Pack”是芯片的硬件支持包的安装路径，读者保持默认路径或者设置为如下图图所示一样的即可，如果是自定义设置，建议为全英文路径，不建议为包含有中文的路径。选择好之后点击“Next >>”后：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image8.png)

随后需要设置个人信息，随便填写即可，如图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image9.png)

之后便进入安装进度界面，如下图所示，等待安装完成。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image10.png)

安装过程中，回弹出驱动安装界面，勾选“始终信任来自‘ARM Ltd’的软件”，然后点击“安装”，如下图所示。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image11.png)

如下图所示即安装完成， “Show Release Notes”为查看当前版版本说明，可以不勾 选，最后点击“Finish”。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image12.png)

之后会自动进入“Pack Installer”界面， 这里会检查安装的编译器、 CMSIS 等是否是 最新的，由于我们安装的是官网提供的最新的 MDK，所以这里一般情况下都是不需要更新 的。

至此 Keil 就安装完成了，但这不是 Keil 开发环境的全部。一个 Keil 的开发环境， 除了 Keil 软件，还需要安装对应的 Pack，比如这里目标机的 MCU 是 STM32H563RIV6，就需 要下载该系列的的 Pack，如果是 STM32F4 系列， 就需要下其它系列 Pack。

### 1.3.3 PACK 安装

Keil 只是一个开发工具，它里面有一些芯片的软件包；但是它肯定不会事先安装好所 有芯片的软件包。我们要开发某款芯片，就需要先安装这款芯片的软件包，这被称为 “Pack”。

可以双击运行开发板配套资料中的 Pack 安装包：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image13.png)

也可以在线安装，下面演示一下如何在线安装。

打开 Keil 之后，点击如下按钮启动“Pack Installer”：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image14.png)

使用“Pack Installer ”可以方便的对 Pack 安装和管理。在左上角搜索框输入 “STM32H563”，展开搜索结果，可以看到 STM3H563RIVx，点击右边的简介链接即可 跳转到 Pack 下载页面， 如下图所示。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image15.png)

如果跳转网页无法打开， 可直接打开 Pack  下载总入口（[www.keil.com/dd2/Pack/](http://www.keil.com/dd2/Pack/)）。

进入 Pack  下载总入口后， 搜索“STM32H563RIV”，找到“STM32H563RIVx”点击, 如 下图所示（实测部分网络环境打开该链接无 Pack 列表，请尝试换个网络环境测试，仍旧不 行则使用配套资料 Pack）。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image16.png)

点击会跳转到 pack 包界面， 点击右上角的”STM32H5xx_DFP“即可跳转到 pack 包 下载界面， 点击右上角”STM32H5xx_DFP“处即可下载 pack 包， 如下图所示。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image17.png)

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image18.png)

下载之前会弹出 Pack 用户协议， 点击“Accept”即可：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image19.png)

下载完成得到“Keil.STM32H5xx_DFP.1.2.0.pack”，直接双击该文件，随后弹出如 图所示界面，点击“Next”进行安装。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image20.png)

## 1.4 安装 STM32CubeMX

STM32CubeMX 是 ST 意法半导体推出的 STM32 系列芯片可视化的图形配置工具，用户可 以通过图形化向导为 Cortex-M 系列 MCU 生成含有初始化代码的工程模板。

使用 STM32CubeMX 创建 STM32 的工程， 步骤少、上手快。

在开发板配套资料里，有 STM32CubeMX 的安装软件：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image21.png) 

也可以从 ST 官网（https://www.st.com/zh/development-tools/stm32cubemx.html） 下载 STM32CubeMX。

解压安装包后， 即可安装，如下图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image22.png)

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image23.png)

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image24.png)

## 1.5 安装 STM32CubeProgrammer

STM32CubeProgrammer 是烧写工具，用户可以通过此工具使用 ST-Link、UART、USB 等 通信接口往 STM32 处理器烧录 Hex、Bin 文件。也可以使用 Keil 通过 ST-Link 烧写程序， 无需使用 STM32CubeProgrammer。

开发板配套的资料里有安装软件：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image25.png) 

也可以从 ST 官网（https://www.st.com/zh/development-tools/stm32cubeprog.html） 下载。

把软件包解压后即可安装，安装步骤如下面的组图所示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image26.png)

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image27.png)

在安装 STM32CubeProgrammer 过程中会弹出安装 ST-Link 驱动，根据提示点击下一页 或者完成即可：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image28.png)	 

最后等待安装完成即可：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image29.png)

## 1.6 安装 ST-Link 驱动

本开发板使用 ST-Link 进行下载调试程序， 还需要安装 ST-Link 驱动。

在开发板配套资料里有该驱动：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image30.png) 

解压“en.stsw-link009.zip”，双击运行“dpinst_amd64.exe”（如果电脑为 32 位 系统， 运行“dpinst_x86.exe”） ，出现如图所示安装界面，点击“下一步”。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image31.png)

在安装过程中， 出现如图所示的 Windows 安全警告，选择“安装”

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image32.png)

最后安装完成提示如图所示， 点击“完成”退出安装程序。

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image33.png)

## 1.7 安装 CH340 驱动

在开发板配套资料中，有如下安装包：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image34.png)

 

双击运行， 直接点击“安装”即可：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image35.png)

安装成功会有提示：

![](http://photos.100ask.net/modbus-docs/project_one/chapter2/image36.png)