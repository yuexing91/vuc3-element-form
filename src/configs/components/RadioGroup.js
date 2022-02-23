import { getSizeEditor } from '../utils';

export default {
  id: 'el-radio-group',
  name: '单选框组',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'radio'],
  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    textColor: {
      label: '激活时文本颜色',
      editors: 'string',
    },
    fill: {
      label: '激活时填充颜色',
      editors: 'string',
    },
  },

  optionEditor: {
    title: '单选框选项',
    tag: 'el-radio',
    getData(node) {
      return {
        value: node.getAttrValue('value'),
        label: node.getText(),
      };
    },
    setData(node, data) {
      node.setAttrValue('value', data.value);
      node.setText(data.label);
    },
  },

  vModel: ['modelValue'],

  vucProxyOption: {
    textProxy: false,
  },
};
