/**
 * @description 导出默认主题配置
 */
export default {
  // 是否固定头部
  isFixedHeader: false,
  // 是否折叠侧边菜单
  isCollapseMenu: false,
  // 显示全屏按钮
  showFullScreen: true,
  // 显示搜索
  showSearch: true,
  // 显示主题更改
  showTheme: true,
  // 页面头部高度
  headerHeight: 60,
  // 页面侧边栏宽度
  asideWidth: 220,
  asideCollapseWidth: 70,
  // 布局
  layouts: [
    {
      title: '分栏',
      key: 'splitmenu'
    },
    {
      title: '综合',
      key: 'synthesize'
    }
  ],
  // 页面主题颜色
  colors: [
    {
      color: '#518cfc',
      bgColor: '#ffffff',
      title: '蓝白',
      menuActiveBgColor: '#518cfc80',
      menuTextColor: '#333333'
    },
    {
      color: '#518cfc',
      bgColor: '#282c34',
      title: '蓝黑',
      menuActiveBgColor: '##518cfc80',
      menuTextColor: '#ffffff'
    },

    {
      color: '#6954f0',
      bgColor: '#ffffff',
      title: '紫白',
      menuActiveBgColor: '#6954f080',
      menuTextColor: '#333333'
    },
    {
      color: '#6954f0',
      bgColor: '#282c34',
      title: '紫黑',
      menuActiveBgColor: '#6954f080',
      menuTextColor: '#ffffff'
    },

    {
      color: '#41b584',
      bgColor: '#ffffff',
      title: '绿白',
      menuActiveBgColor: '#41b58480',
      menuTextColor: '#333333'
    },
    {
      color: '#41b584',
      bgColor: '#282c34',
      title: '绿黑',
      menuActiveBgColor: '#41b58480',
      menuTextColor: '#ffffff'
    },
    {
      color: '#f34d37',
      bgColor: '#ffffff',
      title: '红白',
      menuActiveBgColor: '#f34d3780',
      menuTextColor: '#333333'
    },
    {
      color: '#f34d37',
      bgColor: '#282c34',
      title: '红黑',
      menuActiveBgColor: '#f34d3780',
      menuTextColor: '#ffffff'
    }
  ]
}
