import { getSizeEditor } from '../utils';

export default {
  id: 'el-auto-complete',
  name: '自动完成',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
    {
      id: 'select',
      name: '选中',
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
  type: ['input', 'auto-complete'],
  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    valueKey: {
      label: '键名',
      editors: 'string',
    },
    placement: {
      label: '菜单弹出位置',
      editors: 'select?@items=top|top-start|top-end|bottom|bottom-start|bottom-end',
    },
    fetchSuggestions: {
      lable: '数据方法',
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
    debounce: {
      label: '防抖延时',
      editors: 'number',
    },
    icon: {
      label: '图标组件',
      editors: 'string',
    },
  },
  vModel: ['value'],
};
