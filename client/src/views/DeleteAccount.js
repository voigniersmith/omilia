import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import Logo from '../components/Logo'
import '../css/app.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

//MUI Stuff
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
    ...theme.spreadIt
})

class DeleteAccount extends React.Component {  
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            loading: false,
            errors: {}
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            username: this.state.username
        }
        axios
            .post('/delete', newUserData)
            .then(res => {
                console.log(res.data)
                localStorage.removeItem('FBIdToken', `Bearer  ${res.data.token}`);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;

        return ( 
            <div className='start'>
                <Grid container className={classes.form} direction='column'>
                    <Grid item sm />
                    <Grid item sm>
                        <div className='middle'>
                        <Logo />
                        <Typography variant='h2' className={classes.pageTitle} >
                            Delete Account
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField 
                                id="email" 
                                name="email" 
                                type="email" 
                                label="Email" 
                                className={classes.textField}
                                helperText={errors.email} 
                                error={errors.email ? true : false} 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                fullwidth />
                            <br />
                            <TextField 
                                id="password" 
                                name="password" 
                                type="password" 
                                label="Password" 
                                className={classes.textField}
                                helperText={errors.password} 
                                error={errors.password ? true : false} 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                fullwidth />
                            <br />
                            <TextField 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                type="password" 
                                label="Confirm Password" 
                                className={classes.textField}
                                helperText={errors.confirmPassword} 
                                error={errors.confirmPassword ? true : false} 
                                value={this.state.confirmPassword} 
                                onChange={this.handleChange} 
                                fullwidth />
                            <br />
                            <TextField 
                                id="username" 
                                name="username" 
                                type="text" 
                                label="Username" 
                                className={classes.textField}
                                helperText={errors.username} 
                                error={errors.username ? true : false} 
                                value={this.state.username} 
                                onChange={this.handleChange} 
                                fullwidth />
                            <br />
                            { errors.general && (
                                <Typography variant='h2' className={classes.customError}>
                                    {errors.general}
                                </Typography>
                            )}
                            <Button type="submit" variant="contained" color="primary" className={classes.Button} disable={loading}>
                                Delete Account
                                {loading && (
                                    <CircularProgress size={20} className={classes.progress}/>
                                )}
                            </Button>
                            <br />
                            <small>Are you sure you want to delete your account? If not, cancel <Link to ="/home">here</Link>.</small>
                        </form>
                        </div>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
    )}
}

DeleteAccount.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DeleteAccount);