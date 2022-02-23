let template = `
<el-col key="col">
  <el-form-item key="formItem">
    <type.input key="input" allowChildren="true"/>
  </el-form-item>
</el-col>`;

import FormItem from './FormItem';

export default {
  id: 'GridFormItem',
  name: '栅格表单项',
  template,
  configs(combo) {
    let configs = FormItem.configs(combo);

    configs[0].items.splice(2, 0, {
      nodeKey: 'col',
      props: 'name=span',
    });

    return configs;
  },
};
