import React, { Component } from "react";
import { LandingPageView } from "../views";

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      moreOptions: [
        {image: "twitter.svg", name: "Twitter",  link: "https://twitter.com/maluslabs"}, 
        {image: "discord.svg", name: "Discord", link: "https://discord.gg/cuXW8gq9kE"},
        {image: "github.svg", name: "Github", link: "https://github.com/malus-labs"},
        {image: "docs.svg", name: "Docs", link: "https://docs.malus.fi"},
      ],

      moreOptionsVisibility: "hidden",
    };
  }

  handleShowMoreOptions = (e, visibility) => {
    e.preventDefault();

    this.setState({
      moreOptionsVisibility: visibility,
    });
  }

  handleClick = (e) => {
    window.open("https://rinkeby.malus.fi", "_self");
    //window.location.href = "/discover";
  }

  render() {
    return (
      <>
      <LandingPageView
      handleShowMoreOptions={this.handleShowMoreOptions}
      handleClick={this.handleClick}
      state={this.state}
      />
      </>
    );
  }
}

export default LandingPageContainer;