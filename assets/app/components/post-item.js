var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Comment = require('./comment');


/**
 * post-item
 */
var PostItem = React.createClass({
  mixins: [PureRenderMixin],


  render() {
    var post = this.props.post;

    return (
      <li>
       <a href={post.get('url')}>{post.get('title') || 'no title'}</a>
       <Comment post={post}/>
      </li>
    );
  }
});


module.exports = PostItem;
