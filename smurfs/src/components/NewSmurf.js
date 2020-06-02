import React, { useState } from 'react';

export default function NewSmurf(props) {

    const[addSmurf, setAddSmurf] = useState({
        name:"",
        age:"",
        height: ""
    });

    const handleChanges = e => {
        setAddSmurf({
            ...addSmurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.newSmurf(addSmurf);
        setAddSmurf({
            name: "",
            age: "",
            height: ""
        });
    };

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        <div>
            <input 
            type = "text"
            name= "name"
            value = {addSmurf.name}
            onChange = {handleChanges}
            placeholder = "Enter Smurf Name"
            />
            <input 
            type = "text"
            name= "age"
            value = {addSmurf.age}
            onChange = {handleChanges}
            placeholder = "Enter Smurf Age"
            />
               <input 
            type = "text"
            name= "height"
            value = {addSmurf.height}
            onChange = {handleChanges}
            placeholder = "Enter Smurf height"
            />
            <button className ="button" onClick={handleSubmit}>
                Add to Le Pays Maudit
            </button>

        </div>
    )




}    

