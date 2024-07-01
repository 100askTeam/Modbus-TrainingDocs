"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9964],{6185:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(5893),t=s(1151);const i={sidebar_position:9},o="\u7b2c8\u7ae0 \u7a0b\u5e8f\u5347\u7ea7",l={id:"Modbus-projectOne/chapter9",title:"\u7b2c8\u7ae0 \u7a0b\u5e8f\u5347\u7ea7",description:"\u672c\u7ae0\u8bfe\u7a0b\u629b\u5f00modbus\uff0c\u8ba9\u5927\u5bb6\u51cf\u5c11\u524d\u7f6e\u77e5\u8bc6\u5c3d\u5feb\u638c\u63e1\u5347\u5e8f\u5347\u7ea7\u3002\u5728\u7b2c9\u7ae0\uff0c\u518d\u7ed3\u5408modubs\u3001\u4e0a\u4f4d\u673a\u6539\u8fdb\u5347\u7ea7\u529f\u80fd\u3002",source:"@site/docs/Modbus-projectOne/chapter9.md",sourceDirName:"Modbus-projectOne",slug:"/Modbus-projectOne/chapter9",permalink:"/en/Modbus-projectOne/chapter9",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/Modbus-TrainingDocs/tree/main/docs/Modbus-projectOne/chapter9.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"modbustrainoneSidebar",previous:{title:"\u7b2c7\u7ae0 \u4f4e\u6210\u672c Modbus \u4f20\u611f\u5668\u7684\u5b9e\u73b0",permalink:"/en/Modbus-projectOne/chapter8"},next:{title:"\u7b2c9\u7ae0 \u7efc\u5408\u5b9e\u73b0",permalink:"/en/Modbus-projectOne/chapter10"}},d={},c=[{value:"8.1 \u7a0b\u5e8f\u5347\u7ea7\u7684\u6982\u5ff5",id:"81-\u7a0b\u5e8f\u5347\u7ea7\u7684\u6982\u5ff5",level:2},{value:"8.1.1 OTA\u548cIAP",id:"811-ota\u548ciap",level:3},{value:"8.1.2 \u963f\u91ccOTA\u670d\u52a1\u5668\u7b80\u5355\u4f53\u9a8c",id:"812-\u963f\u91ccota\u670d\u52a1\u5668\u7b80\u5355\u4f53\u9a8c",level:3},{value:"8.1.3 IAP\u4e0eBootloader",id:"813-iap\u4e0ebootloader",level:3},{value:"8.2 \u5b9e\u73b0\u5347\u7ea7\u529f\u80fd",id:"82-\u5b9e\u73b0\u5347\u7ea7\u529f\u80fd",level:2},{value:"8.2.1 \u5347\u7ea7\u65b9\u6848\u8bbe\u8ba1",id:"821-\u5347\u7ea7\u65b9\u6848\u8bbe\u8ba1",level:3},{value:"<strong>1. \u4e0a\u4f4d\u673a\u4e0e\u4e0b\u4f4d\u673a</strong>",id:"1-\u4e0a\u4f4d\u673a\u4e0e\u4e0b\u4f4d\u673a",level:4},{value:"<strong>2. Flash\u4f7f\u7528\u89c4\u5212</strong>",id:"2-flash\u4f7f\u7528\u89c4\u5212",level:4},{value:"<strong>3. \u4e0b\u4f4d\u673a\u542f\u52a8\u6d41\u7a0b</strong>",id:"3-\u4e0b\u4f4d\u673a\u542f\u52a8\u6d41\u7a0b",level:4},{value:"8.2.2 \u5fc5\u5907\u77e5\u8bc6",id:"822-\u5fc5\u5907\u77e5\u8bc6",level:3},{value:"<strong>1. Cortex M3/M4/M33\u542f\u52a8\u6d41\u7a0b</strong>",id:"1-cortex-m3m4m33\u542f\u52a8\u6d41\u7a0b",level:4},{value:"<strong>2. \u5f02\u5e38\u5411\u91cf\u8868</strong>",id:"2-\u5f02\u5e38\u5411\u91cf\u8868",level:4},{value:"<strong>3. CPU\u5185\u90e8\u5bc4\u5b58\u5668</strong>",id:"3-cpu\u5185\u90e8\u5bc4\u5b58\u5668",level:4},{value:"<strong>3. \u51e0\u6761\u6c47\u7f16</strong>",id:"3-\u51e0\u6761\u6c47\u7f16",level:4},{value:"8.2.3 \u7f16\u5199APP",id:"823-\u7f16\u5199app",level:3},{value:"8.2.4 \u7f16\u5199Bootloader\u5b9e\u73b0\u542f\u52a8\u529f\u80fd",id:"824-\u7f16\u5199bootloader\u5b9e\u73b0\u542f\u52a8\u529f\u80fd",level:3},{value:"8.2.5 \u5b9a\u4e49\u4e0b\u8f7d\u534f\u8bae",id:"825-\u5b9a\u4e49\u4e0b\u8f7d\u534f\u8bae",level:3},{value:"8.2.6 \u7f16\u5199Bootloader\u5b9e\u73b0\u4e0b\u8f7d\u529f\u80fd",id:"826-\u7f16\u5199bootloader\u5b9e\u73b0\u4e0b\u8f7d\u529f\u80fd",level:3},{value:"8.2.7 \u7f16\u5199Bootloader\u5b9e\u73b0\u70e7\u5f55\u529f\u80fd",id:"827-\u7f16\u5199bootloader\u5b9e\u73b0\u70e7\u5f55\u529f\u80fd",level:3},{value:"<strong>1. \u70e7\u5199Flash</strong>",id:"1-\u70e7\u5199flash",level:4},{value:"<strong>2. \u542f\u52a8</strong>",id:"2-\u542f\u52a8",level:4},{value:"<strong>3. \u4e0a\u673a\u5b9e\u9a8c</strong>",id:"3-\u4e0a\u673a\u5b9e\u9a8c",level:4}];function a(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u7b2c8\u7ae0-\u7a0b\u5e8f\u5347\u7ea7",children:"\u7b2c8\u7ae0 \u7a0b\u5e8f\u5347\u7ea7"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u7ae0\u8bfe\u7a0b\u629b\u5f00modbus\uff0c\u8ba9\u5927\u5bb6\u51cf\u5c11\u524d\u7f6e\u77e5\u8bc6\u5c3d\u5feb\u638c\u63e1\u5347\u5e8f\u5347\u7ea7\u3002\u5728\u7b2c9\u7ae0\uff0c\u518d\u7ed3\u5408modubs\u3001\u4e0a\u4f4d\u673a\u6539\u8fdb\u5347\u7ea7\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"81-\u7a0b\u5e8f\u5347\u7ea7\u7684\u6982\u5ff5",children:"8.1 \u7a0b\u5e8f\u5347\u7ea7\u7684\u6982\u5ff5"}),"\n",(0,r.jsx)(e.h3,{id:"811-ota\u548ciap",children:"8.1.1 OTA\u548cIAP"}),"\n",(0,r.jsx)(e.p,{children:"OTA\u662fOver-the-Air\u7684\u7b80\u5199\uff0c\u5373\u7a7a\u4e2d\u4e0b\u8f7d\u6280\u672f\uff0c\u901a\u8fc7\u79fb\u52a8\u901a\u4fe1\u7f51\u7edc\uff082G/3G/4G\u6216Wifi\uff09\u5bf9\u8bbe\u5907\u7ec8\u7aef\u4e0a\u56fa\u4ef6\u3001\u6570\u636e\u53ca\u5e94\u7528\u8fdb\u884c\u8fdc\u7a0b\u7ba1\u7406\u7684\u6280\u672f\u3002\u7b80\u5355\u6765\u8bf4OTA\u6280\u672f\u5b9e\u73b0\u5206\u4e09\u6b65\uff1a\u9996\u5148\u5c06\u66f4\u65b0\u8f6f\u4ef6\u4e0a\u4f20\u5230OTA\u4e2d\u5fc3\uff0c\u7136\u540eOTA\u4e2d\u5fc3\u65e0\u7ebf\u4f20\u8f93\u66f4\u65b0\u8f6f\u4ef6\u5230\u8bbe\u5907\u7aef\uff0c\u6700\u540e\u8bbe\u5907\u7aef\u81ea\u52a8\u66f4\u65b0\u8f6f\u4ef6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u56fe\u4e2d\uff0cOTA\u7ec8\u7aef\u548cOTA\u4e91\u7aef\u4ea4\u4e92\uff0c\u4e0b\u8f7d\u5230\u56fa\u4ef6\uff0c\u7136\u540e\u70e7\u5f55\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image1.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"IAP\u662f\u201cIn Application Programming\u201d\u7684\u7b80\u5199\uff0c\u5c31\u662f\u7528\u6237\u7a0b\u5e8f\u8fd0\u884c\u65f6\u5bf9Flash\u7684\u67d0\u4e9b\u533a\u57df\u8fdb\u884c\u70e7\u5199\uff0c\u53ef\u4ee5\u5199\u5165\u65b0\u7248\u672c\u7684\u8f6f\u4ef6\u3001\u7528\u6237\u6570\u636e\u7b49\u3002IAP\u4e3b\u8981\u5305\u62ecBootLoader\u548c\u5e94\u7528\u7a0b\u5e8f\u4e24\u90e8\u5206\uff1a\u5728\u5347\u7ea7\u65f6\u8fd0\u884c\u7684\u662fBootloader\uff0c\u5b83\u63a5\u6536\u65b0\u7248\u672c\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u70e7\u5199\u5728Flash\u4e0a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u5b9e\u73b0OTA\uff08\u5c31\u662f\u901a\u8fc7\u7f51\u7edc\u5347\u7ea7\u8f6f\u4ef6\uff09\uff0c\u9700\u8981\u4f7f\u7528IAP\u6280\u672f\u3002\u8981\u4f7f\u7528IAP\uff0c\u9700\u8981\u5f15\u5165Bootloader\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u7535\u540e\uff0c\u5148\u8fd0\u884c\u7684\u7a0b\u5e8f\u88ab\u79f0\u4e3aBootLoader\u3002\u5b83\u7684\u4f5c\u7528\u548c\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5224\u65ad\u662f\u5426\u9700\u8981\u5347\u7ea7\u56fa\u4ef6\uff0c\u5982\u679c\u65e0\u9700\u5347\u7ea7\uff0c\u5c31\u542f\u52a8Flash\u53e6\u4e00\u4e2a\u533a\u57df\u7684\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u9700\u8981\u5347\u7ea7\uff0c\u901a\u8fc7OTA\u6570\u636e\u5305\u4ea4\u4e92\u534f\u8bae\uff0c\u63a5\u6536\u65b0\u7248\u672c\u7684\u8f6f\u4ef6\u3001\u70e7\u5f55\u5230FLASH\u4e0a\uff0c\u7136\u540e\u8bbe\u7f6e\u5347\u7ea7\u6807\u5fd7\u4f4d\u5e76\u91cd\u542f"}),"\n",(0,r.jsx)(e.li,{children:"\u91cd\u542f\u540e\u8fd0\u884c\u7684\u4ecd\u7136\u662fBootloader\uff0c\u5b83\u6839\u636e\u6807\u5fd7\u4f4d\u542f\u52a8\u65b0\u7248\u672c\u7684\u8f6f\u4ef6\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"812-\u963f\u91ccota\u670d\u52a1\u5668\u7b80\u5355\u4f53\u9a8c",children:"8.1.2 \u963f\u91ccOTA\u670d\u52a1\u5668\u7b80\u5355\u4f53\u9a8c"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u963f\u91cc\u4e91\u7269\u8054\u7f51\u5e73\u53f0\uff0c\u53ef\u4ee5\u8d2d\u4e70OTA\u670d\u52a1\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image2.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image3.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u7684OTA\u5347\u7ea7\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image4.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u9879\u76ee2\u91cc\u624d\u8bb2\u89e3MQTT\u534f\u8bae\uff0c\u6240\u4ee5\u6211\u4eec\u6682\u65f6\u4e0d\u6df1\u7a76OTA\u6280\u672f\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"813-iap\u4e0ebootloader",children:"8.1.3 IAP\u4e0eBootloader"}),"\n",(0,r.jsx)(e.p,{children:"\u5728Linux\u7cfb\u7edf\u4e2d\uff0c\u8f6f\u4ef6\u7ec4\u6210\u53ef\u4ee5\u8ddfWindows\u8fdb\u884c\u7c7b\u6bd4\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image5.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"BootLoader\u7684\u4e3b\u8981\u4f5c\u7528\u662f\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u521d\u59cb\u5316\u786c\u4ef6\uff1a\u6bd4\u5982\u8bbe\u7f6e\u65f6\u949f\u3001\u521d\u59cb\u5316\u5185\u5b58"}),"\n",(0,r.jsx)(e.li,{children:"\u542f\u52a8\u5185\u6838\uff1a\u4eceFlash\u8bfb\u51fa\u5185\u6838\u3001\u5b58\u5165\u5185\u5b58\u3001\u7ed9\u5185\u6838\u8bbe\u7f6e\u53c2\u6570\u3001\u542f\u52a8\u5185\u6838"}),"\n",(0,r.jsx)(e.li,{children:"\u8c03\u8bd5\u4f5c\u7528\uff1a\u5728\u5f00\u53d1\u4ea7\u54c1\u65f6\u9700\u8981\u7ecf\u5e38\u8c03\u8bd5\u5185\u6838\uff0c\u4f7f\u7528BootLoader\u53ef\u4ee5\u65b9\u4fbf\u5730\u66f4\u65b0\u5185\u6838"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5355\u7247\u673a\u4e2d\uff0c\u8f6f\u4ef6\u6ca1\u90a3\u4e48\u590d\u6742\uff0c\u4e00\u822c\u53ea\u6709\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u4e0a\u7535\u5c31\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u5e76\u4e0d\u9700\u8981BootLoader\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f46\u662f\u6d89\u53ca\u8f6f\u4ef6\u5347\u7ea7\u65f6\uff0c\u5fc5\u987b\u5f15\u5165\u8981BootLoader\u3002\u5047\u8bbe\u6ca1\u6709BootLoader\uff0c\u7a0b\u5e8f\u65e0\u6cd5\u5347\u7ea7\u81ea\u5df1\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5355\u7247\u673a\u8d44\u6e90\u6bd4\u8f83\u7d27\u5f20\uff0cFlash\u5bb9\u91cf\u6bd4\u8f83\u5c0f\uff0c\u4e00\u822c\u65e0\u6cd5\u5b58\u50a8\u4e24\u4efd\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u5f53\u524d\u7684\u7a0b\u5e8f\u5728Flash\u4e0a\u8fd0\u884c\uff0c\u5b83\u65e0\u6cd5\u66f4\u65b0\u81ea\u5df1\uff1a\u901a\u8fc7\u7f51\u7edc\u7b49\u624b\u6bb5\u4e0b\u8f7d\u7a0b\u5e8f\u5230\u5185\u5b58\u540e\uff0c\u70e7\u5199\u5230Flash\u4e0d\u5c31\u7834\u574f\u672c\u8eab\u6b63\u5728\u8fd0\u884c\u7684\u7a0b\u5e8f\u4e86\u5417\uff1f"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\u5728\u5355\u7247\u673a\u4e2d\uff0c\u6d89\u53ca\u8f6f\u4ef6\u5347\u7ea7\u65f6\uff0c\u5fc5\u987b\u5f15\u5165BootLoader\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image6.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"Flash\u4e0a\u70e7\u5199\u6709BootLoader\u548cAPP(\u7528\u6237\u7a0b\u5e8f)\uff0c\u542f\u52a8\u8fc7\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0a\u7535\u65f6BootLoader\u5148\u8fd0\u884c"}),"\n",(0,r.jsx)(e.li,{children:"BootLoader\u5224\u65ad\u53d1\u73b0\uff1aFlash\u4e0a\u6709APP\u5e76\u4e14\u65e0\u9700\u5347\u7ea7\uff0cBootLoader\u5c31\u4f1a\u542f\u52a8APP"}),"\n",(0,r.jsx)(e.li,{children:"BootLoader\u5224\u65ad\u53d1\u73b0\uff1aFlash\u4e0a\u6ca1\u6709APP\u6216\u8005\u9700\u8981\u5347\u7ea7\uff0cBootLoader\u6267\u884c\u5347\u7ea7\u64cd\u4f5c"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"82-\u5b9e\u73b0\u5347\u7ea7\u529f\u80fd",children:"8.2 \u5b9e\u73b0\u5347\u7ea7\u529f\u80fd"}),"\n",(0,r.jsx)(e.h3,{id:"821-\u5347\u7ea7\u65b9\u6848\u8bbe\u8ba1",children:"8.2.1 \u5347\u7ea7\u65b9\u6848\u8bbe\u8ba1"}),"\n",(0,r.jsx)(e.h4,{id:"1-\u4e0a\u4f4d\u673a\u4e0e\u4e0b\u4f4d\u673a",children:(0,r.jsx)(e.strong,{children:"1. \u4e0a\u4f4d\u673a\u4e0e\u4e0b\u4f4d\u673a"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u4f4d\u673a\u4e0e\u4e0b\u4f4d\u673a\u4f7f\u7528USB\u4e32\u53e3\u76f8\u8fde\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image7.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u4f4d\u673a\u4f7f\u7528sscom\u4e32\u53e3\u8c03\u8bd5\u52a9\u624b\u53d1\u9001\u56fa\u4ef6\uff0c\u5982\u4e0b\u56fe\uff08\u6570\u636e\u5b9a\u4e49\u540e\u9762\u518d\u8bbe\u8ba1\uff09\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5148\u53d1\u9001\u6587\u4ef6\u4fe1\u606f"}),"\n",(0,r.jsx)(e.li,{children:"\u518d\u53d1\u9001\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image8.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u4f4d\u673a\uff1a\u7b49\u5f85\u6587\u4ef6\u4fe1\u606f\u3001\u8bfb\u53d6\u4e0a\u4f4d\u673a\u53d1\u6765\u7684\u6570\u636e\u3001\u70e7\u5199\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"2-flash\u4f7f\u7528\u89c4\u5212",children:(0,r.jsx)(e.strong,{children:"2. Flash\u4f7f\u7528\u89c4\u5212"})}),"\n",(0,r.jsx)(e.p,{children:"STM32H563RIV\u5185\u7f6e2MB Flash\uff0c\u5212\u5206\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Bootloader\u5360\u636e256KB\u7a7a\u95f4"}),"\n",(0,r.jsx)(e.li,{children:"APP\u5360\u636e1784KB\u7a7a\u95f4"}),"\n",(0,r.jsx)(e.li,{children:"\u914d\u7f6e\u4fe1\u606f\u5360\u636e\u6700\u540e\u4e00\u4e2a\u6247\u533a8KB\u7a7a\u95f4\uff1a\u7528\u6765\u4fdd\u5b58APP\u7248\u672c\u3001\u5927\u5c0f\u3001\u6821\u9a8c\u7801\u7b49\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image9.png",alt:"img"})}),"\n",(0,r.jsx)(e.h4,{id:"3-\u4e0b\u4f4d\u673a\u542f\u52a8\u6d41\u7a0b",children:(0,r.jsx)(e.strong,{children:"3. \u4e0b\u4f4d\u673a\u542f\u52a8\u6d41\u7a0b"})}),"\n",(0,r.jsx)(e.p,{children:"Bootloader\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image10.png",alt:"img"})}),"\n",(0,r.jsx)(e.h3,{id:"822-\u5fc5\u5907\u77e5\u8bc6",children:"8.2.2 \u5fc5\u5907\u77e5\u8bc6"}),"\n",(0,r.jsx)(e.h4,{id:"1-cortex-m3m4m33\u542f\u52a8\u6d41\u7a0b",children:(0,r.jsx)(e.strong,{children:"1. Cortex M3/M4/M33\u542f\u52a8\u6d41\u7a0b"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u7535\u540e\uff0cCPU\u9ed8\u8ba4\u4ece0\u5730\u5740\u5f00\u59cb\u542f\u52a8\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5730\u57400\u5c31\u662f\u9ed8\u8ba4\u7684\u5f02\u5e38\u5411\u91cf\u8868\u57fa\u5730\u5740\uff0c\u4f7f\u7528Flash\u542f\u52a8\u65f60\u5730\u5740\u88ab\u6620\u5c04\u5230Flash\u57fa\u5730\u57400x08000000\u3002"}),"\n",(0,r.jsx)(e.li,{children:"CPU\u8bfb\u53d6\u5f02\u5e38\u5411\u91cf\u8868\u7b2c1\u4e2aword\uff084\u5b57\u8282\uff09\uff0c\u5199\u5165SP\u5bc4\u5b58\u5668"}),"\n",(0,r.jsx)(e.li,{children:"CPU\u8bfb\u53d6\u5f02\u5e38\u5411\u91cf\u8868\u7b2c2\u4e2aword\uff084\u5b57\u8282\uff09\uff0c\u8df3\u8f6c\u6267\u884c\uff1a\u8fd9\u5c31\u662fCPU\u8fd0\u884c\u7684\u7b2c1\u4e2a\u6307\u4ee4"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image11.png",alt:"img"})}),"\n",(0,r.jsx)(e.h4,{id:"2-\u5f02\u5e38\u5411\u91cf\u8868",children:(0,r.jsx)(e.strong,{children:"2. \u5f02\u5e38\u5411\u91cf\u8868"})}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u53d1\u751f\u5404\u7c7b\u5f02\u5e38\u3001\u4e2d\u65ad\u65f6\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u786c\u4ef6\u4f1a\u4ece\u5f02\u5e38\u5411\u91cf\u8868\u4e2d\uff0c\u6839\u636e\u5f02\u5e38\u53f7\u3001\u4e2d\u65ad\u53f7\u627e\u5230\u4e00\u9879\uff0c\u8fd9\u9879\u91cc\u4fdd\u5b58\u7684\u662f\u201c\u5904\u7406\u51fd\u6570\u7684\u5730\u5740\u201d"}),"\n",(0,r.jsx)(e.li,{children:"\u786c\u4ef6\u8df3\u8f6c\u6267\u884c\u8fd9\u4e2a\u5904\u7406\u51fd\u6570\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5SysTick\u4e2d\u65ad\u4e3a\u4f8b\uff0cSysTick\u4e2d\u65ad\u53d1\u751f\u65f6\uff0c\u786c\u4ef6\u4f1a\u8c03\u7528\u5982\u4e0b\u51fd\u6570\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image12.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u80fd\u6b63\u786e\u4f7f\u7528\u4e2d\u65ad\u7684\u524d\u63d0\u662f\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u628a\u5f02\u5e38\u5411\u91cf\u8868\u7684\u57fa\u5730\u5740\u544a\u8bc9CPU\uff1a\u8fd9\u53ef\u4ee5\u8bbe\u7f6eSCB\u91cc\u7684VTOR\u5bc4\u5b58\u5668\uff08\u5bc4\u5b58\u5668\u5730\u5740\u4e3a0xE000ED08\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u5f02\u5e38\u5411\u91cf\u8868\u91cc\uff0c\u586b\u5145\u4e2d\u65ad\u5904\u7406\u51fd\u6570"}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"3-cpu\u5185\u90e8\u5bc4\u5b58\u5668",children:(0,r.jsx)(e.strong,{children:"3. CPU\u5185\u90e8\u5bc4\u5b58\u5668"})}),"\n",(0,r.jsx)(e.p,{children:"\u65e0\u8bba\u662fcortex-M3/M4/M33\uff0cCPU\u5185\u90e8\u90fd\u6709R0\u3001R1\u3001\u2026\u2026\u3001R15\u5bc4\u5b58\u5668\uff1b\u5b83\u4eec\u53ef\u4ee5\u7528\u6765\u201c\u6682\u5b58\u201d\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8eR13\u3001R14\u3001R15\uff0c\u8fd8\u53e6\u6709\u7528\u9014\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"R13\uff1a\u522b\u540dSP(Stack Pointer)\uff0c\u6808\u6307\u9488"}),"\n",(0,r.jsx)(e.li,{children:"R14\uff1a\u522b\u540dLR(Link Register)\uff0c\u7528\u6765\u4fdd\u5b58\u8fd4\u56de\u5730\u5740"}),"\n",(0,r.jsx)(e.li,{children:"R15\uff1a\u522b\u540dPC(Program Counter)\uff0c\u7a0b\u5e8f\u8ba1\u6570\u5668\uff0c\u8868\u793a\u5f53\u524d\u6307\u4ee4\u5730\u5740\uff0c\u5199\u5165\u65b0\u503c\u5373\u53ef\u8df3\u8f6c"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image13.png",alt:"img"})}),"\n",(0,r.jsx)(e.h4,{id:"3-\u51e0\u6761\u6c47\u7f16",children:(0,r.jsx)(e.strong,{children:"3. \u51e0\u6761\u6c47\u7f16"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bfb\u5185\u5b58\uff1aLoad"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'# \u793a\u4f8b\nLDR  R0, [R1, #4]  ; \u8bfb\u5730\u5740"R1+4", \u5f97\u5230\u76844\u5b57\u8282\u6570\u636e\u5b58\u5165R0\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5199\u5185\u5b58\uff1aStore"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'# \u793a\u4f8b\nSTR  R0, [R1, #4]  ; \u628aR0\u76844\u5b57\u8282\u6570\u636e\u5199\u5165\u5730\u5740"R1+4"\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u52a0\u51cf\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"ADD R0, R1, R2  ; R0=R1+R2\nADD R0, R0, #1  ; R0=R0+1\nSUB R0, R1, R2  ; R0=R1-R2\nSUB R0, R0, #1  ; R0=R0-1\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u8f83\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"CMP R0, R1  ; \u7ed3\u679c\u4fdd\u5b58\u5728PSR(\u7a0b\u5e8f\u72b6\u6001\u5bc4\u5b58\u5668) \n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8df3\u8f6c\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"B  main  ; Branch, \u76f4\u63a5\u8df3\u8f6c\nBL main  ; Branch and Link, \u5148\u628a\u8fd4\u56de\u5730\u5740\u4fdd\u5b58\u5728LR\u5bc4\u5b58\u5668\u91cc\u518d\u8df3\u8f6c\nBX R1   ; \u5148\u5728R1\u91cc\u4fdd\u5b58\u5730\u5740\u518d\u8df3\u8f6c\n"})}),"\n",(0,r.jsx)(e.h3,{id:"823-\u7f16\u5199app",children:"8.2.3 \u7f16\u5199APP"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u6e90\u7801\u4e3a\u201c3_\u7a0b\u5e8f\u6e90\u7801\\01_\u89c6\u9891\u914d\u5957\u7684\u6e90\u7801\\ 8-3_\u7f16\u5199APP\\h5_app\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u5199\u4e00\u4e2aAPP\uff08\u70b9\u706f\uff09\uff0c\u70e7\u5199\u5728Flash\u5f00\u5934\u65f6\u80fd\u770b\u5230\u706f\u95ea\u70c1\u3002\u7136\u540e\u4fee\u6539RO\u5730\u5740\u4e3a0x08040000\uff0c\u70e7\u5199\u540e\u706f\u4e0d\u95ea\u70c1\uff08\u9700\u8981\u5148\u64e6\u9664Flash\u5f00\u5934\u7684\u7a0b\u5e8f\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u53c2\u8003\u300a2.3 \u521b\u5efa\u7b2c1\u4e2a\u5de5\u7a0b\u300b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u70b9\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8bbe\u7f6eRO\u5730\u5740\u4e3a0x08040000\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image14.png",alt:"img"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0d\u8981\u4f7f\u7528\u9ed8\u8ba4\u7684\u5f02\u5e38\u5411\u91cf\u8868\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image15.png",alt:"img"})}),"\n",(0,r.jsx)(e.h3,{id:"824-\u7f16\u5199bootloader\u5b9e\u73b0\u542f\u52a8\u529f\u80fd",children:"8.2.4 \u7f16\u5199Bootloader\u5b9e\u73b0\u542f\u52a8\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u6e90\u7801\u4e3a\u201c3_\u7a0b\u5e8f\u6e90\u7801\\01_\u89c6\u9891\u914d\u5957\u7684\u6e90\u7801\\8-4_\u7f16\u5199Bootloader\u5b9e\u73b0\u542f\u52a8\u529f\u80fd\\h5_bootloader\u3001h5_app\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Bootloader\u8981\u542f\u52a8APP\uff0c\u9700\u8981\u6a21\u4eff\u786c\u4ef6\u4e0a\u7535\u540e\u505a\u7684\u4e8b\u60c5\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u8bfb\u53d6\u5f02\u5e38\u5411\u91cf\u8868\u7684\u7b2c1\u4e2aword\uff0c\u8bbe\u7f6e\u8fdbSP\u5bc4\u5b58\u5668"}),"\n",(0,r.jsx)(e.li,{children:"\u8bfb\u53d6\u5f02\u5e38\u5411\u91cf\u8868\u7684\u7b2c1\u4e2aword\uff0c\u8df3\u8f6c\u6267\u884c"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u4f7f\u7528\u65b0\u7684\u5f02\u5e38\u5411\u91cf\u8868\uff0cBootloader\u8fd8\u8981\u8bbe\u7f6eVTOR\u5bc4\u5b58\u5668\u4e3a\u65b0\u7684\u5f02\u5e38\u5411\u91cf\u8868\u3002\u53c2\u8003\u300aARM Cortex-M3\u4e0eCortex-M4\u6743\u5a01\u6307\u5357.pdf\u300b\uff0c\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image16.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u5e76\u4e14\uff0cAPP\u91cc\u4e0d\u5e94\u8be5\u518d\u8bbe\u7f6eVTOR\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image17.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u4eec\u4f7f\u7528STM32CubeMX\u521b\u5efa\u5de5\u7a0b\u65f6\u7ecf\u5e38\u770b\u5230\u5982\u4e0b\u8b66\u544a\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image18.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u60f3\u770b\u5230\u4e0a\u8ff0\u8b66\u544a\uff0c\u53ef\u4ee5\u4f7f\u80fdICACHE\uff0c\u5982\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image19.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f46\u662f\uff01\u6ce8\u610f\uff01\uff01Bootloader\u548cAPP\uff0c\u53ea\u80fd\u8ba9\u4e00\u4e2a\u7a0b\u5e8f\u4f7f\u80fdICACHE\u3002\u5982\u679c\u4e24\u4e2a\u7a0b\u5e8f\u90fd\u4f7f\u80fdICACHE\u7684\u8bdd\uff0cAPP\u518d\u6b21\u521d\u59cb\u5316ICACHE\u65f6\u4f1a\u5bfc\u81f4\u6b7b\u673a\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u673a\u5b9e\u9a8c\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8bd1\u3001\u70e7\u5199h5_app\uff1a\u706f\u4e0d\u95ea\u70c1"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u8bd1\u3001\u70e7\u5199h5_bootloader\uff1a\u706f\u95ea\u70c1\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"825-\u5b9a\u4e49\u4e0b\u8f7d\u534f\u8bae",children:"8.2.5 \u5b9a\u4e49\u4e0b\u8f7d\u534f\u8bae"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u6e90\u7801\u4e3a\u201c3_\u7a0b\u5e8f\u6e90\u7801\\01_\u89c6\u9891\u914d\u5957\u7684\u6e90\u7801\\8-5_\u5b9a\u4e49\u4e0b\u8f7d\u534f\u8bae\\create_firmware_info.7z\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0b\u8f7d\u534f\u8bae\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\uff0c\u6839\u636e\u4f7f\u7528\u6d41\u7a0b\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Bootloader\u53d1\u51fa\u83b7\u53d6\u56fa\u4ef6\u4fe1\u606f\u7684\u8bf7\u6c42\uff1a\u53d1\u51fa\u201c1\u201d\u5b57\u7b26\u7ed9\u4e0a\u4f4d\u673a"}),"\n",(0,r.jsx)(e.li,{children:"\u4e0a\u4f4d\u673a\u53d1\u9001\u56fa\u4ef6\u4fe1\u606f\uff1a\u5148\u53d1\u51fa5\u4e2a\u201c0x5a\u201d\u6570\u636e\u7ed9\u4e0b\u4f4d\u673a\uff0c\u7528\u4e8e\u540c\u6b65\uff0c\u518d\u53d1\u9001\u56fa\u4ef6\u4fe1\u606f\u3002\u56fa\u4ef6\u4fe1\u606f\u5982\u4e0b\u5b9a\u4e49\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"struct FirmwareInfo {\n      uint32_t version;\n      uint32_t file_len;\n      uint32_t load_addr;\n      uint32_t crc32;\n      uint8_t file_name[16];\n};\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\uff1a\u4e3a\u4e86\u65b9\u4fbf\u5728\u4e32\u53e3\u91cc\u64cd\u4f5c\uff0c\u4e0a\u4f4d\u673a\u53d1\u9001uint32_t\u7684\u6574\u6570\u65f6\uff0c\u5148\u53d1\u9001\u9ad8\u5b57\u8282\uff08\u5927\u5b57\u8282\u5e8f\uff09\u3002"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Bootloader\u53d1\u51fa\u83b7\u53d6\u56fa\u4ef6\u7684\u8bf7\u6c42\uff1a\u53d1\u51fa\u201c2\u201d\u5b57\u7b26\u7ed9\u4e0a\u4f4d\u673a"}),"\n",(0,r.jsx)(e.li,{children:"\u4e0a\u4f4d\u673a\u53d1\u9001bin\u6587\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"Bootloader\u5728\u70e7\u5199\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u53d1\u9001\u8fdb\u5ea6\uff1a\u201c$1%\u201d\u3001\u201c$2%\u201d\u3001\u201c$100%\u201d\u3002\u4ee5\u5b57\u7b26\u201c$\u201d\u5f00\u5934\u3001\u5b57\u7b26\u201c%\u201d\u7ed3\u675f\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728Keil\u91cc\u751f\u6210bin\u3001\u53cd\u6c47\u7f16\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"fromelf --bin --output app.bin  app.axf"}),"\n",(0,r.jsx)(e.p,{children:"fromelf --text -a -c --output=app.dis app.axf"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728keil\u91cc\u6dfb\u52a0\u7528\u6237\u547d\u4ee4\u751f\u6210bin\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5de5\u5177\u751f\u6210\u56fa\u4ef6\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image20.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u7684\u7528\u6cd5\u4e3a\uff08\u5c16\u62ec\u53f7\u8868\u793a\u7684\u53c2\u6570\u662f\u4e0d\u53ef\u7701\u7565\u7684\uff0c\u4e2d\u62ec\u53f7\u8868\u793a\u7684\u53c2\u6570\u53ef\u4ee5\u7701\u7565\uff0cversion\u662f\u6574\u6570\uff09\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"create_firmware_info.exe  <bin_file>  <version>   [load_addr]\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u4f1a\u5206\u6790bin\u6587\u4ef6\uff0c\u6253\u5370\u51fa\u957f\u5ea6\u3001\u52a0\u8f7d\u5730\u5740\u3001\u6821\u9a8c\u7801\u3001\u6587\u4ef6\u540d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u628a\u201ccreate_firmware_info.exe\u201d\u590d\u5236\u5230bin\u6587\u4ef6\u76ee\u5f55\u4e0b\uff0c\u7136\u540e\u5728\u547d\u4ee4\u884c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image21.png",alt:"img"})}),"\n",(0,r.jsx)(e.h3,{id:"826-\u7f16\u5199bootloader\u5b9e\u73b0\u4e0b\u8f7d\u529f\u80fd",children:"8.2.6 \u7f16\u5199Bootloader\u5b9e\u73b0\u4e0b\u8f7d\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u6e90\u7801\u4e3a\u201c3_\u7a0b\u5e8f\u6e90\u7801\\01_\u89c6\u9891\u914d\u5957\u7684\u6e90\u7801\\8-6_\u7f16\u5199Bootloader\u5b9e\u73b0\u4e0b\u8f7d\u529f\u80fd\\h5_bootloader_download\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5b83\u7531\u8fd92\u4e2a\u7a0b\u5e8f\u5408\u5e76\u3001\u4fee\u6539\u5f97\u5230\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image22.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u673a\u5b9e\u9a8c\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u6210h5_app.bin\u540e\uff0c\u5236\u4f5c\u56fa\u4ef6\u4fe1\u606f\uff0c\u5728\u4e32\u53e3\u5de5\u5177\u4e2d\u7c98\u8d34\u5f85\u7528\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image24.png",alt:"img"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u70e7\u5199h5_bootloader_download\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u63a5\u6536\u5230\u201c1\u201d\u5b57\u7b26\u65f6\uff0c\u70b9\u51fb\u201c\u53d1\u9001\u201d\uff1a\u53d1\u9001\u56fa\u4ef6\u4fe1\u606f"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u63a5\u6536\u5230\u201c2\u201d\u5b57\u7b26\u65f6\uff0c\u70b9\u51fb\u201c\u53d1\u9001\u6587\u4ef6\u201d\uff1a\u53d1\u9001bin\u6587\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u53ef\u4ee5\u770b\u5230\u201cDownload OK\u201d"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"827-\u7f16\u5199bootloader\u5b9e\u73b0\u70e7\u5f55\u529f\u80fd",children:"8.2.7 \u7f16\u5199Bootloader\u5b9e\u73b0\u70e7\u5f55\u529f\u80fd"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u6e90\u7801\u4e3a\u201c3_\u7a0b\u5e8f\u6e90\u7801\\01_\u89c6\u9891\u914d\u5957\u7684\u6e90\u7801\\8-7_\u7f16\u5199Bootloader\u5b9e\u73b0\u70e7\u5f55\u529f\u80fd\\h5_bootloader_ok\u3001h5_app\u201d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8282\u8981\u5b9e\u73b02\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u70e7\u5f55"}),"\n",(0,r.jsx)(e.li,{children:"\u542f\u52a8"}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"1-\u70e7\u5199flash",children:(0,r.jsx)(e.strong,{children:"1. \u70e7\u5199Flash"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u70e7\u5f55\uff0c\u8981\u5148\u64e6\u9664\uff08\u4f7f\u7528\u201cHAL_FLASHEx_Erase\u201d\u51fd\u6570\uff09\uff0c\u518d\u70e7\u5199\uff08\u4f7f\u7528\u201cHAL_FLASH_Program\u201d\u51fd\u6570\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u70e7\u5199\u56fa\u4ef6\u7684\u51fd\u6570\u5982\u4e0b\uff08\u5728\u201cCore\\Src\\bootloader.c\u201d\uff09\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'static int WriteFirmware(uint8_t *firmware_buf, uint32_t len, uint32_t flash_addr)\n{\n  FLASH_EraseInitTypeDef tEraseInit;\n  uint32_t SectorError;\n  uint32_t sectors = (len + (SECTOR_SIZE - 1)) / SECTOR_SIZE;\n  uint32_t flash_offset = flash_addr - 0x08000000;\n  uint32_t bank_sectors;\n  uint32_t erased_sectors = 0;\n  HAL_FLASH_Unlock();\n  /* erase bank1 */\n  if (flash_offset < 0x100000)\n  {\n\ttEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;\n    tEraseInit.Banks   = FLASH_BANK_1;\n\ttEraseInit.Sector   = flash_offset / SECTOR_SIZE;\n\tbank_sectors = (0x100000 - flash_offset) / SECTOR_SIZE;\n\tif (sectors <= bank_sectors)\n\t\terased_sectors = sectors;\n\telse\n\t\terased_sectors = bank_sectors;\n\ttEraseInit.NbSectors = erased_sectors; \n\tif (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))\n\t{\n\t\tg_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\\r\\n", strlen("HAL_FLASHEx_Erase Failed\\r\\n"), UPDATE_TIMEOUT);\n\t\tHAL_FLASH_Lock();\n\t\treturn -1;\n\t\t}\n\t\tflash_offset += erased_sectors*SECTOR_SIZE;\n   }\n   sectors -= erased_sectors;\n   flash_offset -= 0x100000;\n\n   /* erase bank2 */\n   if (sectors)\n   {\n\t\ttEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;\n\t\ttEraseInit.Banks   = FLASH_BANK_2;\n\t\ttEraseInit.Sector   = flash_offset / SECTOR_SIZE;\n\t\tbank_sectors = (0x100000 - flash_offset) / SECTOR_SIZE;\n\t\tif (sectors <= bank_sectors)\n\t\t\terased_sectors = sectors;\n\t\telse\n\t\t\terased_sectors = bank_sectors;\n\t\ttEraseInit.NbSectors = erased_sectors;\n\t\tif (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))\n\t\t{\n\t\t\tg_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\\r\\n", strlen("HAL_FLASHEx_Erase Failed\\r\\n"), UPDATE_TIMEOUT);\n\t\t\tHAL_FLASH_Lock();\n\t    \treturn -1;\n\t  \t}\n      }\n      /* program */\n      len = (len + 15) & ~15;\n      \n      for (int i = 0; i < len; i+=16)\n      {\n\t\t if (HAL_OK != HAL_FLASH_Program(FLASH_TYPEPROGRAM_QUADWORD, flash_addr, (uint32_t)firmware_buf))\n         {\n\t\t\tg_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASH_Program Failed\\r\\n", strlen("HAL_FLASH_Program Failed\\r\\n"), UPDATE_TIMEOUT);\n\t\t\tHAL_FLASH_Lock();\n\t\t\treturn -1;\n\t\t}\n\t\t\n\t\tflash_addr += 16;\n\t\tfirmware_buf += 16;\n     }\n        \n      HAL_FLASH_Lock();\n      return 0;\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u70e7\u5199\u914d\u7f6e\u4fe1\u606f\u7684\u51fd\u6570\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'static int WriteFirmwareInfo(PFirmwareInfo ptFirmwareInfo)\n{   \n    FLASH_EraseInitTypeDef tEraseInit;\n    uint32_t SectorError;\n    uint32_t flash_addr = CFG_OFFSET;\n    uint8_t *src_buf = ptFirmwareInfo;\n    \n    HAL_FLASH_Unlock();\n\n    /* erase bank2 */\n    tEraseInit.TypeErase = FLASH_TYPEERASE_SECTORS;\n    tEraseInit.Banks     = FLASH_BANK_2;\n    tEraseInit.Sector    = (flash_addr \u2013 0x08000000 \u2013 0x100000) / SECTOR_SIZE;\n    tEraseInit.NbSectors = 1;\n    \n    if (HAL_OK != HAL_FLASHEx_Erase(&tEraseInit, &SectorError))\n    {\n        g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASHEx_Erase Failed\\r\\n", strlen("HAL_FLASHEx_Erase Failed\\r\\n"), UPDATE_TIMEOUT);\n        HAL_FLASH_Lock();\n        return -1;\n    }\n\n    /* program */\n    for (int i = 0; i < sizeof(FirmwareInfo); i+=16)\n    {\n        if (HAL_OK != HAL_FLASH_Program(FLASH_TYPEPROGRAM_QUADWORD, flash_addr, (uint32_t)src_buf))\n        {\n            g_pUpdateUART->Send(g_pUpdateUART, (uint8_t *)"HAL_FLASH_Program Failed\\r\\n", strlen("HAL_FLASH_Program Failed\\r\\n"), UPDATE_TIMEOUT);\n            HAL_FLASH_Lock();\n            return -1;\n        }\n\n        flash_addr += 16;\n        src_buf += 16;\n    }\n\n    HAL_FLASH_Lock();\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"2-\u542f\u52a8",children:(0,r.jsx)(e.strong,{children:"2. \u542f\u52a8"})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u542f\u52a8APP\u4e4b\u524d\uff0c\u5e94\u8be5\u8ba9\u7cfb\u7edf\u201c\u5c3d\u91cf\u201d\u5904\u4e8e\u521d\u59cb\u72b6\u6001\u3002\u6bd4\u5982\uff1a\u5173\u95ed\u5404\u7c7b\u4e2d\u65ad\u3001\u8ba9\u5404\u7c7b\u8bbe\u5907\u5904\u4e8e\u521d\u59cb\u72b6\u6001\u3002\u6709\u4e00\u4e2a\u529e\u6cd5\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u8fd9\u70b9\uff1a\u8f6f\u4ef6\u590d\u4f4d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\uff0cBootloader\u542f\u52a8APP\u65f6\uff0c\u53ef\u4ee5\u8fd9\u6837\u6539\u8fdb\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u89e6\u53d1\u8f6f\u4ef6\u590d\u4f4d"}),"\n",(0,r.jsx)(e.li,{children:"\u4f1a\u518d\u6b21\u8fd0\u884cBootloader"}),"\n",(0,r.jsx)(e.li,{children:"Bootloader\u5728\u521d\u59cb\u5404\u7c7b\u786c\u4ef6\u4e4b\u524d\u5224\u65ad\u590d\u4f4d\u539f\u56e0\uff0c\u53d1\u73b0\u662f\u8f6f\u4ef6\u670d\u52a1\u65f6\uff0c\u542f\u52a8APP"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5173\u952e\u4ee3\u7801\u5982\u4e0b\uff08\u5728\u201cCore\\Src\\bootloader.c\u201d\uff09\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"int isSoftReset(void)\n{\n    return HAL_RCC_GetResetSource() & RCC_RESET_FLAG_SW;\n}\n\nuint32_t get_app_vector(void)\n{\n    PFirmwareInfo ptFlashInfo = (PFirmwareInfo)CFG_OFFSET;\n    return ptFlashInfo->load_addr;\n}\n\nstatic void SoftReset(void)\n{\n    __set_FAULTMASK(1);//\u5173\u95ed\u6240\u6709\u4e2d\u65ad\n    HAL_NVIC_SystemReset();\n}\n\nstatic void start_app_c(void)\n{\n    /* \u89e6\u53d1\u8f6f\u4ef6\u590d\u4f4d */\n    SoftReset();\n}\n\u5728main\u51fd\u6570\u524d\u9762\uff0c\u5224\u65ad\u662f\u5426\u8f6f\u4ef6\u590d\u4f4d\uff0c\u662f\u7684\u8bdd\u542f\u52a8APP\uff1a\nint main(void)\n{\n\n  /* USER CODE BEGIN 1 */\n    if (isSoftReset())\n    {\n        extern void start_app(uint32_t vector);\n        \n        start_app(get_app_vector());\n    }\n  /* USER CODE END 1 */\n"})}),"\n",(0,r.jsx)(e.h4,{id:"3-\u4e0a\u673a\u5b9e\u9a8c",children:(0,r.jsx)(e.strong,{children:"3. \u4e0a\u673a\u5b9e\u9a8c"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u673a\u5b9e\u9a8c\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u6210h5_app.bin\u540e\uff0c\u5236\u4f5c\u56fa\u4ef6\u4fe1\u606f\uff0c\u5728\u4e32\u53e3\u5de5\u5177\u4e2d\u7c98\u8d34\u5f85\u7528\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image24.png",alt:"img"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u70e7\u5199h5_bootloader_ok\u7a0b\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u63a5\u6536\u5230\u201c1\u201d\u5b57\u7b26\u65f6\uff0c\u70b9\u51fb\u201c\u53d1\u9001\u201d\uff1a\u53d1\u9001\u56fa\u4ef6\u4fe1\u606f"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u63a5\u6536\u5230\u201c2\u201d\u5b57\u7b26\u65f6\uff0c\u70b9\u51fb\u201c\u53d1\u9001\u6587\u4ef6\u201d\uff1a\u53d1\u9001bin\u6587\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u53ef\u4ee5\u770b\u5230\u201cDownload OK\u201d"}),"\n",(0,r.jsx)(e.li,{children:"\u89c2\u5bdf\u4e32\u53e3\u5de5\u5177\uff0c\u53ef\u4ee5\u770b\u5230\u201cstart app\u201d\uff0c\u5e76\u4e14\u770b\u5230LED\u95ea\u70c1"}),"\n",(0,r.jsx)(e.li,{children:"\u4fee\u6539h5_app\uff0c\u8ba9LED\u95ea\u70c1\u66f4\u5feb\uff0c\u91cd\u65b0\u7f16\u8bd1\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image25.png",alt:"img"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u91cd\u65b0\u5236\u4f5c\u56fa\u4ef6\u4fe1\u606f\uff0c\u5728\u4e32\u53e3\u91cc\u7c98\u8d34\u5f85\u7528\uff1a"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image26.png",alt:"img"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter9/image27.png",alt:"img"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u624b\u5de5\u590d\u4f4d\u5f00\u53d1\u677f\uff08\u4e00\u5b9a\u8981\u624b\u5de5\u590d\u4f4d\uff09\uff0c\u91cd\u590d\u6b65\u9aa4\u2462\u2463\uff0c\u53ef\u4ee5\u89c2\u5bdf\u5230\u70e7\u5f55\u6210\u529f\u540e\uff0c\u7a0b\u5e8f\u88ab\u542f\u52a8\uff08LED\u95ea\u70c1\u66f4\u5feb\uff09\u3002"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>o});var r=s(7294);const t={},i=r.createContext(t);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);