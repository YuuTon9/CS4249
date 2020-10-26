import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import CardList from "./CardList";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import { CgSmartphoneChip } from 'react-icons/cg';
import { GiLoveInjection } from 'react-icons/gi';
import { RiScissorsFill } from 'react-icons/ri';
import { IoIosHome } from 'react-icons/io';
import ShareIcon from "@material-ui/icons/Home";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    icon: {
        display: "flex",
        alignItems: "center",
        padding: 6,

    },
    a: {
        flex: 1,
    }
}));

export default function Filter1({dog_datas, userId, questionId, listLength}) {
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
                <option aria-label="None" value="0"/>
                <option value={'1'}>Male</option>
                <option value={'2'}>Female</option>
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
                <option aria-label="None" value="0"/>
                <option value={'1'}>Less than 4</option>
                <option value={'2'}>4-8</option>
                <option value={'3'}>More than 8</option>
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
                <option aria-label="None" value="0"/>
                <option value={'1'}>HDB-Approved</option>
                <option value={'2'}>Sterilized</option>
                <option value={'3'}>Vaccinated</option>
                <option value={'4'}>Micro-chipped</option>
            </Select>
        </FormControl>
        <Typography variant={"subtitle1"} align={"right"} display="inline" className={classes.a}>
            <div className={classes.icon}><GiLoveInjection fontSize={24} /> Vaccinated</div>
            <div className={classes.icon}><IoIosHome fontSize={24}/> HDB Suitable</div>
            <div className={classes.icon}><CgSmartphoneChip fontSize={24}/> Micro-Chipped</div>
            <div className={classes.icon}><RiScissorsFill fontSize={24}/> Sterilized</div>
        </Typography>
        <CardList dog_datas={dog_datas} userId={userId} questionId={questionId} listLength={listLength}
                  gender={state.gender} age={state.age} status={state.status}/>
        </div>
    )
}
