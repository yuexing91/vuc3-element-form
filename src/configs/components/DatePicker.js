export default {
  id: 'el-date-picker',
  name: '日期选择框',
  type: ['input', 'date-picker'],
  eventTypes: [
    {
      id: 'change',
      name: '值改变',
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
      id: 'calendar-change',
      name: 'calendar-change',
    },
  ],

  slots: [],

  props: {
    modelValue: {
      label: '值',
      editors: 'string',
    },
    type: {
      label: '类型',
      editors: 'select?@items=year:年|month:月|date:日期|dates:多日期|datetime:时间|week:星期|datetimerange:时间范围|daterange:日期范围|monthrange:月范围',
    },
    format: {
      label: '显示格式化',
      editors: 'string',
    },
    valueFormat: {
      label: '值格式化',
      editors: 'string',
    },
    editable: {
      label: '禁用输入框',
      editors: 'boolean',
    },
    clearable: {
      label: '清除按钮',
      editors: 'boolean',
    },
    placeholder: {
      label: '占位符',
      editors: 'string',
    },
    startPlaceholder: {
      label: '开始日期占位符',
      editors: 'string',
    },
    endPlaceholder: {
      label: '结束日期占位符',
      editors: 'string',
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
    rangeSeparator: {
      label: '范围分隔符',
      editors: 'string',
    },
    unlinkPanels: {
      label: '范围联动',
      editors: 'boolean',
    },
    readonly: {
      label: '只读',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    validateEvent: {
      label: '触发表单校验',
      editors: 'boolean?defaultValue=true',
    },
    shortcuts: {
      label: '快捷选项',
    },
  },
  vModel: ['modelValue'],
};
