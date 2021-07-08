import { useSelector , useDispatch } from 'react-redux';
import './App.css';
import {bindActionCreators} from "redux"
import {State}   from "./stateApp/reducers/index"
import * as actionCreator from "./stateApp/action-creator/actionCreator"
function App() {
  
 const dispatch = useDispatch();

 const { bankruptMoney , withdrawMoney , depositMoney } = bindActionCreators(actionCreator , dispatch);
 const amount = useSelector((state : State ) => state.bank)
  return (
    <div className="App">
      <h1>{amount.account}</h1>  
      <h2>{amount.message}</h2>
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withdrawMoney(10)}>withdraw</button>
      <button onClick={() => bankruptMoney()}>bankdrap</button>
    </div>
  );
}

export default App;
