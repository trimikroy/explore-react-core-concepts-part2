import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Mothers from './Mothers';

function App() {
  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Button Clicked 2')
  }
  const addToFive =(num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concepts 2 </h2>
      <Mothers></Mothers>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() =>{alert('third clicked')}}>third</button>

      <button onClick={function handleClick3(){
        alert('clicked third-3.0')
      }}>third-3.0</button>


    {/* vejailla handler */}
      <button onClick={() => addToFive(3)}>fourth</button>

    </>
  )
}

export default App
