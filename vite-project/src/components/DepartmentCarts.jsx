import React from "react";

function DepartmentCarts(props) {
  return (
    <div className={props.class}>
      <img className={props.imgClass} src={props.url} alt="photo" />
      <div>
        <h3 className={props.textClass}>
          <br />
          {props.text}
          <br />
          {props.textNext}
        </h3>
      </div>
    </div>
  );
}

export default DepartmentCarts;
