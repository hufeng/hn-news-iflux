var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;


/**
 * Header
 */
var Header = React.createClass({
  mixins: [PureRenderMixin],

  render() {
    return (
      <header>
        <div className="container">
          <h1 className="logo">Hacker News</h1>
        </div>
      </header>
    );
  }

});

module.exports = Header;
