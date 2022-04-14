import '../assets/headerperso.css'
import LogoReact from '../assets/logoReact.png'

function headerperso() {
    return (
        <div className="headerperso">
            <p><span><b>[=]</b></span> Les 8 fantastiques </p>
            <img src={LogoReact} className="Logo-header" alt="Logo pour le projet React" />
        </div>
    
    )
}

export default headerperso