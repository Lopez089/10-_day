import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./button.css";

const Button = (props: { type: string }) => {
    const { type } = props;
    const { onDeposit, onWithdraw } = useContext(AppContext);
    return (
        <button
            className={
                type === "Deposit" ? "button-primary" : "button-secondary"
            }
            onClick={
                type === "Deposit" ? () => onDeposit(10) : () => onWithdraw(10)
            }
        >
            {type}
        </button>
    );
};

export default Button;
