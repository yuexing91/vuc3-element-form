import { getSizeEditor } from '../utils';

export default {
  id: 'el-input-number',
  name: '数字框',
  type: ['input', 'input-number'],
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
    {
      id: 'blur',
      name: '失去焦点',
    },
    {
      id: 'focus',
      name: '获得焦点',
    },
  ],

  slots: [],

  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    placeholder: {
      label: '占位符',
      editors: 'string',
    },
    step: {
      label: '步长',
      editors: 'number',
    },
    stepStrictly: {
      label: '只能输入 step 的倍数',
      editors: 'boolean',
    },
    precision: {
      label: '数值精度',
      editors: 'number',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    controls: {
      label: '使用控制按钮',
      editors: 'boolean',
    },
    controlsPosition: {
      label: '控制按钮位置',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    max: {
      label: '最大值',
      editors: 'number',
    },
    min: {
      label: '最小值',
      editors: 'number',
    },
  },
  vModel: ['modelValue'],
};
