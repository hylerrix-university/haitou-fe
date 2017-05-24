# 接口

> [API 源仓库 - ht_api](https://git.oschina.net/CreatShare/ht_api/tree/master)

## TASK-LIST

- [X] 获取所有省信息
- [X] 获取宣讲会信息
- [X] 获取宣讲会正文

## 接口名称：获取所有省信息

* 请求地址

https://javaapi.changxiaoyuan.com/ht/infor/getProvince.action

* 调用方式：

HTTP post/get

* 接口描述：

获取所有省信息

* 请求参数: 

无

* 请求返回结果(JSON):

```
{
  "zz": "河南",
  "cc": "吉林",
  "nn": "广西",
  "cd": "四川",
  "km": "云南",
  "jn": "山东",
  "ty": "山西",
  "bj": "北京",
  "dl": "辽宁",
  "xa": "陕西",
  "cq": "重庆",
  "lz": "甘肃",
  "cs": "湖南",
  "wh": "湖北",
  "hz": "浙江",
  "gz": "广东",
  "fz": "福建",
  "sh": "上海",
  "nc": "江西",
  "tj": "天津",
  "sj": "河北",
  "nj": "江苏",
  "he": "黑龙江",
  "hf": "安徽"
}
```

## 接口名称：获取宣讲会信息

* 请求地址

https://javaapi.changxiaoyuan.com/ht/infor/getTalkInfor.action

* 调用方式：

HTTP post/get

* 接口描述：

获取宣讲会信息

* 请求参数:

|字段名称|字段说明|类型|必填|备注|
|----|----|----|----|----|
|province|省份的键|string|Y|从上面那个接口获取各个省份的键值对，例如河南的键为：zz|
|pageNum|请求页码|int|Y|第一个请求参数必须为1|

> eg: https://javaapi.changxiaoyuan.com/ht/infor/getTalkInfor.action?province=xa&pageNum=1

* 请求返回结果(JSON)参数说明:
  1. nowPageNum：当前页码
  2. totalPageNum：总共有几页
  3. rows：宣讲会信息数组
  4. companyName：公司名
  5. place：宣讲会地点
  6. articleUrl：正文链接参数
  7. holdTime：举办时间

例：

```json
{
  "nowPageNum": 1,
  "totalPageNum": 2,
  "rows": [
    {
      "companyName": "关于邀请参加京津冀博士后人才与项目引荐会",
      "place": "天大天津市河东区九经路25号",
      "articleUrl": "/article/462987.html",
      "holdTime": "2017-05-12 09:00"
    },
    {
      "companyName": "众升财富北京基金销售有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/462381.html",
      "holdTime": "2017-05-12 10:00"
    },
    {
      "companyName": "天津市万盛达企业管理有限公司",
      "place": "天财校区M101",
      "articleUrl": "/article/463434.html",
      "holdTime": "2017-05-12 13:30"
    },
    {
      "companyName": "天津合盈资产管理有限公司",
      "place": "天财校区M101",
      "articleUrl": "/article/463036.html",
      "holdTime": "2017-05-12 15:30"
    },
    {
      "companyName": "南开大学实习双选会",
      "place": "南开八里台校区学生活动中心一楼",
      "articleUrl": "/article/454575.html",
      "holdTime": "2017-05-13 09:00"
    },
    {
      "companyName": "中国银联股份有限公司",
      "place": "南开津南校区大通学生中心E305",
      "articleUrl": "/article/464987.html",
      "holdTime": "2017-05-14 14:30"
    },
    {
      "companyName": "天津市我爱我家房地产经纪有限公司荣业大街第二分公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/465294.html",
      "holdTime": "2017-05-15 10:00"
    },
    {
      "companyName": "在线回声(天津)科技发展有限公司",
      "place": "天财公寓综合楼302",
      "articleUrl": "/article/465296.html",
      "holdTime": "2017-05-15 13:30"
    },
    {
      "companyName": "众望(天津)教育信息咨询有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/462702.html",
      "holdTime": "2017-05-16 10:00"
    },
    {
      "companyName": "天津多看科技有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/463344.html",
      "holdTime": "2017-05-16 13:30"
    },
    {
      "companyName": "天津红星聚优品科技有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/465941.html",
      "holdTime": "2017-05-16 15:30"
    },
    {
      "companyName": "天津中原物业顾问有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/463044.html",
      "holdTime": "2017-05-17 10:00"
    },
    {
      "companyName": "首汇焦点(北京)科技有限公司",
      "place": "天大北洋园32楼B122",
      "articleUrl": "/article/466168.html",
      "holdTime": "2017-05-17 13:00"
    },
    {
      "companyName": "中企动力科技股份有限公司天津第二分公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/465818.html",
      "holdTime": "2017-05-17 13:30"
    },
    {
      "companyName": "优衣库MIT",
      "place": "天大26楼A111",
      "articleUrl": "/article/464191.html",
      "holdTime": "2017-05-17 15:25"
    },
    {
      "companyName": "天津企元时代科技有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/464811.html",
      "holdTime": "2017-05-17 15:30"
    },
    {
      "companyName": "天津晟宇信息科技有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/456336.html",
      "holdTime": "2017-05-18 10:00"
    },
    {
      "companyName": "天津市紫鹏翔飞教育信息咨询有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/466134.html",
      "holdTime": "2017-05-18 13:30"
    },
    {
      "companyName": "国资系统企业、二宫中型双选会",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/459984.html",
      "holdTime": "2017-05-19 14:00"
    },
    {
      "companyName": "凯恩德(天津)科技有限公司",
      "place": "天财公寓综合楼308",
      "articleUrl": "/article/463949.html",
      "holdTime": "2017-05-22 13:30"
    }
  ]
}
```

## 接口名称：获取宣讲会正文

* 请求地址

https://javaapi.changxiaoyuan.com/ht/infor/getArticle.action

* 调用方式：

HTTP post/get

* 接口描述：

获取宣讲会正文

* 请求参数:

|字段名称|字段说明|类型|必填|备注|
|----|----|----|----|----|
|article|链接参数|string|Y|

就是上面那个接口获取的 articleUrl

> eg: https://javaapi.changxiaoyuan.com/ht/infor/getArticle.action?article=/article/467481.html

* 请求返回结果（html段）:

```html
<font size="4">用人单位：
    <font size="4" color="#FF0000">天津市万盛达企业管理有限公司</font>
    <br>
    <br>
</font>
<font size="4">招聘会地点：
    <font size="4" color="#FF0000">校区M101</font>
    <br>
    <br>
</font>
<font size="4">招聘会时间：
    <font size="4" color="#FF0000">2017-5-12&nbsp;&nbsp;13:30:00
        <br>
    </font>
    <br>
</font>
<font size="4">招聘职位：
    <font size="4" color="#FF0000">出纳兼库管： 月薪2-4K，五险，单休，上九下六 职责要求：负责数据报表统计，能简单独立操作出纳业务，有过库管经验者1年以上，能在领导带领下完成办公室其他日常行政事务。 行政前台： 月薪2-4K，五险，单休，上九下六 职责要求：主要负责前台接听电话，接待来访顾客，接收快递等日常前台工作 客服专员 月薪4-6k，五险，单休，上九下六 职责要求：运用专业知识给顾客提供业务需求，办理积分落户业务 维护老顾客，不断开拓新顾客，需外出 财务外勤： 月薪2-4k，五险，双休，上九下六 职责要求：办理社保缴纳，学历认证，劳动局，社保局等消息跟进 办理社保单据，退工等相关事宜 健康顾问： 月薪4-6k，五险，单休，上九下六 职责要求：针对天津市孕妇做线上微信公益课，及线下课堂，邀约参加辅助成交月子会所等产品，赴美产子等 房地产销售： 月薪8-10k，单休，上九下六 职责要求：负责公司楼盘的推介，接待客户促进成交； 掌握客户需求，发掘及跟进潜在客户，做好对客户的追踪、联系； 热情接待，细致讲解，耐心服务，为客户提供满意的服务 工作地点：南开区南开三马路华都大厦四楼办公室 
        <br>
    </font>
    <br>
</font>
<font size="4">面试时间地点：
    <font size="4" color="#FF0000"></font>
</font>
```
