export default [
  ['apiRegister', ['/register', 'post']], // 注册
  ['apiLogin', ['/login', 'post']], // 登录
  ['apiLogout', ['/logout', 'post']], // 退出
  ['apiUserInfo', ['/user/info', 'post']], // 用户信息

  // ———————————————————————— CPM 计算器 ————————————————————————

  ['tiktokUserPosts', ['/tiktok/user/posts', 'post']], // 搜索信息
  ['cpmCalculatorQuery', ['/toolbox/cpm-calculator/query', 'post']], // 搜索信息

  // ———————————————————————— 用户信息 ————————————————————————
  ['changePassword', ['/user/change-password', 'post']], // 修改密码
]
