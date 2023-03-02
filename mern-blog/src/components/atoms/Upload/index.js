import React from 'react';
// import { LoginBg } from '../../../assets';
import './upload.scss';

const Upload = ({img, ...rest}) => {
    return (
        <div className="upload">
            {img && <img className="preview" src={img} alt="preview" />}
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload;
