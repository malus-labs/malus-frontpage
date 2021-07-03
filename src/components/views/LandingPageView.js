import React from "react";
import "../views/styles/LandingPageView.css";
import { More, Logo1 } from "../icons";

const LandingPageView = (props) => {
    var MoreOptions;

    MoreOptions = (
    <>
    <div class="moreOptions" onMouseEnter={e => props.handleShowMoreOptions(e, "visible")} onMouseLeave={e => props.handleShowMoreOptions(e, "hidden")} style={{"visibility": props.state.moreOptionsVisibility}}>
      <div class="optionContainers">
        {props.state.moreOptions.map((option) => (
        <a class="optionCell" target="_blank" rel="noopener noreferrer" href={option.link}>
          <div>
            <div class="optionIcon">
              <img src={`${option.image}`} alt=""></img>
            </div>
          </div>
          <div>
            <p class="optionName">{option.name}</p>
          </div>
        </a>
        ))}
      </div>
    </div>
    </>
    );

    return (
        <>
        <div class="landingPage">
            <div class="landingNavBar">
                <div class="logoContainer">
                    <Logo1 width="40px" height="40px" fill="white"/>
                    <p class="malusTitle">Malus <span class="beta">Beta</span></p>
                </div>
                <div></div>
                <ul>
                    <li 
                    class="moreListIcon" 
                    onMouseEnter={e => props.handleShowMoreOptions(e, "visible")} 
                    onMouseLeave={e => props.handleShowMoreOptions(e, "hidden")}>
                        <span>
                            <More className="moreIcon1" fill="black"/>
                        </span>
                    </li>
                    <li>
                        <button class="appButton" onClick={e => props.handleClick(e)}>
                            <span>App</span>
                        </button> 
                    </li>
                </ul>
            </div>
            {MoreOptions}
            <div class="textHolder">
                <p class="frontPageText">7% peer to peer<br></br> cashback using usdc</p>
            </div>
        </div>
        </>
    );
};

export default LandingPageView;