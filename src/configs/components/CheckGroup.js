export default {
  id: 'el-checkbox-group',
  name: '复选框组',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  slots: [
    {
      slot: 'default',
      name: '默认插槽',
    },
  ],
  type: ['input', 'checkbox-group'],
  props: {
    modelValue: {
      label: '值',
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    min: {
      label: '最小数量',
      editors: 'number',
    },
    max: {
      label: '最大数量',
      editors: 'number',
    },
    textColor: {
      label: '激活颜色',
      editors: 'string',
    },
    fill: {
      label: '激活颜色',
      editors: 'string',
    },
  },

  vModel: ['modelValue'],

  optionEditor: {
    title: '复选框选项',
    tag: 'el-checkbox',
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

  vucProxyOption: {
    onBeforeRender(vucNode, context) {
      vucNode.dfs((node) => {
        context.cancelOutline(node);
      });
    },
  },
};
