import React, { useEffect } from 'react';

import './App.css';
import CardList from "./CardList";
import axios from "axios";
import Filter from "./Filter";
import Filter1 from "./Filter1";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {filterDogsLongList, filterDogsMediumList, filterDogsSmallList} from "./DogData";

function App() {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: '70%',
            // maxWidth: '70% !important',
            margin: '0 auto',
            padding: '0 0.5rem'
        }
    }));

    const [values, setValues] = React.useState({
        dog_datas: filterDogsSmallList(1,3,1),
        userId: getQueryVariable('userId'),
        questionId: getQueryVariable('questionId'),
        listLength: getQueryVariable('listLength'),
        layoutId: getQueryVariable('layoutId'),
        startTime: null
    })
    const classes = useStyles();
    //
    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:5000/api/get_dogs?limit=50`)
    //         .then((res) => {
    //             const data = res.data;
    //             console.log(data)
    //             setValues({...values, dog_datas: data.dog_data})
    //         });
    // }, [])

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) === variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }
    console.log('User Id is %s', values.userId)
    console.log('Question Id is %s', values.questionId)
    console.log('List length is %s', values.listLength)
    console.log('List length is %s', values.layoutId)
    console.log(values.dog_datas.length)
    function startExperiment() {
        var date = new Date();
        var timestamp = date.getTime();
        console.log("Started experiment at %s", timestamp)
    }
    return (
    <div className={classes.container}>
        <Button size="large" variant="contained" color="primary" onClick={startExperiment}>
            Start!
        </Button>
        <Grid container spacing={3}>
            <Grid item xs={12}><h2>Adopt a Pet</h2></Grid>
            <Grid item xs={12}>
                <h3>Filters:</h3>
                {/*<Filter/>*/}
                <Filter1/>
            </Grid>
            <CardList dog_datas={values.dog_datas} userId={values.userId} questionId={values.questionId}/>
        </Grid>
    </div>
  );
}

export default App;
