import { useSelector , useDispatch } from 'react-redux';
import './App.css';
import  reducers from "./state/reducer/index";
import {bindActionCreators } from "redux";
import * as actionCreators from "./state/action-acount"

function App() {
  const account = useSelector((state : any) =>  state.account);
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators , dispatch)
  
  console.log(account)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick = {() => AC.dispositMoney(2)}>Add money</button>
      <button>withdraw</button>
    </div>
  );
}

export default App;
