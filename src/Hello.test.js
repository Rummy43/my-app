import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from "./Hello";

let container = null;

beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{

    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render with or without name property", ()=>{
    act(()=>{
        render(<Hello/>,container);
    })

    expect(container.textContent).toBe("Hello, Stranger!");

    act(()=>{
        render(<Hello name="Rummy"/>,container);
    })

    expect(container.textContent).toBe("Hello, Rummy!");

})