import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

import { composeWithDevTools } from 'redux-devtools-extension';

// HOT MODULE REPLACEMENT

// EITHER A OR B

const enhancer =
  composeWithDevTools( // A
    compose(
      // DevTools.instrument(), // B
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)\b/
        )
      )
    ) // A
  );

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}