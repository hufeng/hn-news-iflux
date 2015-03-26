var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var PostItem = require('./post-item');


/**
 * Posts
 */
 var Posts = React.createClass({
   mixins: [PureRenderMixin],


   render() {
     return (
       <ol className="posts">
         {this.props.data.map(function (post) {
            return <PostItem key={post.get('id')} post={post}/>
         }).toArray()}
        </ol>
     );
   }
 });

module.exports = Posts;
