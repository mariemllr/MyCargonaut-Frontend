import { Provider } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/reducer/user';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import reduxLogger from 'redux-logger';
import RootComponent from './RootComponent';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({ serializableCheck: false });
    middleware.push(reduxLogger);
    return middleware;
  },
});

export type RootState = ReturnType<typeof reducer>;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <div className='App'>
            <RootComponent />
          </div>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
