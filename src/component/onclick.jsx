
import React from 'react';
import {Link} from 'react-router-dom';  

class Button extends React.Component {
  handleClick = () => {
    // Generate random number
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random Number: ${randomNumber}`);
  };

  render() {
    return (
        
      <div>
        <Link to={'/'} >  <button onClick={this.handleClick}>Submit</button></Link>
        <h1><strong>List Product</strong></h1>
      </div>
    );
  }
}

export default Button;
