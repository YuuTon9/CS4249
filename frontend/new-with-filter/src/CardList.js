import React from 'react';
import DogCard from "./Card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {filterDogsLongList, filterDogsMediumList, filterDogsSmallList} from "./DogData";

const CardList = ({dog_datas, userId, questionId, listLength, gender, age, status, startTime}) => {

    function getDogData() {
        console.log(dog_datas)
        if (listLength === "short") {
            return filterDogsSmallList(gender, age, status, dog_datas)
        } else if (listLength === "medium") {
            return filterDogsMediumList(gender, age, status, dog_datas)
        } else {
            return filterDogsLongList(gender, age, status, dog_datas)
        }
    }

    return (
        <div>
            <Grid container spacing={2} alignItems={"center"} alignContent={"center"}>
                {getDogData().map((ddata) => {
                    return (
                        <Grid item xs={'auto'}>
                            <DogCard dog_data={ddata} userId={userId} questionId={questionId} listLength={listLength} startTime={startTime}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default CardList;
