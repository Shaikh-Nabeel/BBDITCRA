import watchlistReducer from '../reducers/Reducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    idState: watchlistReducer
})

const store = createStore(rootReducer);

export default store;
