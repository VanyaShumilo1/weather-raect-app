import {legacy_createStore} from "redux";

export const SET_CURRENT_CITY = "SET_CURRENT_CITY"

export const defaultState = {
    currentCity: "London"
}

export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_CITY:
            return {...state, currentCity: action.payload}
        default:
            return state
    }
}

export const store = legacy_createStore(mainReducer)