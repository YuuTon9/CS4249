import React from 'react';
import DogCard from "./Card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {filterDogsLongList, filterDogsMediumList, filterDogsSmallList} from "./DogData";

const CardList = ({dog_datas, userId, questionId, listLength, gender, age, status, startTime}) => {

    const [values, setValues] = React.useState({
        userId: userId,
        questionId: questionId,
        listLength: listLength,
        gender: gender,
        age: age,
        status: status,
        dog_datas: dog_datas,
        startTime: null
    })


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    function getDogData() {
        if (listLength === "short") {
            return filterDogsSmallList(gender, age, status)
        } else if (listLength === "medium") {
            return filterDogsMediumList(gender, age, status)
        } else {
            return filterDogsLongList(gender, age, status)
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
