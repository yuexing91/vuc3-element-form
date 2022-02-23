export default {
  id: 'el-tab-pane',
  name: '标签页',
  type: ['panel', 'tab-pane'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
    {
      slot: 'label',
      name: '标题',
    },
  ],
  props: {
    name: {
      label: 'key',
      editors: 'string',
    },
    label: {
      label: '标题',
      editors: 'string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    closable: {
      label: '可关闭',
      editors: 'boolean',
    },
    lazy: {
      label: '延迟渲染',
      editors: 'boolean',
    },
  },
};
