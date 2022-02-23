import { getSizeEditor } from '../utils';

export default {
  id: ['el-select'],
  name: '下拉框',
  eventTypes: [
    {
      id: 'change',
      name: '值变更',
    },
    {
      id: 'select',
      name: '选中',
    },
    {
      id: 'deselect',
      name: '取消选中',
    },
    {
      id: 'focus',
      name: '获得焦点',
    },
    {
      id: 'blur',
      name: '失去焦点',
    },
    {
      id: 'inputKeydown',
      name: '键盘按下',
    },
    {
      id: 'mouseenter',
      name: '鼠标移入',
    },
    {
      id: 'mouseleave',
      name: '鼠标移出',
    },
    {
      id: 'dropdownVisibleChange',
      name: '展开下拉菜单',
    },
    {
      id: 'popupScroll',
      name: '下拉列表滚动',
    },
    {
      id: 'search',
      name: '搜索时',
    },
  ],

  type: ['input', 'select'],

  slots: [
    {
      slot: 'placeholder',
      name: '选择框默认文字',
    },
    {
      slot: 'notFoundContent',
      name: '下拉列表为空时内容',
    },
    {
      slot: 'suffixIcon',
      name: '后缀图标',
    },
    {
      slot: 'removeIcon',
      name: '多选框清除图标',
    },
    {
      slot: 'clearIcon',
      name: '多选框清空图标',
    },
    {
      slot: 'menuItemSelectedIcon',
      name: '选中的条目图标',
    },
  ],

  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    multiple: {
      label: '多选',
      editors: 'boolean',
    },
    multipleLimit: {
      label: '多选最大值',
      editors: 'number',
    },
    size: {
      label: '尺寸',
      editors: getSizeEditor(),
    },
    placeholder: {
      label: '占位文本	',
      editors: 'string',
    },
    clearable: {
      label: '清空按钮',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    collapseTags: {
      label: '多选折叠标签',
      editors: 'boolean',
    },
    filterable: {
      label: '可筛选',
      editors: 'boolean',
      help: '使单选模式可搜索',
    },
    allowAreate: {
      label: '允许创建新条目',
      editors: 'boolean',
    },
    filterMethod: {
      label: '自定义筛选方法',
    },
    remote: {
      label: '远程搜索',
      editors: 'boolean',
    },
    remoteMethod: {
      label: '远程搜索函数',
    },
    loading: {
      label: '加载状态',
      editors: 'boolean',
    },
    loadingText: {
      label: '加载中时文字',
      editors: 'string',
    },
    noMatchText: {
      label: '无匹配项文字',
      editors: 'string',
    },
    noDataText: {
      label: '选项为空文字',
      editors: 'string',
    },
    reserveKeyword: {
      label: '保留搜索关键词',
      editors: 'boolean',
    },
    defaultFirstOption: {
      label: '回车选中首项',
      editors: 'boolean',
    },
    popperAppendToBody: {
      label: '插入到body',
      editors: 'boolean?defaultValue=true',
    },
  },

  vModel: ['value'],

  optionEditor: {
    title: '下拉框选项',
    tag: 'a-select-option',
    getData(node) {
      return {
        value: node.getAttrValue('value'),
        label: node.getAttrValue('label') || node.getText(),
      };
    },
    setData(node, data) {
      node.setAttrValue('value', data.value);
      if (node.getBind('label')) {
        node.setAttrValue('label', data.label);
      } else {
        node.setText(data.label);
      }
    },
  },
};
