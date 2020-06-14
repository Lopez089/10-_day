import React, { createContext, useState } from "react";

interface Icontext {
    amount: number;
    onDeposit: (quantity: number) => void;
    onWithdraw: (quantity: number) => void;
}

const AppContext = createContext({} as Icontext);

const AppContextProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [amount, setAmount] = useState<number>(0);

    const onDeposit = (quantity: number) => {
        setAmount((prevState) => prevState + quantity);
    };

    const onWithdraw = (quantity: number) => {
        amount < 1
            ? setAmount((prevState) => prevState)
            : setAmount((prevState) => prevState - quantity);
    };

    const defaultContext = {
        amount,
        onDeposit,
        onWithdraw
    };
    return (
        <>
            <AppContext.Provider value={defaultContext}>
                {children}
            </AppContext.Provider>
        </>
    );
};

export { AppContext, AppContextProvider };
