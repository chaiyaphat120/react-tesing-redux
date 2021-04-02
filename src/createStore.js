import { createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import RootReducer from "./reducers/index"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    RootReducer,
    composeEnhancer(applyMiddleware(thunk))
)
