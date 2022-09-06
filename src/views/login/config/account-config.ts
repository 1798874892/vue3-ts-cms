export const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名0.0',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字0.0',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码0.0',
      trigger: 'blur'
    },
    {
      // pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,
      // message: '密码必须是6位以上的字母和数字组合0.0',
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字0.0',
      trigger: 'blur'
    }
  ]
}
