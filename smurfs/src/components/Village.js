import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/context';
import SmurfCard from '../components/SmurfCard';

export default function Village(){

    const {smurfs} = useContext(SmurfContext);
    console.log("smurflog",smurfs);

    return(
        <div>
            {smurfs.map(smurf=> (
                <SmurfCard key={smurf.id} smurf ={smurf}/>
            ))}
        </div>
    )

}

