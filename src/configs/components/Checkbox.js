export default {
  id: 'el-checkbox',
  name: '复选框',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'checkbox'],
  props: {
    modelValue: {
      label: '是否选中',
      editors: 'boolean',
    },
    label: {
      label: '复选框值',
      editors: 'string',
    },
    trueLabel: {
      label: '选择时的值',
      editors: 'string',
    },
    falseLabel: {
      label: '未选时的值',
      editors: 'string',
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
    border: {
      label: '边框',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    checked: {
      label: '当前是否勾选',
      editors: 'boolean',
    },
    indeterminate: {
      label: 'indeterminate',
      editors: 'boolean',
    },
  },

  vModel: ['modelValue'],

  vucEditorOption: {
    onBeforeSelectNode(vucNode) {
      return vucNode.parent.tag !== 'el-checkbox-group';
    },
  },

  vucProxyOption: {
    textProxy: false,
  },
};
