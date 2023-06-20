import { Provider } from 'react-redux';
import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import userReducer from '../src/reducer/user';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import reduxLogger from 'redux-logger';

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({ serializableCheck: false });
    if (
      process.env.REACT_APP_ENABLE_REDUX_LOGGING === 'true' &&
      process.env.NODE_ENV === 'development'
    ) {
      middleware.push(reduxLogger);
    }
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
            <ProfilePage></ProfilePage>
          </div>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
