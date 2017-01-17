import React from "react";
import { ShallowComponent, Store, RemoteEndPoint } from "robe-react-commons";
import { Well } from "react-bootstrap";
import TodoItem from "./TodoItem";
export default class Todo extends ShallowComponent {

    store;

    constructor(props) {
        super(props);

        this.store = new Store({
            endPoint: new RemoteEndPoint({
                url: "http://127.0.0.1:3000/todo",
                idField: "id"
            }),
            idField: "id",
            autoLoad: true
        });

        this.state = {
            items: []
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

    componentDidMount() {
        this.store.read((data) => {
            this.setState({
                items: data.data
            });
        });
    }
}
