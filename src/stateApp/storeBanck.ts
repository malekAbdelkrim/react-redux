import {createStore , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"

  const storeBanck = createStore(reducers , {} , applyMiddleware(thunk));
  export default storeBanck