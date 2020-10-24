import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import DogCard from "./Card";
import Grid from '@material-ui/core/Grid';

const CardList = ({dog_datas}) => {

    console.log(dog_datas)

    function createList() {

    }
    return (
        <div>
            {dog_datas.map((ddata) => {
                return <DogCard dog_data={ddata}/>
            })}
        </div>
    );
}

export default CardList;
