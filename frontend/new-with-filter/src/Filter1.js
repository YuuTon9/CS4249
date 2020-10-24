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
                        name: 'gender',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value=""/>
                    <option value={'M'}>Male</option>
                    <option value={'F'}>Female</option>
                </Select>
            </FormControl>

        </div>
    )
}
