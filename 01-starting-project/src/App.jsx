import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import SayHello from "./components/SayHello";




function App() {
  return (
    <div>
     <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <SayHello 
        hello ="Hello from component"
        />
      </main>
    </div>
  );
}

export default App;
