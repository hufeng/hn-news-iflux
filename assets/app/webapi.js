////////////webapi//////////////////


/**
 * 获取最新的post
 */
exports.fetchLatestNews = () => {
  var deferred = new $.Deferred;

  $.ajax({
    url: 'http://api.ihackernews.com/page',
    dataType:  'jsonp',
    data:      { format: 'jsonp' },
    success: (result) => {
      deferred.resolve(result);
    },
    error: () => {
      deferred.reject();
      alert('error getting posts. please try again later');
    }
  });

  return deferred.promise();
};
