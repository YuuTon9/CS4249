import React from 'react';
import DogCard from "./Card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const CardList = ({dog_datas}) => {

    console.log(dog_datas)
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {dog_datas.map((ddata) => {
                    return (
                            <Grid item xs={3}>
                                <DogCard dog_data={ddata}/>
                            </Grid>
                        )
                })}
            </Grid>
        </div>
    );
}

export default CardList;
