import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/context';
import SmurfCard from '../components/SmurfCard';

const Village = () => {

    const smurfs = useContext(SmurfContext);
    console.log("smurflog",smurfs);

    return(
        <div>
            {smurfs.map(smurf => (
                <SmurfCard 
                    key = {smurf.id}
                    smurf = {smurf}
                />
            ))};
        </div>
    )

}


export default Village
