import classes from './Button.module.css';

const Button = props => {
    return (
        <button className={classes.Button} onClick={props.submit}>{props.children}</button>
    );
}

export default Button;