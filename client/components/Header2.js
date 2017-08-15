import React from 'react'
import { Link } from 'react-router';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
        <Link to="register" className="nav-link">
          Sign up
        </Link>
      </li>
      </ul>
    );
  }
  return null;
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav navbar-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="animalform" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Animal
          </Link>
        </li>

        <li className="nav-item">
          <Link to="animals" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Animals
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="settings"
            className="nav-link">
            {props.currentUser.firstName}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};


class Header extends React.Component {
  render() {

    return(

      <nav className="navbar navbar-full">

         <Link to="/" className="navbar-brand">
            <img id="nav-img" src="/assets/images/logo.jpg" alt="Logo" />
         </Link>

         <LoggedOutView currentUser={this.props.currentUser} />

         <LoggedInView currentUser={this.props.currentUser} />

     </nav>


    )
  }
}

export default Header
