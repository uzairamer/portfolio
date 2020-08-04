import React from "react";

import "./App.css";
import "./assets/main.css";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import AboutMe from "./components/about-me/about-me.component";
import Services from "./components/services/services.component";
import Projects from "./components/projects/projects.component";
import Reviews from "./components/reviews/reviews.component";
import Contact from "./components/contact/contact.component";
import MobileMenu from "./components/mobile-menu/mobile-menu.component";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      currentSelectedMenu: "Home",
    };
  }

  toggleMobileMenu = () => {
    this.setState({ active: !this.state["active"] });
  };

  updateSelectedMenu = (menuItem) => {
    this.setState({ currentSelectedMenu: menuItem });
  };

  render() {
    return (
      <div className="App relative">
        <MobileMenu
          active={this.state["active"]}
          updateMobileMenu={this.toggleMobileMenu}
        />
        <Header
          updateMobileMenu={this.toggleMobileMenu}
          currentSelectedMenu={this.state["currentSelectedMenu"]}
          updateSelectedMenu={this.updateSelectedMenu}
        />
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </div>
    );
  }
}
