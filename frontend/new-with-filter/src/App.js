import React, { useEffect } from 'react';

import './App.css';
import CardList from "./CardList";
import axios from "axios";
import Filter from "./Filter";
import Filter1 from "./Filter1";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

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
        dog_datas: []
    })
    const classes = useStyles();

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/get_dogs?limit=50`)
            .then((res) => {
                const data = res.data;
                console.log(data)
                setValues({...values, dog_datas: data.dog_data})
            });
    }, [])

    return (
    <div className={classes.container}>
    <Grid container spacing={3}>
        <Grid item xs={12}><h2>Adopt a Pet</h2></Grid>
        <Grid item xs={12}>
            <h3>Filters:</h3>
            <Filter/>
            <Filter1/>
        </Grid>
        <CardList dog_datas={values.dog_datas}/>
    </Grid>

    </div>
  );
}

export default App;
