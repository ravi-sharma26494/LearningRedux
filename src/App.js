import {useSelector, useDispatch} from 'react-redux';

function App() {
  const counter = useSelector((state)=> state.counter);
  const dispatch  = useDispatch();
  const increment = () => {
    dispatch({
      type:'INC'
    });
 }
 const decrement = () => {
  dispatch({
    type:'DEC'
  })
 }
 const incbyvalue = () => {
  dispatch({
    type:"BY10",
    payload:10
  })
 }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incbyvalue}>Inc by 10</button>
    </div>
  );
}

export default App;
