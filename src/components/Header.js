import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title,onAdd ,showAdd}) {

    const onClick=()=>{
        console.log('Clickkkk')
    }
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
       
        <Button color={showAdd ? 'red':'green'}  text={showAdd ? 'Close':'Add'}  onClick={onAdd}/>
       
        </header>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracter",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
