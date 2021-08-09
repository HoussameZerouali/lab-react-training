

function Rating(props) {
    if( props.children > 0 && props.children < 1.5){
        return <div>★☆☆☆☆</div>
    }else if( props.children >= 1.5 && props.children < 2.5){
        return <div>★★☆☆☆</div>
    }else if( props.children >= 2.5 && props.children < 3.5){
        return <div>★★★☆☆</div>
    }else if( props.children >= 3.5 && props.children < 4.5){
        return <div>★★★★☆</div>
    }else if( props.children >= 4.5 && props.children <= 5){
        return <div>★★★★★</div>
    }else{
        return <div>☆☆☆☆☆</div>
    }
}


export default Rating;