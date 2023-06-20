import { Provider } from 'react-redux';
import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/reducer/user';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

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
        <div className='App'>
          <ProfilePage></ProfilePage>
        </div>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
