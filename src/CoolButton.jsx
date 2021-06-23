import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import className from 'classnames';

const useStyles = makeStyles(theme => ({
    bottonText: props => {
        return {
            color: props.cool ? "blue" : "red",
            [theme.breakpoints.up("sm")]: {
                color: "cyan",
            },
        }
    },
    buttonBackground: {
        background: "red",
    }
}));

export default function Hook(props) {
    const classes = useStyles(props);
    let vClasses = [classes.bottonText, classes.buttonBackground];
    return <Button fullWidth className={className(vClasses)}>the button</Button>;
}