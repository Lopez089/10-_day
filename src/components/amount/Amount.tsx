import React, { useContext } from "react";
import "./Amount.css";
import { AppContext } from "../../context/appContext";

const Amount = () => {
    const { amount } = useContext(AppContext);
    return (
        <>
            <p className="copy-amount">Has Guardado:</p>
            <div className="amount">
                <div className="money">$</div>
                <span />
                <div className="quantity">{amount}</div>
            </div>
        </>
    );
};

export default Amount;
