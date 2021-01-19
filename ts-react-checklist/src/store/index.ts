import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import reducers from '../reducer'
import history from './history'

const middleware = [thunk, routerMiddleware(history)]
const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer,
})

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['draft'],
}

const persistedReducer: typeof rootReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    // combineReducers({
    //     ...reducers,
    //     router: routerReducer,
    // }),
    persistedReducer,
    process.env.NODE_ENV === 'development' ?
        composeWithDevTools(applyMiddleware(middleware)) : applyMiddleware(middleware),
)

const persistor = persistStore(store)

// export default store

export {
    store,
    persistor,
}
