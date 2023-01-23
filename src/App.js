import React from "react";
import {BrowserRouter} from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import AppRouter from "./components/AppRouter";
import {Provider} from "react-redux";
import {store} from './store/index'

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <MainContainer>
                    <AppRouter/>
                </MainContainer>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
