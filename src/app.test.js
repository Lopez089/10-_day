import React from "react";
import App from "./App";

import { AppContextProvider, AppContext } from "./context/appContext";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const wrapper = mount(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    { context: AppContext }
);

describe("Component App", () => {
    it("render component app", () => {
        expect(wrapper).not.toBeNull();
    });
    it("Qantity current is 0, two click button increment, increment is quantity is 20$", () => {
        wrapper
            .find("button")
            .at(0)
            .simulate("click");

        wrapper
            .find("button")
            .at(0)
            .simulate("click");
        expect(wrapper.find(".quantity").text()).toEqual("20");
    });

    it("Quantity current is 10, one click button decrement, decrement is quantity is 10$ ", () => {
        wrapper
            .find("button")
            .at(1)
            .simulate("click");
        expect(wrapper.find(".quantity").text()).toEqual("10");
    });

    it("Quantity current is 10 three click button decrement, decrement is quintity is 0$", () => {
        wrapper
            .find("button")
            .at(1)
            .simulate("click");

        wrapper
            .find("button")
            .at(1)
            .simulate("click");
        wrapper
            .find("button")
            .at(1)
            .simulate("click");
        expect(wrapper.find(".quantity").text()).toEqual("0");
    });
});
