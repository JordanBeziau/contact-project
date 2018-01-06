import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

export class Navbar extends Component {
  logout = () => {
    Meteor.logout();
    if (this.props.forceUpdate) this.props.forceUpdate(false);
  };

  render() {
    const { admin, user } = this.props;
    return (
      <Menu borderless color={admin && "orange"} inverted attached>
        {admin && <Menu.Item>ADMIN</Menu.Item>}
        <Link to="/">
          <Menu.Item>Accueil</Menu.Item>
        </Link>
        {user &&
          Roles.userIsInRole(user._id, "admin") && (
            <Link to="/admin/pages">
              <Menu.Item>Admin pages</Menu.Item>
            </Link>
          )}
        <Menu.Menu position="right">
          {user ? (
            [
              <Menu.Item key="1">
                <Icon name="user" />
                {user.username}
              </Menu.Item>,
              <Menu.Item key="2" onClick={this.logout}>
                Déconnexion
              </Menu.Item>
            ]
          ) : (
            <Link to="/signin">
              <Menu.Item>Connexion / Inscription</Menu.Item>
            </Link>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default (NavbarContainer = withTracker(() => {
  const user = Meteor.user();
  return {
    user
  };
}))(Navbar);
