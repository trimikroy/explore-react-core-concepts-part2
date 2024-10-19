export default function Mother({mother}){
    const {name, email} = mother;
    return(
        <div className="box">
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
        </div>
    )
}