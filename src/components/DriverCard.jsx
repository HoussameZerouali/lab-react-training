import Rating from './Rating'
import '../styles/DriverCard.css'

function DriverCard(props) {
    return <div className = 'DriverCard-container'>
            <div className = 'Image-container'>
                <img src={props.img} alt="" />
            </div>
            <div className = 'Driver-infos'>
                <div> <b>{props.name}</b></div>
                <Rating>{props.rating}</Rating>
                <div>{props.car.model} - {props.car.licensePlate}</div>
            </div>
        </div>
}

export default DriverCard;