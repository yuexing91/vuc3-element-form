export default {
  id: 'el-switch',
  name: '开关',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'switch'],
  props: {
    modelValue: {
      label: '值',
      editors: 'number',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    width: {
      label: '宽度',
      editors: 'string',
    },
    activeText: {
      label: '选中时文本',
      editors: 'string',
    },
    inactiveText: {
      label: '未选中文本',
      editors: 'string',
    },
    activeValue: {
      label: '选中时值',
      editors: ['string', 'boolean?defaultValue=true', 'number'],
    },
    onActiveValue: {
      label: '未选中值',
      editors: ['string', 'boolean', 'number'],
    },
    activeColor: {
      label: '选中时颜色',
      editors: 'string',
    },
    inactiveColor: {
      label: '未选中颜色',
      editors: 'string',
    },
    borderColor: {
      label: '边框颜色',
      editors: 'string',
    },
    loading: {
      label: '加载中状态',
      editors: 'boolean',
    },
    inlinePrompt: {
      label: '只显示第一个文本',
      editors: 'boolean',
    },
    beforeChange: {
      label: '状态改变之前',
    },
  },

  vModel: ['modelValue'],

  vucProxyOption: {
    textProxy: false,
  },
};
