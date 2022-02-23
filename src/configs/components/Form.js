export default {
  id: 'el-form',
  name: '表单',
  eventTypes: [
    {
      id: 'validate',
      name: '触发校验',
    },
  ],
  type: ['container', 'form'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
  ],
  props: {
    model: {
      label: '数据对象',
      change(attr, old, node) {
        let inputs = node.querySelectorAll('.input');
        inputs.forEach(input => {
          let model = input.getDirective('model');
          if (model) {
            let modelValue = model.getAttrValue();
            let v = modelValue.split('.');
            if (v[0] == old.attrValue) {
              let v1 = [attr.attrValue].concat(v.slice(1)).join('.');
              input.setAttrValue(model.getAttrName(), v1);
            }
          }
        });
      },
    },
    rules: {
      label: '验证规则',
    },
    inline: {
      label: '行内表单',
      editors: 'boolean',
    },
    disabled: {
      label: '禁用',
      editors: 'boolean',
    },
    labelWidth: {
      label: '标签宽度',
      editors: 'string',
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
    labelPosition: {
      label: '标签位置',
      editors: 'select?@items=left:左|right:右|top:上',
    },
    labelSuffix: {
      label: '标签后缀',
      editors: 'string',
    },
    hideRequiredAsterisk: {
      label: '隐藏必填标记',
      editors: 'boolean',
    },
    showMessage: {
      label: '校验错误信息',
      editors: 'boolean?defaultValue=true',
    },
    inlineMessage: {
      label: '行内校验信息',
      editors: 'boolean?trueText=显示&falseText=隐藏',
    },
    statusIcon: {
      label: '反馈图标',
      editors: 'boolean',
    },
    validateOnRuleChange: {
      label: '规则改变重新校验',
      editors: 'boolean?defaultValue=true',
    },
  },
};
