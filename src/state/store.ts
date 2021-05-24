//Import for state persistance 
import {combineReducers, createStore} from 'redux'
//Import for storing state to localhost
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
//Reducers
import expenseReducer from './expensesDucks'
import userReducer from './userDucks'

const rootReducer = combineReducers({
  expense: expenseReducer,
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = createStore(persistedReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
export const persistor = persistStore(store)

export default {store, persistor} 

export type RootState = ReturnType<typeof store.getState>