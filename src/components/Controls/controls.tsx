import React from "react";
import "./controls.css";

const Controls = (props: { children: React.ReactNode }) => {
    return (
        <section>
            <hr />
            {props.children}
        </section>
    );
};

export default Controls;
