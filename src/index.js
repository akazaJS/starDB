import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

const conteiner=document.querySelector('#root');
const root = ReactDOM.createRoot(conteiner);
root.render(<App/>)