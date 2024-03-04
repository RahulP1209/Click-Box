//import logo from './logo.svg';
import boxes from "./components/boxes"
import Box from "./components/box"
import React from "react"

function App() {

  const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    

    return (
      <main>
          {squareElements}
      </main>
  );
}

export default App;
