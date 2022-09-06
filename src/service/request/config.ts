// 方式一：手动切换开发环境（不推荐）
// const BASE_URL = 'http://coderlxy.org/prod'
// const BASE_NAME = 'coderlxy'

// const BASE_URL = 'http://coderlxy.org/dev'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderlxy.org/test'
// const BASE_NAME = 'james'

// 方式二：根据process.env.NODE_ENV（常用）
// 开发环境：development
// 生产环境：production
// 测试环境： test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderlxy.org/prod'
} else {
  BASE_URL = 'http://coderlxy.org/test'
}

export { BASE_URL, TIME_OUT }

// 方式三：根目录下新建.env.development等文件
