import React, { useState } from 'react';
import squareBG from '/square_bg.jpg';


const Square = ({ onSquareClick, value }) => {

    // const [value, setValue] = useState(null);
    // function handleClicked(){
    //     setValue('X');
    // }
    return (
        <>

            <div style={{ backgroundImage: `url(${squareBG})`, backgroundSize: 'cover', backgroundPosition: 'cover' }}><button onClick={onSquareClick} className="flex justify-center z-5 overflow-hidden items-center m-0 p-10 border-[#361500] border-2 text-[#FFF2D7] shadow-slate-300 text-4xl font-bold w-[32px] h-[32px]"><span className=''>{value}</span></button></div>
        </>
    );
}

export default Square;