export const rules = {
  phone: [
    {
      required: true,
      message: '请输入手机号^.^',
      trigger: 'blur'
    },
    {
      pattern:
        /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
      message: '请确认手机号码是否输入正确^.^',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '请输入验证码^.^',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-z](1,6)$/,
      message: '请确认验证码是否输入正确^.^',
      trigger: 'blur'
    }
  ]
}
