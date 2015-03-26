var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;


/**
 * Footer
 */
var Footer = React.createClass({
  mixins: [PureRenderMixin],


  render() {
    var post = this.props.post;

    return (
      <small>
        {post.get('points')} points by {post.get('postedBy') + ' ' + post.get('postedAgo')} |
        { post.get('commentCount') }
        { post.get('commentCount') === 1 ? ' comment' : ' comments' }
      </small>
    );
  }
});

module.exports = Footer;
