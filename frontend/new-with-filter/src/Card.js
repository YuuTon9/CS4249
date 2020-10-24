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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Home';
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
        height:700,
        display: 'flex',
        // maxWidth: '70% !important',
        margin: '2 auto',
        padding: '0 1rem'

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
                        <Typography variant="body2" color="textSecondary" component="p">
                            {get_details()}
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
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={6}>
                                <Typography align="left" variant="h4">
                                    {dog_data.name} ({dog_data.gender})
                                </Typography>
                                <CardMedia
                                    className={classes.media}
                                    image={dog_data.image}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography><b>Birth Date:</b> {dog_data.date_of_birth}</Typography>
                                <Typography><b>Location:</b> Causes for Animals center</Typography>
                                <Typography>Traits: {dog_data.details}</Typography>
                                <Typography>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque ac urna eget posuere. Mauris a blandit massa. Nunc facilisis venenatis augue, vel consequat neque rutrum et. Curabitur faucibus dictum lacus, a tempor mauris vehicula ut. Suspendisse ac magna ac neque pretium accumsan eget vitae diam. Quisque lobortis dui id turpis feugiat, vitae dictum magna tincidunt. Mauris nisl lacus, aliquam eget lectus non, pharetra fringilla purus. Morbi cursus elit ut aliquam sollicitudin. Donec consequat non nulla vel ultrices. Vestibulum ut pharetra purus. Nam rutrum purus magna, nec dignissim metus cursus id.</Typography>
                                <Typography>Enquiry Contact: 97433902
                                    info@causesforanimals.com
                                </Typography>
                                <Button size="large" variant="contained" color="primary">
                                    Adopt me!
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Fade>
            </Modal>
        </div>
    );
}