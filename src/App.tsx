import { Provider } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/reducer/user";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme";
import reduxLogger from "redux-logger";
import RootComponent from "./RootComponent";

export const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({ serializableCheck: false });
    middleware.push(reduxLogger);
    return middleware;
  },
});

export type RootState = ReturnType<typeof rootReducer>;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <div className="App">
            <RootComponent />
          </div>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
