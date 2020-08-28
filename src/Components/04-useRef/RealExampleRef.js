import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './ref.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>useRef en Caso Real</h1>
            <hr/>
            
            {show && <MultipleCustomHooks />}

            <button 
                className="btn btn-success mt-5"
                onClick={()=>{
                    setShow(!show)
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
