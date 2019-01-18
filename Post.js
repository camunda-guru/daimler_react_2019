import React from 'react';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import classes from './Post.css'
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,


    },
});

export default ({ post: { title, body, id }, onDelete }) => {
    return (
        <div className={classes.Post}>
           <form>
               <TextField
                   id="standard-read-only-input"
                   label="Read Only"

                   className={classes.textField}
                   margin="normal"
                   InputProps={{
                       readOnly: true,
                   }}
                   value={title}
               />
               <TextField
                   id="standard-read-only-input"
                   label="Read Only"

                   className={classes.textField}
                   margin="normal"
                   InputProps={{
                       readOnly: true,
                   }}
                   value={body}
               />
            <div>
            <Button color="secondary" type="button" onClick={() => onDelete(id)}>
                Remove
            </Button>
            </div>
           </form>
        </div>
    );
};