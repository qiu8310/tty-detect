var tt = require('../');

var text = 'en\u0303中💩\u2661';

tt.detectShortText(text, function (err, len) {
  console.log('The size of string " %s " is %d\n', text, len);

  tt.detectEach(text, function (err, chars) {
    chars.forEach(function (c) {
      console.log('Character " %s ", CodePoint %d, Size %d', c.symbol, c.number, c.size);
    });
  });

});
