/*
import React from 'react'

const newRequest=()=>(
    <p>Loading New Request .....</p>
)

export default newRequest*/


import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import classes from './NewRequest.css'
export class NewRequest extends React.Component {
    state = {
        title: '',
        body: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
       /* e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            console.log(this.state);
            this.handleReset();
        }*/

        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: ''
        });
    };

    render() {
        return (
            <div className={classes.NewRequest}>
                <Paper>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <TextField
                            type="text"
                            fullWidth
                            margin="dense"
                            label="Title"
                             name="title"
                            onChange={ this.handleInputChange }
                            value={ this.state.title }
                        />
                    </div>
                    <div >
            <TextField
                fullWidth
                margin="dense"
                label="Body"
                multiline={true}
                rows="10"
                name="body"
                onChange={ this.handleInputChange }
                value={ this.state.body }>
            </TextField>
                    </div>
                    <div >
                        <Button type="submit" color="primary" >Add Post</Button>
                        <Button type="button" color="secondary"  onClick={ this.handleReset }>
                            Reset
                        </Button>
                    </div>
                </form>
                </Paper>
            </div>
        );
    }
}

