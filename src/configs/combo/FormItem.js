let template = `<el-form-item key="formItem">
      <type.input key="input" allowChildren="true"/>
    </el-form-item>`;

export default {
  id: 'FormItem',
  name: '表单项',
  template,
  configs(combo) {
    let configs = [
      {
        title: '属性',
        mode: 'prop',
        items: [
          {
            nodeKey: 'formItem',
            name: 'prop',
          },
          {
            nodeKey: 'formItem',
            name: 'label',
            label: '字段标签',
          },
          {
            nodeKey: 'formItem',
            name: 'required',
          },
          {
            nodeKey: 'input',
            name: 'autosize',
          },
          {
            nodeKey: 'input',
            name: 'min',
          },
          {
            nodeKey: 'input',
            name: 'max',
          },
          {
            nodeKey: 'input',
            name: 'count',
          },
          {
            nodeKey: 'input',
            name: 'allowHalf',
          },
          {
            nodeKey: 'input',
            name: 'size',
          },
          {
            nodeKey: 'input',
            name: 'valueFormat',
          },
          {
            nodeKey: 'input',
            name: 'format',
          },
          {
            nodeKey: 'input',
            name: 'clearable',
          },
          {
            nodeKey: 'input',
            name: 'placeholder',
          },
          {
            nodeKey: 'input',
            name: 'step',
          },
          {
            nodeKey: 'input',
            name: 'disabled',
          },
          {
            nodeKey: 'formItem',
            name: 'rules',
          },
        ],
      },
      {
        title: '事件',
        mode: 'event',
        items: [
          {
            nodeKey: 'input',
            id: 'change',
            name: '值变更事件',
          },
        ],
      },
      {
        title: '样式',
        mode: 'style',
        items: [
          {
            nodeKey: 'input',
            id: 'width',
            name: '宽度',
            excludeTags: ['el-checkbox-group', 'el-radio-group'],
          },
        ],
      },
    ];

    return configs;
  },
};
