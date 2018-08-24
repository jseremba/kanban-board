import { Component, createElement } from "react";
import { KanbanBoard } from "./components/KanbanBoard";

// tslint:disable-next-line class-name
export class preview extends Component<{}, {}> {
    render() {
        return createElement(KanbanBoard);
    }
}
