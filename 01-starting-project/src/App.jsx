import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import SayHello from "./components/SayHello";
import TabButton from "./components/TabButton";



function App() {
  return (
    <div>
     <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <SayHello 
        hello ="Hello from component"
        />

        <section id="examples">
        <h1>Examples</h1>
        <menu>
          <TabButton>Components</TabButton>
        </menu>
        </section>

      </main>
    </div>
    
  );
}


export default App;
