import { getSizeEditor } from '../utils';

export default {
  id: 'el-button',
  name: '按钮',
  eventTypes: [
    {
      id: 'click',
      name: '点击',
      quick: true,
    },
  ],

  slots: [
    {
      slot: 'default',
      name: '按钮内容',
    },
  ],

  type: ['button'],

  props: {
    type: {
      label: '按钮类型',
      editors: 'select?@items=primary|success|warning|danger|info|text',
    },
    plain: {
      label: '朴素按钮',
      editors: 'boolean',
    },
    icon: {
      label: '图标',
      editors: 'string',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    round: {
      label: '圆角按钮',
      editors: 'boolean',
    },
    circle: {
      label: '圆形按钮',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    loading: {
      label: '载入状态',
      editors: 'boolean',
    },
    autofocus: {
      label: '默认聚焦',
      editors: 'boolean',
    },
    autoInsertSpace: {
      label: '自动空格',
      editors: 'boolean',
    },
    nativeType: {
      label: '原生type',
      editors: 'select?@items=button|submit|reset',
    },
  },

  text: {
    label: '按钮文本',
  },

  childLimit() {
    return false;
  },

  vucProxyOption: {
    textProxy: false,
  },
};
