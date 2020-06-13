import React from "react";
import Amount from "./components/amount/Amount";
import Controls from "./components/Controls/controls";
import Button from "./components/Button/button";

import "./app.css";

export default function App() {
    return (
        <section className="card">
            <div className="row">
                <Amount />
            </div>
            <Controls>
                <Button type="Deposit" />
                <Button type="Withdraw" />
            </Controls>
        </section>
    );
}
