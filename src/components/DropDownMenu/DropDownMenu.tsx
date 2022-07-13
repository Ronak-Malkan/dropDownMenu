import React from 'react';
import StyleA from '../StyleA/StyleA';

function DropDownMenu() {
  
  const props = {
    buttonColor: "red",
    buttonBGColor: "black",
    buttonHoverColor: "black",
    buttonHoverBGColor: "red",
    menuColor: "red",
    menuBGColor: "black",
    menuHoverColor: "black",
    menuHoverBGColor: "red",
    buttonBorder: "0.5vh solid red",
    buttonHoverBorder: "0.5vh solid black",
    menuBorder: "0.5vh solid red",
    menuHoverBorder: "0.5vh solid black",
    borderRadius: "17px",
    fontSize: "1.9vw",
    menuList : ["Hi", "Hello", "Wait"]
  }

  return (
    <StyleA props={props}/>
  );
}

export default DropDownMenu;