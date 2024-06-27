import './App.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        tg.ready();
    }, []);



    return (
    <div className="App">
      work
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
