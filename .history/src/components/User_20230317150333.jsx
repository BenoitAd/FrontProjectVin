export default function User (props) {
    console.log(props)
    return(
        <div>
            <h3>{props.user.firstName}</h3>
            <h4>{props.user.lastName}</h4>
        </div>
    )
}