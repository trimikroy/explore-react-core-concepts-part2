import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11)
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemoved = () => {
        setTeam( team - 1);
    }

    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players : {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemoved}>Removed</button>

        </div>
    )
}