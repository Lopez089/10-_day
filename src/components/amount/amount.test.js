import React from "react";
import Amount from "./Amount";
import { AppContextProvider, AppContext } from "../../context/appContext";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

const wrapper = mount(
    <AppContextProvider>
        <Amount />
    </AppContextProvider>,
    { context: AppContext }
);

describe("compontent amount", () => {
    it("renders", () => {
        expect(wrapper).not.toBeNull();
    });

    it("show money symbol", () => {
        expect(wrapper.find(".money").text()).toEqual("$");
    });
});
