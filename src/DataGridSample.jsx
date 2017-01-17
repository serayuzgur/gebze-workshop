import React from "react";
import { ShallowComponent, Store, LocalEndPoint } from "robe-react-commons";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
export default class DataGridSample extends ShallowComponent {

    static idField = "id";

    constructor(props: Object) {
        super(props);

        let store1 = new Store({
            endPoint: new LocalEndPoint({
                data: [{ id: 1, name: "John", surname: "Doe" }, { name: "Jane", surname: "Roe", id: 2 }],
                idField: DataGridSample.idField
            }),
            idField: DataGridSample.idField,
            autoLoad: true
        });

        this.state = {
            fields: [
                { name: "id", visible: false },
                { name: "name", type: "string" },
                { name: "surname", type: "string" }
            ],
            store1: store1,
        }
    }


    render(): Object {
        return (
            <DataGrid
                fields={this.state.fields}
                store={this.state.store1}
                ref="table1"
                toolbar={[{ name: "create", text: "Add" }, { name: "edit", text: "Edit" }, { name: "delete", text: "Delete" }]}
                exportButton={true}
                editable={true}
                />);

    }
}