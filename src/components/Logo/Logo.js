import React, { Component } from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';

class Logo extends Component {

  render () {
    return (
      <div className='ma4 mt0'>
          <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa2"> 
            <img style={{paddingTop: '5px'}}alt='logo'src={face}></img> 
          </div>
          </Tilt>
      </div>
    );
  }

}

export default Logo; 