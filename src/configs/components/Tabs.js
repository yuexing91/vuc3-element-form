export default {
  id: 'el-tabs',
  name: '标签页组',
  eventTypes: [
    {
      id: 'tab-click',
      name: '点击',
    },
    {
      id: 'edit',
      name: '新增或删除',
    },
    {
      id: 'tab-add',
      name: '新增',
    },
    {
      id: 'tab-remove',
      name: '关闭',
    },
  ],
  type: ['panel', 'tabs'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    modelValue: {
      label: '激活标签页名称',
      editors: 'string',
    },
    type: {
      label: '风格',
      editors: 'select?@items=card:默认|border-card:边框',
    },
    tabPosition: {
      label: '位置',
      editors: 'select?@items=top|right|bottom|left',
      help: '页签位置',
    },
    tabBarStyle: {
      label: '样式',
      help: 'tab bar 的样式',
    },
    closable: {
      label: '可关闭',
      editors: 'boolean',
    },
    addable: {
      label: '可新增',
      editors: 'boolean',
    },
    editable: {
      label: '可编辑',
      editors: 'boolean',
    },
    stretch: {
      label: '宽度自适应',
      editors: 'boolean',
    },
    beforeLeave: {
      label: '切换标签之前',
    },
  },
  vModel: ['modelValue'],
  //可以放置什么东西
  childLimit(childTag) {
    return childTag === 'el-tab-pane';
  },

  editorTools: [
    {
      title: '添加标签页',
      icon: 'PlusCircleOutlined',
      handler(e, node) {
        node.appendNode(`<el-tab-pane name="新增标签页${ node.children.length + 1 }"></el-tab-pane>`);
      },
    },
  ],
};
