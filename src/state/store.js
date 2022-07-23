import { createStore } from "redux";
import reducer from "./reducer/accountReducer";
import reducers from "./reducer";

export const store = createStore(
    reducers,
    {}
)