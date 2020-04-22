import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This will detect faces'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input placeholder='input image url here' className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button 
            onClick={onButtonSubmit}
            className='w-30 grow f4 link ph3 pv2 dib white bg-green'
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm; 