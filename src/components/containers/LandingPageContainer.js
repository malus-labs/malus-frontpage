import React, { Component } from "react";
import { LandingPageView } from "../views";

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      moreOptions: [
        {image: "twitter.svg", name: "Twitter",  link: "https://twitter.com/malusfinance"}, 
        {image: "discord.svg", name: "Discord", link: "https://discord.com/channels/850826302641799199/850826303087312938"},
        {image: "github.svg", name: "Github", link: "https://github.com/malus-finance"},
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
    window.location.href = "app.malus.finance";
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