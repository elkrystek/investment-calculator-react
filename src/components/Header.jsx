import logo from '../assets/investment-calculator-logo.png'

export default function Header(props){
    return (    <header id='header'>
        <img src ={logo} />
<h1>{props.children}</h1>
</header>
    
    ); 
}