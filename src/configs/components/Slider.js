import { getSizeEditor } from '../utils';

export default {
  id: 'el-slider',
  name: '滑动输入条',
  eventTypes: [
    {
      id: 'input',
      name: '输入',
    },
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'slider'],
  props: {
    modelValue: {
      label: '值',
      editors: 'number',
    },
    max: {
      label: '最大值',
      editors: 'number',
    },
    min: {
      label: '最小值',
      editors: 'number',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    showStops: {
      label: '显示间断点',
      editors: 'boolean',
    },
    range: {
      label: '范围选择',
      editors: 'boolean',
    },
    step: {
      label: '步长',
      editors: 'number',
    },
    showInput: {
      label: '显示输入框',
      editors: 'boolean',
    },
    inputSize: {
      label: '输入框尺寸',
      editors: getSizeEditor(),
    },
    showInputControls: {
      label: '输入框按钮',
      editors: 'boolean?defaultValue=true',
    },
    vertical: {
      label: '垂直模式',
      editors: 'boolean',
    },
    height: {
      label: '高度',
      editors: 'string',
    },
    debounce: {
      label: '防抖延迟',
      editors: 'number',
    },
    formatTooltip: {
      label: '格式化',
    },
    marks: {
      label: '刻度',
    },
  },

  vModel: ['modelValue'],

  vucProxyOption: {
    textProxy: false,
  },
};
