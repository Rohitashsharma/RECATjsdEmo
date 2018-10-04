import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    // <img src="Funny-baby-boy-specs-wear-image.jpg" alt="boy pic " />
    <img className="center" src={require('./Funny-baby-boy-specs-wear-image.jpg')} />,
    document.getElementById('root')
  );