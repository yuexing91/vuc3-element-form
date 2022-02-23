import { getSizeEditor } from '../utils';

export default {
  id: 'el-radio',
  name: '单选框',
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
  ],
  type: ['input', 'radio'],
  props: {
    modelValue: {
      label: '绑定值',
      editors: ['boolean', 'string', 'number'],
    },
    label: {
      label: '值',
      editors: ['boolean', 'string', 'number'],
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    border: {
      label: '边框',
      editors: 'boolean',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
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

  vucProxyOption: {
    textProxy: false,
  },
};
