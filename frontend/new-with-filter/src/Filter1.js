import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import CardList from "./CardList";
import MenuItem from '@material-ui/core/MenuItem';
import { CgSmartphoneChip } from 'react-icons/cg';
import { GiLoveInjection } from 'react-icons/gi';
import { RiScissorsFill } from 'react-icons/ri';
import { IoIosHome } from 'react-icons/io';
import Typography from '@material-ui/core/Typography';
import {sendCustomEvent} from "./Logging";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: "#008080",
        },
        '&:after': {
            borderColor: "#008080",
        }
    },
    icon: {
        display: "flex",
        alignItems: "center",
        padding: 6,
        float: "right",
        marginTop: 5,
        marginBottom: 10
    },
    a: {
        flex: 1,
    },
    components: {
        padding: 5,
        marginBottom: 5
    },
    iconMargin: {
        marginLeft: 3,
        marginRight: 3
    }
}));

export default function Filter1({dog_datas, userId, questionId, listLength, layoutId, startTime}) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gender: 0,
        age: 0,
        status: 0,
        size: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        logUsedFilter(name, event.target.value)
    };

    function logUsedFilter(filterType, info) {
        sendCustomEvent("FilterClicked", filterType, info)
    }

    function hasFilter() {
        if (layoutId == 2) {
            return <div className={classes.components}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender1"
                        value={state.gender}
                        onChange={handleChange}
                        label="Gender"
                        inputProps={{
                            name: 'gender'
                        }}
                    >
                        <MenuItem value={0}>
                            All
                        </MenuItem>
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="age">Age</InputLabel>
                    <Select
                        labelId="age-label"
                        id="age1"
                        value={state.age}
                        onChange={handleChange}
                        label="Age"
                        inputProps={{
                            name: 'age'
                        }}
                        className={classes.select}
                    >
                        <MenuItem value={0}>
                            All
                        </MenuItem>
                        <MenuItem value={1}>Less than 4</MenuItem>
                        <MenuItem value={2}>4-8</MenuItem>
                        <MenuItem value={3}>More than 8</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status-label"
                        id="status1"
                        value={state.status}
                        onChange={handleChange}
                        label="Status"
                        inputProps={{
                            name: 'status'
                        }}
                    >
                        <MenuItem value={0}>
                            All
                        </MenuItem>
                        <MenuItem value={1}>HDB-Approved</MenuItem>
                        <MenuItem value={2}>Sterilized</MenuItem>
                        <MenuItem value={3}>Vaccinated</MenuItem>
                        <MenuItem value={4}>Micro-chipped</MenuItem>
                    </Select>
                </FormControl>
            </div>
        }
        return <div className={classes.components}></div>
    }

    return (
        <div>
            {hasFilter()}
            <Divider/>
        <Typography variant={"subtitle1"} align={"right"}>
            <div className={classes.icon}><RiScissorsFill fontSize={24} className={classes.iconMargin}/> Sterilized</div>
            <div className={classes.icon}><CgSmartphoneChip fontSize={24} className={classes.iconMargin}/> Micro-Chipped</div>
            <div className={classes.icon}><IoIosHome fontSize={24} className={classes.iconMargin}/> HDB Suitable</div>
            <div className={classes.icon}><GiLoveInjection fontSize={24} className={classes.iconMargin}/> Vaccinated</div>
        </Typography>
        <CardList dog_datas={dog_datas} userId={userId} questionId={questionId} listLength={listLength}
                  gender={state.gender} age={state.age} status={state.status} startTime={startTime}/>
        </div>
    )
}
