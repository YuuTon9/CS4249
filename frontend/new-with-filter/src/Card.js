import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ButtonBase from '@material-ui/core/ButtonBase';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
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
        width: 1000,
        height:700
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function DogCard({dog_data}) {
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
                            <Typography align="left" variant="subtitle1">
                                {dog_data.name}
                            </Typography>
                            <Typography align="right">
                                {dog_data.gender}, {dog_data.age}yrs
                            </Typography>
                        </div>

                        <Typography variant="body2" color="textSecondary" component="p">{get_details()}
                        </Typography>


                    </CardContent>
                    <CardActions>
                        <FavoriteIcon />
                        <ShareIcon />
                    </CardActions>
                </ButtonBase>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Card className={classes.modalCard}>

                    </Card>
                </Fade>
            </Modal>
        </div>
    );
}