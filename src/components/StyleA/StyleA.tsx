import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import "../../style/StyleA.css";

export interface StyleAProps {
  props: {
    buttonColor: string;
    buttonBGColor: string;
    buttonHoverColor: string;
    buttonHoverBGColor: string;
    menuColor: string;
    menuBGColor: string;
    menuHoverColor: string;
    menuHoverBGColor: string;
    buttonBorder: string;
    buttonHoverBorder: string;
    menuBorder: string;
    menuHoverBorder: string;
    borderRadius: string;
    fontSize: string;
    menuList : Array<string>;
  }
};

function StyleA(props: StyleAProps) {
  const [buttonNameStyle, changeButtonStyle] = useState({
    backgroundColor: props.props.buttonBGColor,
    color: props.props.buttonColor,
    borderRadius: props.props.borderRadius,
    border: props.props.buttonBorder,
    fontSize: props.props.fontSize
   });
  const [menuStyle, changeMenuStyle] = useState({
  })

  const [menuHovers, changeMenuHover] = useState({})

  const [hoverElement, changeElement] = useState(0);

  
  let hoverOrNot: boolean;

  function buttonHover() {
    console.log("buttonHover");
    console.log(props.props.menuList);
    hoverOrNot = true;
    changeButtonStyle({
      backgroundColor: props.props.buttonHoverBGColor,
      color: props.props.buttonHoverColor,
      borderRadius: props.props.borderRadius,
      border: props.props.buttonHoverBorder,
      fontSize: props.props.fontSize
    });
    changeMenuStyle({
      display: "inline-block",
      backgroundColor: props.props.menuBGColor,
      color: props.props.menuColor,
      border: props.props.menuBorder
    })
    changeMenuHover({
      display: "inline-block",
      backgroundColor: props.props.menuHoverBGColor,
      color: props.props.menuHoverColor,
      border: props.props.menuHoverBorder
    })
  }

  function buttonHoverOver() {
    console.log("buttonHoverOver");
    hoverOrNot = false;
    setTimeout(checkForHover, 500);
  }

  function menuHover() {
    console.log("menuHover");
    hoverOrNot = true;
    //changeElement(menuNumber);
    console.log(hoverOrNot);
  }

  function menuHoverOver() {
    console.log("menuHoverOver");
    hoverOrNot = false;
    changeElement(0);
    setTimeout(checkForHover, 500);
    console.log(hoverOrNot);
  }

  function checkForHover() {
    console.log("checkForHover");
    console.log(hoverOrNot);
    if (hoverOrNot) {
      return;
    }
    else {
      changeButtonStyle({
        backgroundColor: props.props.buttonBGColor,
        color: props.props.buttonColor,
        borderRadius: props.props.borderRadius,
        border: props.props.buttonBorder,
        fontSize: props.props.fontSize
      });
      changeMenuStyle({
        display: "none"
      })
      changeMenuHover({
        display: "none"
      })
    }
  }

  function mStyleDecider (hoverElement: number, thisElement: number){
    console.log("mStyleDecider");
    console.log(hoverOrNot);
    if (hoverElement === thisElement) return menuHovers;
    else return menuStyle;
  }

  return (
    <div className='containerClass'>
      <div className='buttonName' onMouseEnter={buttonHover} onMouseLeave={buttonHoverOver} style={buttonNameStyle}>Button&nbsp;&nbsp;&nbsp; <span>▼</span></div>
      <div className='menu' onMouseEnter={menuHover} onMouseLeave={menuHoverOver} style={mStyleDecider(hoverElement, 1)}>Menu 1</div>
      <div className='menu' onMouseEnter={menuHover} onMouseLeave={menuHoverOver} style={mStyleDecider(hoverElement, 2)}>Menu 2</div>
      <div className='menu' onMouseEnter={menuHover} onMouseLeave={menuHoverOver} style={mStyleDecider(hoverElement, 3)}>Menu 3</div>
    </div>
  );
}

export default StyleA;