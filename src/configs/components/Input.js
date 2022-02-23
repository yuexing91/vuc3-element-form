import { getSizeEditor } from '../utils';

export default {
  id: 'el-input',
  name: '输入框',
  type: ['input'],
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
    {
      id: 'input',
      name: '输入',
    },
    {
      id: 'clear',
      name: '清空',
    },
  ],

  slots: [
    {
      slot: 'prefix',
      name: '头部内容',
    },
    {
      slot: 'suffix',
      name: '尾部内容',
    },
    {
      slot: 'prepend',
      name: '前置内容',
    },
    {
      slot: 'append',
      name: '后置内容',
    },
  ],

  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    type: {
      label: '类型',
      editors: 'select?@items=text|textarea|password|url|email|date|number|tel',
    },
    showWordLimit: {
      label: '字数统计',
      editors: 'boolean',
    },
    showPassword: {
      label: '切换密码图标',
      editors: 'boolean',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    placeholder: {
      label: '占位文本	',
      editors: 'string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    readonly: {
      label: '只读',
      editors: 'boolean',
    },
    minlength: {
      label: '最小输入长度',
      editors: 'number',
    },
    maxlength: {
      label: '最大输入长度',
      editors: 'number',
    },
    rows: {
      label: '文本域行数',
      editors: 'number',
    },
    autosize: {
      label: '高度自适应',
      editors: 'boolean',
    },
    prefix: {
      label: '前缀',
      editors: 'string',
    },
    suffix: {
      label: '后缀',
      editors: 'string',
    },
    resize: {
      label: '是否缩放',
      editors: 'select?@items=none|both|horizontal|vertical',
    },
    tabindex: {
      label: 'tabindex',
      editors: ['string', 'number'],
    },
    validateEvent: {
      label: '触发表单校验',
      editors: 'boolean?defaultValue=true',
    },
    inputStyle: {
      label: '输入框样式',
    },
    label: {
      label: '文本',
      editors: 'string',
    },
  },

  vModel: ['modelValue'],

};
