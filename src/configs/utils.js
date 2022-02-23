export function getSizeEditor() {
  return {
    name: '选项',
    type: 'select',
    props: {
      items: [
        {
          value: 'medium',
          label: '大',
        },
        {
          value: 'small',
          label: '中',
        },
        {
          value: 'mini',
          label: '小',
        },
      ],
    },
  };
}
