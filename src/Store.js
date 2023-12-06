import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducers, productReducers } from "./reducers/productReducers";

const reducer = combineReducers({
    products:productReducers,
    productDetails:productDetailsReducers
});

let initialState = {};

const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;