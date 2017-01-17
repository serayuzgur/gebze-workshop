import tr from "robe-react-ui/lib/assets/tr_TR.json";
console.log(tr);
import React from "react";
import { render } from "react-dom";
import RApplication from "robe-react-ui/lib/Application";
import { ShallowComponent, Application } from "robe-react-commons";
import { Grid } from "react-bootstrap";
import Todo from "./Todo";

const app = document.getElementById("app");


render(
    (
        <Grid>
            <RApplication language={tr}>
                <h1>Todo Application</h1>
                <Todo />
            </RApplication>
        </Grid>
    ),
    app
);

