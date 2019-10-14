let url=require("url");
//json
let googleUrl=url.parse(
    'https://www.google.com/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
    true);

console.log(googleUrl);
console.log(googleUrl.query.hl);
/*
* Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
  query: [Object: null prototype] { hl: 'zh-CN', q: '天气' },
  pathname: '/search',
  path: '/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
  href: 'https://www.google.com/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94'
}
zh-CN
*/
