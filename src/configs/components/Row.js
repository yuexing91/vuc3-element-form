export default {
  id: 'el-row',
  name: '栅格行',
  eventTypes: [],
  type: ['row'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    gutter: {
      label: '间距',
      editors: 'number',
    },
    align: {
      label: '垂直对齐',
      editors: 'select?@items=top|middle|bottom',
    },
    justify: {
      label: '水平排列',
      editors: 'select?start|end|center|space-around|space-between',
    },
    tag: {
      label: '自定义元素标签',
      editors: 'string',
    },
  },
  childLimit(childTag){
    return childTag === 'el-col';
  }
};
