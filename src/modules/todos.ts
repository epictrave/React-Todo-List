import { List, Record } from "immutable";
import { createAction, handleActions, Action } from "redux-actions";

const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

type InsertPayload = string;
type TogglePayload = {
  id: number;
};
type RemovePayload = {
  id: number;
};

type Payload = InsertPayload & TogglePayload & RemovePayload;
export const actionCreators = {
  insert: createAction<InsertPayload>(INSERT),
  toggle: createAction<TogglePayload>(TOGGLE),
  remove: createAction<RemovePayload>(REMOVE)
};

interface TodoItemDataParams {
  id?: number;
  text?: string;
  done?: boolean;
}

const TodoItemRecord = Record({
  id: 0,
  text: "",
  done: false
});
export class TodoItemData extends TodoItemRecord {
  static autoId = 0;
  constructor(params?: TodoItemDataParams) {
    const id = TodoItemData.autoId;
    if (params) {
      super({
        ...params,
        id
      });
    } else {
      super({ id });
    }
    TodoItemData.autoId = id + 1;
  }
}

const TodosStateRecord = Record({
  todoItems: List(),
  input: ""
});

export class TodosState extends TodosStateRecord {}
const initialState = new TodosState();
export default handleActions<TodosState, Payload>(
  {
    [INSERT]: (state: TodosState, action: Action<InsertPayload>) => {
      const newTodoItem = new TodoItemData({ text: action.payload });
      return state.update("todoItems", todoItems =>
        todoItems.push(newTodoItem)
      );
    },
    [TOGGLE]: (state: TodosState, action: Action<TogglePayload>) => {
      const { id } = action.payload;
      return state.updateIn(
        ["todoItems", id, "done"],
        (done: boolean) => !done
      );
    },
    [REMOVE]: (state: TodosState, action: Action<RemovePayload>) => {
      const { id } = action.payload;
      return state.update("todoItems", todoItems => todoItems.delete(id));
    }
  },
  initialState
);
