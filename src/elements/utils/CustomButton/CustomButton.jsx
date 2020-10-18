import React from "react";
import s from "./CustomButton.module.css";
class CustomButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={s.customButton}>
        {this.props.value}
      </button>
    );
  }
}

export default CustomButton;
