export default {
  id: 'el-cascader',
  name: '级联选择框',
  type: ['input', 'cascader'],
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
    },
    {
      id: 'expand-change',
      name: '展开节点',
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
      id: 'visible-change',
      name: '下拉框出现/隐藏',
    },
    {
      id: 'remove-tag',
      name: '移除Tag',
    },
  ],

  slots: [],

  props: {
    options: {
      label: '选项数据源',
      editors: {
        type: 'array',
        props: {
          keyName: 'value',
          isTreeData: true,
          fields: [
            {
              name: 'value',
              label: '选项值',
            },
            {
              name: 'label',
              label: '选项文本',
            },
          ],
        },
      },
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
    placeholder: {
      label: '占位符',
      editors: 'string',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    showAllLevels: {
      label: '完整路径',
      editors: 'boolean?trueText=显示&flaseText=隐藏',
    },
    collapseTags: {
      label: '折叠标签',
      editors: 'boolean',
    },
    separator: {
      label: '分隔符',
      editors: 'string',
    },
    filterable: {
      label: '可搜索',
      editors: 'boolean',
    },
    debounce: {
      label: '防抖延迟',
      editors: 'number',
    },
    popperClass: {
      label: '自定义类名',
      editors: 'string',
    },
    popperAppendToBody: {
      label: '插入至body',
      editors: 'boolean?defaultValue=true',
    },
    modelValue: {
      label: '值',
      editors: 'string',
    },
  },
  vModel: ['modelValue'],
};
