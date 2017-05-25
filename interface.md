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
    - companyName: 公司名
    - place: 宣讲会地点
    - schoolName: 学校名
    - articleUrl: 正文链接参数
    - holdTime: 举办时间

例：

```json
{
    "nowPageNum": 1,
    "totalPageNum": 3,
    "rows": [
        {
            "companyName": "佛山市南艺之星艺术培训有限公司",
            "place": "新勇中心(东)201",
            "schoolName": "陕师",
            "articleUrl": "/article/468093.html",
            "holdTime": "2017-05-26 08:30"
        },
        {
            "companyName": "大西安人力资源服务产业园(碑林园区)重点企业组团",
            "place": "南体育馆(金花)",
            "schoolName": "理工大",
            "articleUrl": "/article/467995.html",
            "holdTime": "2017-05-26 09:00"
        },
        {
            "companyName": "秦川大厨农业发展有限公司",
            "place": "活动中心302室",
            "schoolName": "西外",
            "articleUrl": "/article/468280.html",
            "holdTime": "2017-05-26 09:00"
        },
        {
            "companyName": "西安博创文思信息技术有限公司",
            "place": "招聘大厅二(教学楼4C-609)",
            "schoolName": "陕科大",
            "articleUrl": "/article/468060.html",
            "holdTime": "2017-05-26 09:00"
        },
        {
            "companyName": "全国教师现场",
            "place": "青年之家",
            "schoolName": "交大",
            "articleUrl": "/article/467497.html",
            "holdTime": "2017-05-26 09:00"
        },
        {
            "companyName": "重庆工程学院",
            "place": "新勇中心(东)207",
            "schoolName": "陕师",
            "articleUrl": "/article/467798.html",
            "holdTime": "2017-05-26 09:00"
        },
        {
            "companyName": "中国工程物理研究院材料研究所实践",
            "place": "J-604",
            "schoolName": "西电",
            "articleUrl": "/article/468094.html",
            "holdTime": "2017-05-26 09:30"
        },
        {
            "companyName": "上海量投网络科技有限公司",
            "place": "友谊校区友谊校区阶五",
            "schoolName": "西工大",
            "articleUrl": "/article/468290.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "达丰(重庆)电脑有限公司",
            "place": "招聘大厅一(教学楼4C-607)",
            "schoolName": "陕科大",
            "articleUrl": "/article/467859.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "荣盛房地产发展股份有限公司",
            "place": "渭水校区会议中心第三会议室",
            "schoolName": "长大",
            "articleUrl": "/article/467079.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "内蒙古伊泰北牧田园资源开发有限公司",
            "place": "就业指导中心招聘厅(南绣山活动中心内)",
            "schoolName": "西农",
            "articleUrl": "/article/468061.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "广州康佰医疗器械有限公司",
            "place": "未央校区教2-111",
            "schoolName": "西工院",
            "articleUrl": "/article/464306.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "华北计算技术研究所硕士研究生",
            "place": "电信学院第一会议室",
            "schoolName": "交大",
            "articleUrl": "/article/468023.html",
            "holdTime": "2017-05-26 10:00"
        },
        {
            "companyName": "安徽山鹰纸业股份有限公司",
            "place": "教2-200",
            "schoolName": "理工大",
            "articleUrl": "/article/466990.html",
            "holdTime": "2017-05-26 10:30"
        },
        {
            "companyName": "中共广元市朝天区委组织部、广元市朝天区人力资源和社会保障局",
            "place": "就业指导中心报告厅(南绣山活动中心内)",
            "schoolName": "西农",
            "articleUrl": "/article/468288.html",
            "holdTime": "2017-05-26 10:30"
        },
        {
            "companyName": "山鹰纸业",
            "place": "长安校区就业信息发布厅",
            "schoolName": "西工大",
            "articleUrl": "/article/465858.html",
            "holdTime": "2017-05-26 14:00"
        },
        {
            "companyName": "佛山市南艺之星艺术培训公司",
            "place": "活动中心302室",
            "schoolName": "西外",
            "articleUrl": "/article/468086.html",
            "holdTime": "2017-05-26 14:00"
        },
        {
            "companyName": "北京链家房地产经纪有限公司",
            "place": "临潼校区就创业中心第二宣讲室(人文管理楼215室)",
            "schoolName": "西工程",
            "articleUrl": "/article/466379.html",
            "holdTime": "2017-05-26 14:00"
        },
        {
            "companyName": "大秦人才网组团",
            "place": "南校区就业中心213",
            "schoolName": "西电",
            "articleUrl": "/article/467966.html",
            "holdTime": "2017-05-26 14:00"
        },
        {
            "companyName": "包头稀土高新技术产业开发区教育局",
            "place": "新勇中心(东)208",
            "schoolName": "陕师",
            "articleUrl": "/article/468172.html",
            "holdTime": "2017-05-26 14:30"
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
