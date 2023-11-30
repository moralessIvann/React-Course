import logo from '../images/logo.png'

export default function Header (){
    return (
        <div className="py2 pl-2" style={{borderBottom:"1px solid #777"}}>
            <img src={logo}></img>
            <b className="h2 pt-4 text-white">React Course - CountOpedia</b>
        </div>
    )
}