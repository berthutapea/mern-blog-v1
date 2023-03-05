import React from 'react';
import './upload.scss';

const Upload = ({ label, img, ...rest }) => {
    return (
        <div className="upload">
            <p className="label">{label}</p>
            {img && <img className="preview" src={img} alt="preview" />}
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload;
