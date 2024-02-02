import React, { useState } from 'react';
import './t_t_t.css';

function Tic_Tac_Toe(){

    const [getval,setval] = useState('');
    const [inputVal,setInputVal] = useState([]);
    

    const addval=(index)=>{
        setInputVal(getval(index));
        
    }

    return(
        <>
            <center className="tic">
                {
                    inputVal.map((ele,index)=>{
                        <button key={index} onClick={()=>addval(index)}></button>
                    })
                }
            </center>
        </>
    )
}

export default Tic_Tac_Toe;