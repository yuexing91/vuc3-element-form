export default {
  id: ['el-option-group'],
  name: '选项分组',
  eventTypes: [],
  props: {
    label: {
      label: '组名',
      editors: 'string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
  },

  vucProxyOption: {
    textProxy: false,
  },

  vucEditorOption: {
    onBeforeSelectNode: false,
  },
};
