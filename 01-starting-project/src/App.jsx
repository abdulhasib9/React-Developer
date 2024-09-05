import { CORE_CONCEPTS } from "./data";


function Header(){
  return (
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

function SayHello(props){
  return <h1>Hello world from React JS {props.hello} <br /> <img src={CORE_CONCEPTS[0].image} alt="" /></h1>
}

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
