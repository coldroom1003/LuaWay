import React from "react";

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <button className="cBtn" onClick={onCreate}>
                <span>추가</span>
            </button>
        </div>
    );
};

export default Form;