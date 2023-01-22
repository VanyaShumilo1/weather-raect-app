import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import MainContainer from "./components/MainContainer/MainContainer";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MainContainer>
            <AppRouter/>
        </MainContainer>
    </BrowserRouter>
);

