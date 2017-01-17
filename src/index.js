import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import Todo from "./Todo";

const app = document.getElementById("app");


render(
    (<RApplication language={tr}>
        <h1>TODO Application</h1>
        <Todo />
    </RApplication>),
    app
);

