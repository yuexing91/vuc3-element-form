export default {
  id: ['el-col'],
  name: '栅格',
  eventTypes: [],
  type: ['col'],
  slots: [
    {
      slot: 'default',
      name: '默认插槽',
    },
  ],
  props: {
    span: {
      label: '栅格占位格数',
      editors: 'number',
    },
    offset: {
      label: '间隔',
      editors: 'number',
    },
    push: {
      label: '向右移动',
      editors: 'number',
    },
    pull: {
      label: '向左移动',
      editors: 'number',
    },
    xs: {
      label: 'xs',
      editors: 'number',
    },
    sm: {
      label: 'sm',
      editors: 'number',
    },
    md: {
      label: 'md',
      editors: 'number',
    },
    lg: {
      label: 'lg',
      editors: 'number',
    },
    xl: {
      label: 'xl',
      editors: 'number',
    },
    tag: {
      label: '自定义元素标签',
      editors: 'string',
    },
  },

  parentLimit(parentNode) {
    return parentNode.tag === 'a-row';
  },

};
