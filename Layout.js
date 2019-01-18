import React, { Component } from 'react';
import CreatePost from '../Containers/CreatePost';
import PostList from '../Containers/PostList';
import Paper from '@material-ui/core/Paper';
import classes from './Layout.css'
export class Layout extends Component {
    render() {
        return (
            <div className={classes.outer}>

                    <div className={classes.Post}>
                        <CreatePost />
                    </div>
                    <div className={classes.PostList}>
                        <PostList />
                    </div>

            </div>
        );
    }
}
