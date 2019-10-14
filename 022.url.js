let url=require("url");
console.log(url.parse('https://www.google.com/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94'));
/*
*Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
  query: 'hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
  pathname: '/search',
  path: '/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94',
  href: 'https://www.google.com/search?hl=zh-CN&q=%E5%A4%A9%E6%B0%94'
}

*
* */
