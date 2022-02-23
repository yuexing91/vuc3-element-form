export default {
  id: 'el-card',
  name: '卡片',
  eventTypes: [
    {
      id: 'tabChange',
      name: '页签切换',
    },
  ],
  type: ['panel', 'card'],
  slots: [
    {
      slot: 'default',
      name: '卡片内容',
    },
    {
      slot: 'header',
      name: '卡片标题',
    },
  ],
  props: {
    header: {
      label: '标题',
      editors: 'string',
      help: '标题',
    },
    shadow: {
      label: '阴影显示时机',
      editors: 'select?@items=always|hover|never',
    },
    bodyStyle: {
      label: 'body样式',
    },
  },
};
