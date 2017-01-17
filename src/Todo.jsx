import React from "react";
import { ShallowComponent } from "robe-react-commons";
import { Well } from "react-bootstrap";
import TodoItem from "./TodoItem";
export default class Todo extends ShallowComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, value: "Süt Al" },
                { id: 2, value: "Yumurta Al" }
            ]
        }
    }
    render() {
        return (
            <Well>
                <ul>
                    {this.renderItems()}
                </ul>
            </Well>
        )
    }

    renderItems() {
        let items = [];
        for (let i = 0; i < this.state.items.length; i++) {
            items.push(<TodoItem item={this.state.items[i]} onItemChange={this.onItemChange} />);
        }
        return items;
    }

    onItemChange(newItem) {
        console.log(newItem);
        let state = this.state;
        for (let i = 0; i < state.items.length; i++) {
            let item = state.items[i];
            if (item.id === newItem.id) {
                item.value = newItem.value;
            }
        }
        this.setState(state);
    }

}
