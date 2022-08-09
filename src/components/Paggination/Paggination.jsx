import React, {useState} from 'react';
import s from "./Paggination.module.css";

const Paggination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            { portionNumber > 1 &&
            <button className={s.prevBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {
                pages.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => <button onClick={(e) => {
                    onPageChanged(p)
                }} className={currentPage === p ? `${s.pagBtn} + ${s.pagBtnActive}` : s.pagBtn}
                                       key={p}>{p}</button>)
            }
            { portionCount > portionNumber &&
            <button className={s.nextBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </>
    );
};

export default Paggination;