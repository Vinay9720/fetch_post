import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/rootreducer";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsM4OQjy5KHxxmbAD3-yIh06CqhTGKvo4",
  authDomain: "fir-react-wines-project.firebaseapp.com",
  projectId: "fir-react-wines-project",
  storageBucket: "fir-react-wines-project.appspot.com",
  messagingSenderId: "509221336190",
  appId: "1:509221336190:web:999d3a9de009ffd7bf542f",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
