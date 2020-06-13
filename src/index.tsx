import * as React from "react";
import { render } from "react-dom";
import { AppContextProvider } from "./context/appContext";

import App from "./App";

const rootElement = document.getElementById("root");
render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    rootElement
);
