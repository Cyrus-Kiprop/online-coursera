// this is the creation of the store --this shit is so heavy
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'; // no need to specify the index.js file course coz it is automaticallu loaded by the engine
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;  //add support for redux tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) // this crazy middleware will actually warns whenever we try to mutate our state(saftey net)
  );
}
