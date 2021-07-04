import {createStore} from "redux";
import reducers from "../state/reducer";

const storeAccount = createStore(reducers , {})
export default storeAccount;