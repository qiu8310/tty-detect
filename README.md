# tty-detect

Use [ANSI ESCAPE](https://en.wikipedia.org/wiki/ANSI_escape_code) detect terminal text size.

## API

* detectShortText(text, callback)
* detechEach(text, callback)
* detectEachNumbers(numbers, callback)
* unAnsiEscape(text, callback)


## Usage


```js
var tt = require('tty-detect');

// 获取字符串在命令行上显示的长度（不支持大量的文字，如超过一整个屏幕）
// 注意：使用前尽量 clear 下屏幕内容，因为如果不 clear，通过命令得到的当前行数总是最后一行
//      这样很容易影响长度的计算
tt.detectShortText('some text', function (err, len) {
  // ...
});


// 计算字符串中每个字符的长度，支持所有 Unicode 字符
// 使用了 punycode 库
tt.detechEach('some text', function (err, chars) {
  // chars is something like this: [{symbol: 's', codePoint: 115, size: 1}, ...]
});

```

**注意** 

* 在调用 text 或 words 时，不能并行执行，否则前面的会影响到后面的结果
* 在回调没有执行完成之前，不要用 console.log 或 console.error 来输出任何内容


## Example


```js

var ttyDetect = require('tty-detect');

var text = 'en\u0303中💩\u2661';

ttyDetect.detectShortText(text, function (err, len) {
  console.log('字符串 " %s " 的长度是 %d\n', text, len);

  ttyDetect.detectEach(text, function (err, chars) {
    chars.forEach(function (c) {
      console.log('字符 " %s " 的 CodePoint 是 %d, 长度是 %d', c.symbol, c.number, c.size);
    });
  });

});

```



