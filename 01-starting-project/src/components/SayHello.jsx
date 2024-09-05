import { CORE_CONCEPTS } from "../data.js"

export default function SayHello(props){
    return <h1>Hello world from React JS {props.hello} <br /> <img src={CORE_CONCEPTS[0].image} alt="" />
   
    </h1>
  }