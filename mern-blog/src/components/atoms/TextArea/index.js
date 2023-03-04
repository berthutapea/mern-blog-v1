import React from 'react';
import './textArea.scss';

const TextArea = ({label, ...rest }) => {
    return (
        <div className="text-area-wrapper">
            <p className="label">{label}</p>
            <textarea className="text-area" {...rest}>
            </textarea>
        </div>
    )
}

export default TextArea;

{/* <div className="input-wrapper">
    <p className="label">{label}</p>
    <input className="input" {...rest} />
</div> */}