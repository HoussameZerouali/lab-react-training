import '../styles/CreditCard.css'

function CreditCard(props) {
    if (props.type === 'Visa'){
        return <div className = "CreditCard-container"  style= {{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div className = "Logo-container">
                <img src="/img/visa.png" alt="" />
            </div>
            <div className = "CreditCard-infos" >
                <div>**** **** **** {props.number.substring(props.number.length - 4)}</div>
                <div>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</div>
                <div>{props.owner}</div>
            </div>
        </div>
    }else if(props.type === 'Master Card'){
        return <div className = "CreditCard-container" style= {{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
        <div className = "Logo-container">
            <img src="/img/master-card.svg" alt="" />
        </div>
        <div className = "CreditCard-infos"  >
            <div>**** **** **** {props.number.substring(props.number.length - 4)}</div>
            <div>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</div>
            <div>{props.owner}</div>
        </div>
    </div>
    }
}



export default CreditCard;