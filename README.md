# 畅校园 - 海投宣讲会

> 本项目初版用原生实现，之后用 React 重写
> 本项目大量借鉴以下网站且后台数据来源于此
> * [海投网 - PC版(jQuery Angular BootStrap)](http://xjh.haitou.cc/)
> * [海投网 - 手机版(React)](http://m.haitou.cc/xjh)
> * [接口文档](./interface.md)

## 第一期开发任务

- [X] 首页大框架
- [ ] 每个宣讲会的学校图片用校名缩写显示
- [ ] 省份选择的组件
- [ ] 时间选择的组件
- [ ] 异步加载宣讲会信息
- [ ] 首页宣讲会分页功能

## 合作指南

> 具体步骤查资料~

* 克隆本仓库至本地

```
git clone https://git.oschina.net/CreatShare/haitou-fe.git
cd haitou-fe
```

* 使用 git flow 方式开发，参考 [git-flow 备忘清单](https://danielkummer.github.io/git-flow-cheatsheet/index.zh_CN.html)

```
git flow init
git flow feature start MYFEATURE
git flow feature finish MYFEATURE
```

* 合并分支并推送远方

```
git checkout master
git merge develop
git push origin master
```