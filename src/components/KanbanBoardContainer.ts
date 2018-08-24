import { Component, createElement } from "react";
import { KanbanBoard } from "./KanbanBoard";

export default class KanbanBoardContainer extends Component<{}, {}> {
    render() {
        return createElement(KanbanBoard);
    }
}
