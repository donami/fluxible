var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var connectToStores = require("fluxible-addons-react").connectToStores;
var UserStore = require('../stores/UserStore');

var Nav = React.createClass({
    render() {
        var loggedInMessage = "";
        if (this.props && this.props.username) {
            loggedInMessage = (<span> - Welcome <strong>{this.props.username}</strong></span>);
        }
        return (
            <p>
                <NavLink href="/">Home</NavLink>
                <span> - </span>
                <NavLink href="/feed">Your Feed</NavLink>
                {loggedInMessage}
            </p>
        );
    }
});

module.exports = connectToStores(
    Nav,  
    [UserStore],
    function (context, props) {
        return {
            username: context.getStore(UserStore).getUsername()
        }
    }
);
