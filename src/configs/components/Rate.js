export default {
  id: 'el-rate',
  name: '评分',
  type: ['input', 'rate'],
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],

  props: {
    modelValue: {
      label: '值',
      editors: 'number',
    },
    max: {
      label: '最大分值',
      editors: 'number',
    },
    lowThreshold: {
      label: '低中分分界值',
      editors: 'number',
    },
    highThreshold: {
      label: '高中分分界值',
      editors: 'number',
    },
    allowHalf: {
      label: '允许半选',
      editors: 'boolean',
    },
    showText: {
      label: '显示辅助文字',
      editors: 'boolean',
    },
    showScore: {
      label: '显示当前分数',
      editors: 'boolean',
    },
    texts: {
      label: '辅助文字',
      editors: 'array?type=string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    scoreTemplate: {
      label: '分数显示模板',
      editors: 'string',
    },
  },
  vModel: ['modelValue'],
};
