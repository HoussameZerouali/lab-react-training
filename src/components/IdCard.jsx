import Card from "./Card";
import '../styles/IdCard.css'

function IdCard(props) {
    return (
        <Card>
            <div className ='IdCard-container'>
                <div className = 'IdCard-avatar-container'>
                    <img className = 'IdCard-avatar-img' src={props.picture} alt="" />
                </div>
                <div>
                    <div className = 'IdCard-firstName'><b>First Name : </b>{props.firstName}</div>
                    <div className = 'IdCard-lastName'><b> Last Name : </b>{props.lastName}</div>
                    <div className = 'IdCard-gender'><b>Gender : </b>{props.gender}</div>
                    <div className = 'IdCard-height'><b>Height : </b>{props.height}</div>
                    <div className = 'IdCard-birth'><b>BirthDate : </b>{(props.birth).toString()}</div>
                </div>
            </div>




        </Card>
    )
}

export default IdCard;