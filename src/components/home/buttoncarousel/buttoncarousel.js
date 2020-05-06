import React, { Component } from 'react';
import RecipeCarousel from '../recipecarousel/recipecarousel';
import '../header/header.css';

class ButtonCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickStatus: false,
      buttonName: 'Random recipes',
    };
  }

  displayCarousel = () => {
    const clickStatus = !this.state.clickStatus;
    let buttonName;
    if (this.state.clickStatus === true) {
      buttonName = 'Random recipes';
    } else {
      buttonName = 'Close random recipes';
    }
    this.setState({ clickStatus, buttonName });
  }


  render() {
    const { clickStatus, buttonName } = this.state;
    return (
      <div className="button-carousel-container text-center">
        <button
          className="display-carousel-button"
          type="button"
          onClick={this.displayCarousel}
        >
          {buttonName}
        </button>
        { clickStatus && <RecipeCarousel /> }
      </div>
    );
  }
}


export default ButtonCarousel;