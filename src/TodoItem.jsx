import React from "react";
import TextInput from "robe-react-ui/lib/inputs/TextInput";
import { ShallowComponent } from "robe-react-commons";
export default class TodoItem extends ShallowComponent {

    static propTypes = {
        item: React.PropTypes.object
    }
    static defaultProps = {
        item: {}
    }

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            value: this.props.item.value
        }
    }
    render() {
        let itemValue;

        if (this.state.edit) {
            itemValue = (<TextInput
                value={this.state.value}
                onKeyPress={this.onKeyPress}
                onChange={this.onChange} />);
        } else {
            itemValue = <span>{this.props.item.value}</span>
        }
        return (
            <li onClick={this.onClick}>
                <span>ID: {this.props.item.id} {itemValue}</span>
            </li>
        )
    }

    onClick() {
        this.setState({ edit: true });
    }
    onKeyPress(e) {
        if (e.key == "Enter") {
            this.setState({ edit: false });
            this.props.onItemChange({
                id: this.props.item.id,
                value: this.state.value
            });
        }
    }

    onChange(e) {
        let value = e.target.value;
        this.setState({ value });
    }

}
