import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import CardList from "./CardList";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Filter1() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        gender: '',
        age: '',
        status: '',
        size: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select
                native
                value={state.gender}
                onChange={handleChange}
                label="gender"
                inputProps={{
                    name: 'gender'
                }}
            >
                <option aria-label="None" value=""/>
                <option value={'M'}>Male</option>
                <option value={'F'}>Female</option>
            </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Age</InputLabel>
            <Select
                native
                value={state.age}
                onChange={handleChange}
                label="age"
                inputProps={{
                    name: 'age'
                }}
            >
                <option aria-label="None" value=""/>
                <option value={'<4'}>Less than 4</option>
                <option value={'4-8'}>4-8</option>
                <option value={'>8'}>More than 8</option>
            </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Status</InputLabel>
            <Select
                native
                value={state.status}
                onChange={handleChange}
                label="status"
                inputProps={{
                    name: 'status'
                }}
            >
                <option aria-label="None" value=""/>
                <option value={'HDBApproved'}>HDB-Approved</option>
                <option value={'Sterilized'}>Sterilized</option>
                <option value={'Vaccinated'}>Vaccinated</option>
                <option value={'Microchipped'}>Micro-chipped</option>
            </Select>
        </FormControl>
        </div>
    )
}
