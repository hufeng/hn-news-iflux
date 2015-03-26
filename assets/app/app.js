var React = require('react');
var StoreMixin  = require('iflux').mixins.StoreMixin;
var Header = require('./components/header');
var Posts  = require('./components/posts');
var appStore = require('./store');


/**
 * app
 */
var App = React.createClass({
  mixins: [StoreMixin(appStore)],

  /**
   * virtualdom
   */
  render() {
    var store = appStore.data();

    return (
      <div>
        <Header/>
        <div className="container content">
          <Posts data={store.get('posts')}/>
        </div>
      </div>
    );
  }
});


React.render(<App/>, document.body);
