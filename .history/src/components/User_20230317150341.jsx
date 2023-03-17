export default function User (props) {
    console.log(props)
    return(
        <div>
            <h1>{props.user.firstName}</h1>
            <h4>{props.user.lastName}</h4>
        </div>
    )
}