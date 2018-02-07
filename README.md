# 科学计数法转数字字符串

> 注意：超大数会有精度问题；
例如 1333333333333333333333的科学计数法是1.3333333333333332e+21，
转字符串是133333333333333320000

## 从NPM下载包

``` npm
npm i e2number-string
```

## 使用实例

### 引入一个对象

``` js
import E2num from 'e2number-string'

const e2Num = new E2num(val)
alert(e2Num.e2n())
```


## 构建

``` bash
# 安装依赖
npm install

# 打包
npm run build

# 单元测试
npm unit
```
