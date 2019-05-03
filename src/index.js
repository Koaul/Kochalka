import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store/store'

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )

serviceWorker.unregister()