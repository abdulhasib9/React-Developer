export default function TabButton(props){

    function clickHandle(){
        console.log("Hello World!")
    }

    return <li><button onClick ={clickHandle}>{props.children}</button></li>
}