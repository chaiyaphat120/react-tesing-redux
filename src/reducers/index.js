import { combineReducers } from "redux"
import postReducer from "./posts/reducer"
export default combineReducers({
    postState:postReducer
})