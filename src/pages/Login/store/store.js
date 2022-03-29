import { createStore } from "redux";

const initialState = {
    username: "",
    password: "",
    error: "",
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "inputFields": {
            return {
                ...state,
                [action.inputName]: action.payload, // [name]: value
            };
        }
        case "login": {
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        }
        case "error": {
            return {
                ...state,
                error: "Incorrect username or password...",
                isLoading: false,
                username: "",
                password: ""
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;