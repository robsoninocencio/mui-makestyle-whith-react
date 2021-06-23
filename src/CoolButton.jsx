import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    bottonStyle: props => {
        return {
            color: props.cool ? "blue" : "red",
            backgroundColor: props.cool ? "orange" : "yellow",
            [theme.breakpoints.up("sm")]: {
                // color: "cyan",
                // backgroundColor: "black",
                color: props.cool ? "cyan" : "whith",
                backgroundColor: props.cool ? "black" : "blue",
            },
        }
    }
    // bottonStyle: {
    //     color: "red",
    //     [theme.breakpoints.up("sm")]: {
    //         color: "blue",
    //     }
    // }
}));

export default function Hook(props) {
    const classes = useStyles(props);
    return <Button fullWidth className={classes.bottonStyle}>the button</Button>;
}