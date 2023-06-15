import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducer,
});
export type RootState = ReturnType<typeof reducer>;
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Provider store={store}>
        <div className="App">
          <HomePage></HomePage>
        </div>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
