import { useState } from 'react'
import './index.css';
import Marvel from './Components/Marvel';
import { Routes, Route} from 'react-router-dom';
import SingleMarvel from './Components/SingleMarvel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Marvel />} />
      <Route path="/:id" element={<SingleMarvel />} />
    </Routes>
    </>
  );
}

export default App;
