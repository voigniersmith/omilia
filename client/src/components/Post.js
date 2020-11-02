import React, { Component } from 'react';

//MUI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import Link from 'react-router-dom/Link';

class Post extends Component {
    render() {
        const { classes, post : { body, userHandle, createdAt } } = this.props
        return (
            <div className="center">
                <Card>
                    <CardContent>
                        <Typography variant = "h6">UserID: {userHandle}</Typography>
                        <Typography variant = "body2">Date:{createdAt}</Typography>
                        <Typography variant = "body1">{body}</Typography>
                        </CardContent>
                </Card>
            </div>
        )
    }
}

export default Post