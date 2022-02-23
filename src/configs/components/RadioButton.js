export default {
  id: 'el-radio-button',
  name: '单选框按钮',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'radio', 'radio-button'],
  props: {
    label: {
      label: '值',
      editors: ['string', 'number'],
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    name: {
      label: '原生name',
      editors: 'string',
    },
  },

  vModel: ['modelValue'],

  vucEditorOption: {
    onBeforeSelectNode(vucNode) {
      return vucNode.parent.tag !== 'el-radio-group';
    },
  },

};
