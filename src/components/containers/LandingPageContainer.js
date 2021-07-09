import React, { Component } from "react";
import { LandingPageView } from "../views";

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      moreOptions: [
        {image: "twitter.svg", name: "Twitter",  link: "https://twitter.com/maluslabs"}, 
        {image: "discord.svg", name: "Discord", link: "https://discord.com/channels/850826302641799199/850826303087312938"},
        {image: "github.svg", name: "Github", link: "https://github.com/malus-labs"},
        {image: "medium.svg", name: "Medium", link: "https://medium.com/@malus-finance"},
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
    window.open("https://app.malus.finance", "_self");
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