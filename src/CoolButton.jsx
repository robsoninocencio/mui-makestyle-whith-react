import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//     bottonStyle: {
//         color: props => (props.cool ? "blue" : "red")
//     }
// });

const useStyles = makeStyles({
    bottonStyle: props => {
        return {
            color: props.cool ? "blue" : "red",
            backgroundColor: props.cool ? "orange" : "yellow"
        }
    }
});

export default function Hook(props) {
    const classes = useStyles(props);
    return <Button className={classes.bottonStyle}>the button</Button>;
}