import { Component } from "react";
import Link from "next/link";
//import "bulma/css/bulma.min.css";

import NavbarItem from "./NavbarItem";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle;
  }

  state = {
    navMenuOpen: ""
  };

  componentDidMount() {
    this.setState({
      navMenuOpen: false
    });
  }

  toggle = () => {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    });
  };

  render() {
    const data = [
      { section: "Crecimiento", route: "/" },
      { section: "Perfil", route: "/" },
      { section: "Memorias de feedback", route: "/" },
      { section: "Habilidades destacadas", route: "/" },
      { section: "Personas que solicitan tu apoyo", route: "/" }
    ];

    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <figure className="image is-128x128">
              <img src="/assets/runa-logo.png" />
            </figure>
            <span
              className={
                this.state.navMenuOpen
                  ? "navbar-burger is-active"
                  : "navbar-burger"
              }
              data-target="navbarMenuHeroB"
              onClick={this.toggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              this.state.navMenuOpen ? "navbar-menu is-active" : "navbar-menu"
            }
            id="navbarMenuHeroB"
          >
            <div
              className={
                this.state.navMenuOpen ? "navbar-end is-active" : "navbar-end"
              }
            >
              {data.map((props, i) => (
                <NavbarItem {...props} key={i} />
              ))}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .image img {
              margin-top: 0.9rem;
              margin-left: 0.9rem;
            }
            span {
              color: #7a6ff0;
            }
            @media (max-width: 1023px) {
              .navbar-menu {
                height: 100vh;
              }
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Nav;
