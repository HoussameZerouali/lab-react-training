import '../styles/Greetings.css'

function Greetings(props) {
    if (props.lang === 'en'){
        return <div className = 'Greetings-card'>Hello {props.children}</div>
    }else if (props.lang === 'fr'){
        return <div className = 'Greetings-card'>Bonjour {props.children}</div>
    }else if (props.lang === 'de') {
        return <div className = 'Greetings-card'>Hallo {props.children}</div>
    }else if (props.lang === 'es') {
        return <div className = 'Greetings-card'> Hola {props.children}</div>
    }
}

export default Greetings;