import React, { Component } from 'react';
import './ToggleButton.css';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    const { isShown } = this.state;
    const buttonText = isShown ? 'Hide' : 'Show';
    const buttonClass = isShown ? 'btn-hide' : 'btn-show';

    return (
      <div className="toggle-section">
        <h2 className="section-title">Переключатель (Классовый компонент)</h2>
        
        <button 
          onClick={this.toggle} 
          className={`btn ${buttonClass}`}
        >
          {buttonText}
        </button>
        
        {isShown && (
          <div className="hidden-content">
            <h3>Секретный контент</h3>
            <p>Классовые компоненты отлично работают с локальным состоянием!</p>
          </div>
        )}
        
        <div className="component-info">
          <small>Тип компонента: {this.constructor.name}</small>
        </div>
      </div>
    );
  }
}

export default ToggleButton;