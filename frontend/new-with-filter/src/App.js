import React from 'react';
import './App.css';
import Filter1 from "./Filter1";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {filterDogsLongList, filterDogsMediumList, filterDogsSmallList, randomiseDogs, Dog_Small_List, Dog_Medium_List, Dog_Long_List} from "./DogData";
import {MuiThemeProvider} from "@material-ui/core";
import {THEME} from "./Colours";
import Typography from "@material-ui/core/Typography";
import {sendCustomEvent} from "./Logging";

function App() {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: '70%',
            // maxWidth: '70% !important',
            margin: '0 auto',
            padding: '0 0.5rem'
        },
        button: {
            padding: 30,
            margin: '5 auto',
            minWidth: "100px", minHeight: "40px",
            fontSize: "36px"
        },
        padding: {
            padding: 30
        }
    }));

    function chooseListSize() {
        if (values.listLength === "short") {
            return filterDogsSmallList(0,0,0, Dog_Small_List)
        } else if (values.listLength === "medium") {
            return filterDogsMediumList(0,0,0, Dog_Medium_List)
        } else {
            return filterDogsLongList(0,0,0, Dog_Long_List)
        }
    }

    const [values, setValues] = React.useState({
        userId: getQueryVariable('userId'),
        questionId: getQueryVariable('questionId'),
        listLength: getQueryVariable('listLength'),
        layoutId: getQueryVariable('layoutId'),
        dog_datas: [],
        startTime: 0,
        start: false
    })

    const classes = useStyles();
    const layoutMapping = {
        1: "Modal without filter",
        2: "Modal with filter"
    }
    const questionIdMapping = {
        1: "Male, Hdb-approved, < 4 years old",
        2: "Male, Hdb-approved, 4-8 years old",
        3: "Male, Hdb-approved, >8 years old"
    }
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

    function startExperiment() {
        sendCustomEvent("StartButtonClicked", "StartButtonClicked", {"layoutId": values.layoutId, "layout": layoutMapping[values.layoutId], "listLength": values.listLength, "questionId": values.questionId, "question": questionIdMapping[values.questionId] } )
        setValues({ ...values, dog_datas: randomiseDogs(chooseListSize(), values.questionId), start: true});
    }

    function isStarted() {
        if (values.start) {
            return <Grid container spacing={3}>
                <Grid item xs={12}><h2>Adopt a Pet</h2></Grid>
                <Grid item xs={12}>
                    <Filter1 dog_datas={values.dog_datas} userId={values.userId} questionId={values.questionId} listLength={values.listLength} layoutId={values.layoutId} startTime={values.startTime}/>
                </Grid>
            </Grid>
        }
        return <div>
            <Typography variant={"h5"} className={classes.padding}>Click on the start button when you're ready.</Typography>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => startExperiment()} id={"START_BUTTON"}>
                Start!
            </Button>
        </div>
    }
    return (
    <div className={classes.container}>
        <MuiThemeProvider theme={THEME}>
            {isStarted()}


        </MuiThemeProvider>
    </div>
  );
}

export default App;
