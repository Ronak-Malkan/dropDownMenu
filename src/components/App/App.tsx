import React from 'react';
import DropdownMenu from "../DropDownMenu/DropDownMenu";

function App() {
  const style = {
    backgroundColor: "#B4C3F5",
    width: "100vw",
    height: "100vh",
    paddingTop: "30px",
    paddingLeft: "60px"
  }
  return (
    <div style={style}>
      <DropdownMenu/>
    </div>
  );
}

export default App;
