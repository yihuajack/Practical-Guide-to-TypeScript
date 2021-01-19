// Router.tsx
// import { routerMiddleware, routerReducer } from 'react-router-redux'
// import { createBrowserHistory } from 'history'
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import Edit from './Edit'
import { persistor, store } from './store'
import history from './store/history'

// const history = createBrowserHistory()

export default () => {
    // <Router history={history}>
    // </Router>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <>
                    <Route exact path="/" component={App} />
                    <Route path="/edit" component={Edit} />
                    <Route path="/edit/:id" component={Edit} />
                </>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
}