import React, { useState } from 'react';


const Square = ({onSquareClick}) => {

    // const [value, setValue] = useState(null);
    // function handleClicked(){
    //     setValue('X');
    // }
    return(
        <>
            <button onClick={onSquareClick} className="flex justify-center items-center m-0 p-10 border-black border-2 text-4xl font-bold w-[32px] h-[32px]">{value}</button>
        </>
    );
}

export default Square;