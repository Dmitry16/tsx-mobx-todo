import { observer } from "mobx-react";
import * as React from 'react';

import { IStore } from './store';

interface ITodo {
    value: string,
    id: number,
    complete: boolean
    store: IProps
}

// interface IStore {
//     filter: string,
//     addTodo: (todo: {}) => void,
//     filterTodos: (todo: {}) => void,
// }

interface IProps {
    store: IStore
}

@observer
export default class Todo extends React.Component<IProps, { value: string }> {

    constructor(props: any) {
        super(props);
        // this.state = { value: '' }
    }

    public filterTodos = (e: any): void => {
        this.props.store.filter = e.target.value;
    }
    
    public addTodo = (e: any): void => {
        if (e.which === 13) {
            this.props.store.addTodo(e.target.value);
            e.target.value = '';
        }
    }

    public render() {

        const { filteredTodos, filter } = this.props.store;

        const TodoLis = (filteredTodos as any).map((todo: ITodo, ind: number) => <li key={ind}>{ todo.value }</li>)

        return <div>
            <h3>Todos</h3>
            <div>filter todos</div>
            <input className="filter" value={filter} onChange={this.filterTodos} />
            <div>add todo</div>
            <input className="addTodo" onKeyPress={this.addTodo} />
            <ul>
                { TodoLis }
            </ul>
        </div>
    }
}