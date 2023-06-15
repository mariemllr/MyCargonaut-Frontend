import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

function App() {
  const reducer = combineReducers({});

  const store = configureStore({
    reducer: reducer,
  });

  return (
    <Provider store={store}>
      <div className="App">
        <HomePage></HomePage>
      </div>
    </Provider>
  );
}

export default App;
