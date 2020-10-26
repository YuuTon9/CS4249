import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Home';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { CgSmartphoneChip } from 'react-icons/cg';
import { GiLoveInjection } from 'react-icons/gi';
import { RiScissorsFill } from 'react-icons/ri';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        minWidth: 250,
        minHeight: 320
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    media: {
        height: 0,
        paddingTop: '66.25%', // 16:9
        width: 250
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial'
    },
    overflowStyle: {
        textOverflow: 'ellipsis',
        width: 250,
        overflow: 'hidden'

    },
    modalCard: {
        margin: 0,
        padding: theme.spacing(2),
        width: 1000,
        height:700,
        display: 'flex'
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    bolded: {
        fontWeight: 900
    },
    root1: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));

const styles = (theme) => ({
    root1: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root1} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const RequirementsMapping = {
    1: "Dog selected: Age: <4, Gender: M, HDB approved: 1"
}

export default function DogCard({dog_data, userId, questionId, listLength}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function get_details() {
        const len =  dog_data.details.length;
        if (len > 50) {
            return dog_data.details.substring(0, 47) + "..."
        }
        return dog_data.details
    }

    function endExperiment() {
        var date = new Date();
        var timestamp = date.getTime();
        console.log("Ended experiment at %s", timestamp)
        console.log("Dog selected: Age: %s, Gender: %s, HDB approved: %s",
            dog_data.age, dog_data.gender, dog_data.hdb_approved)
    }

    function isHdbApproved() {
        if (dog_data.hdb_approved === 1) {
            return <ShareIcon fontSize={'small'}/>
        }
        return <ShareIcon fontSize={'small'} color="disabled"/>
    }

    return (
        <div>
            <Card className={classes.root}>
                <ButtonBase
                    className={classes.cardAction}
                    onClick={handleOpen}
                >
                    <CardMedia
                        className={classes.media}
                        image={dog_data.image}
                    />
                    <CardContent>
                        <div className={classes.controls}>
                            <Typography align="left" variant="h6">
                                {dog_data.name}
                            </Typography>
                            <Typography align="right">
                                {dog_data.gender}, {dog_data.age}yrs
                            </Typography>
                        </div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {get_details()}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <GiLoveInjection fontSize={16}/>
                        {isHdbApproved()}
                        <CgSmartphoneChip fontSize={16}/>
                        <RiScissorsFill fontSize={16}/>
                    </CardActions>
                </ButtonBase>
            </Card>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {dog_data.name} ({dog_data.gender})
                </DialogTitle>
                <DialogContent dividers>
                    <Card className={classes.modalCard}>
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={6}>
                                <CardMedia
                                    className={classes.media}
                                    image={dog_data.image}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <GiLoveInjection fontSize={16}/>
                                {isHdbApproved()}
                                <CgSmartphoneChip fontSize={16}/>
                                <RiScissorsFill fontSize={16}/>
                                <Typography fontWeight={1100}>Birth Date: {dog_data.date_of_birth}</Typography>
                                <Typography><b>Location:</b> Causes for Animals center</Typography>
                                <Typography>Traits: {dog_data.details}</Typography>
                                <Typography>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ac urna eget posuere. Mauris a blandit massa. Nunc facilisis venenatis augue, vel consequat neque rutrum et. Curabitur faucibus dictum lacus, a tempor mauris vehicula ut. Suspendisse ac magna ac neque pretium accumsan eget vitae diam. Quisque lobortis dui id turpis feugiat, vitae dictum magna tincidunt. Mauris nisl lacus, aliquam eget lectus non, pharetra fringilla purus. Morbi cursus elit ut aliquam sollicitudin. Donec consequat non nulla vel ultrices. Vestibulum ut pharetra purus. Nam rutrum purus magna, nec dignissim metus cursus id.</Typography>
                                <Typography>Enquiry Contact: 97433902
                                    info@causesforanimals.com
                                </Typography>
                                <Button size="large" variant="contained" color="primary" onClick={endExperiment}>
                                    Adopt me!
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>
    );
}
// #008080