# 系统模板操作

### husky

代码检查规则

1. 执行 `npx husky-init`
2. 下面内容复制到 .husky/pre-commit

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

### 要修改的点

1. .env 文件中
   ```
   1. 文件修改 VITE_GLOB_APP_TITLE， 这是项目中文名称
   2. 修改 appid，每个应用在管理员后台新建时产生的唯一值
   ```
2. .env.development 等三个环境变量，修改跳转登录的地址

### 发起请求

```js
1. src/api/modules 中新建需要的模块 js 文件
2. vue 文件中引入 请求

import { http } from '@/api'
```

### 样式

styles 文件中有公共样式，flex 样式，动画样式等
注意：

1. flex 样式按照 flex.css 文档

### 提交代码的操作必须信息要以下内容

```
feat: 新增内容
fix: 修复内容
docs: 文档更改
style: 格式问题


types: [
    { value: 'feat: ', name: '新增:  新的内容' },
    { value: '🐛 修复  ', name: '修复:  修复一个Bug' },
    { value: '📝 文档  ', name: '文档:  变更的只有文档' },
    { value: '🏠 格式  ', name: '格式:  空格, 分号等格式修复' },
    { value: '♻️ 重构  ', name: '重构:  代码重构，注意和特性、修复区分开' },
    { value: '⚡️ 性能  ', name: '性能:  提升性能' },
    { value: '✅ 测试  ', name: '测试:  添加一个测试' },
    { value: '🔨 工具  ', name: '工具:  开发工具变动(构建、脚手架工具等)' },
    { value: '⏪ 回滚  ', name: '回滚:  代码回退' }
  ],
```

## 登录的流程

1. 三方应用，到登录中心换取 code
   https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect

参数 是否必须 说明
appid 是 应用唯一标识
redirect_uri 是 请使用 urlEncode 对链接进行处理
response_type 是 填 code
scope 是 应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写 snsapi_login
state 否 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止 csrf 攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加 session 进行校验
lang 否 界面语言，支持 cn（中文简体）与 en（英文），默认为 cn

2. 授权成功后会返回到本项目地址，路径上拼一个 code
   调用登录接口，当前项目即可获取
   https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
