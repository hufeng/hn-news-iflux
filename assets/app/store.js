var Immutable = require('immutable');
var {Store} = require('iflux');
var webApi = require('./webapi');


/**
 * 数据中心
 */
var appStore = module.exports = Store({
  posts: []
});



//初始化
webApi
  .fetchLatestNews()
  .done((result) => {
    appStore
    .cursor()
    .set('posts', Immutable.fromJS(result.items));
  });
