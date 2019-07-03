import { Record } from "immutable";
import { handleActions, createAction, Action } from "redux-actions";

const SET_INPUT = "inputs/SET_INPUT";

type CreatePayload = string;

const InputRecord = Record({
  value: ""
});
export class InputState extends InputRecord {}
export const actionCreators = {
  setInput: createAction<CreatePayload>(SET_INPUT)
};
const initialState = new InputState();
export default handleActions(
  {
    //TODO
    [SET_INPUT]: (state: InputState, action: Action<CreatePayload>) => {
      return state.set("value", action.payload);
    }
  },
  initialState
);
