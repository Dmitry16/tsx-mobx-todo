
import { action, computed, observable } from 'mobx';

interface ITodo {
    value: string,
    id: number,
    complete: boolean
}
class Todo implements ITodo {
    @observable public value: string;
    @observable public id: number;
    @observable public complete: boolean;
    
    constructor(value: string = 'xxx') {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}
// interface IFilterTodos {
//     (filter: string, filteredTodos: ITodo[]): ITodo[];
// }
export interface IStore {
    todos: ITodo[],
    filter: string,
    filteredTodos(): ITodo[],
    addTodo(value: string): void
}

class Store implements IStore {
    @observable public todos: ITodo[] = [new Todo];
    @observable public filter = '';
    @computed get filteredTodos(): any {
        const filter = new RegExp(this.filter, 'i');
        const filteredTodos = this.todos.filter((todo: any) => filter.test(todo.value));
        console.log('filteredTodos', filteredTodos);
        return filteredTodos;
    }
    @action public addTodo(value: string) {
        this.todos.push(new Todo(value));
    }
}

const store = (window as any).store = new Store; 

export default store;

// autorun(() => {
//     console.log(store.filter);
//     console.log(store.todos[0]);
//     console.log('kuku!');
// });
