export const reducer = (state, action) => {
    console.log("esto es state:");
    console.log(state);
    console.log("esto es action:");
    console.log(action);
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

export const initialState = {
    username: "",
    password: "",
    error: "",
    isLoading: false
}