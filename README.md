# React-Redux-Saga
example app with redux saga

# Install
  * npm install && npm run dev
  * yarn install && yarn run dev

# Saga
 * yield takeLatest(@param type, @param method), when we call our function where have type = @param type then @param method will render
 * @param type is our trigger to run @param method
 * yield call is saga effect function to wait response from our api function or this is javascript Promise
 * example || yield call(<getBooks,search>),this method do like getBooks(search) ||
 * yield put will trigger action where action have type = @param type
 * @param {*} action <= return type and data, from ./action example => fetchApi(data) return {type,data}
 * yield all (@param array and fork(@param ourSagaMethod))
 
# Reducers
 * Reducers will triggers when function that return type equal case type
 * Reducers return props[name] / this.props[name]
 
# Actions
 * Define our action where return type

# Types
 * Define our type for our action

# Store
 * Wrap our React.Element with Provider
 * create our store(@param reducers, applyMiddleware(@param saga))
 * saga.run(@param sagaConfiguration)
 
# MapStateProps
  * @param state, where state from actions
# MapDispatchToProps
  * @param dispatch, where dispatch as function from connect => module react-redux
  * dispatch (@param our action)
