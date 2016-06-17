import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { insightsMonitor } from 'redux-appinsights'

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState,  applyMiddleware(
    insightsMonitor({
      globals: {
        env: 'qa'
      },
      exclude: ['meta']
    })
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
