import logo from '../images/react.png'

export default function Header (){
    return (
        <div className="py-2 pl-2" style={{borderBottom:"1px solid #777"}}>
            <img alt="react-logo" src={logo} style={{ height: "35px", verticalAlign: "top"}}></img>
            <b className="h2 pt-4 text-white">React Course - CountOpedia</b>
        </div>
    )
}