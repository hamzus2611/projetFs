import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import { register } from '../../redux/action/action_Register';
import './signup.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignUp = () => {
    const classes = useStyles();
    const [date_birth, setDate] = useState("2020-01-01")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    //const [passwordr, setPasswordr] = useState("");
    const [countery, setCountry] = useState("");
    const [level, setLevel] = useState("");
    const [lastname, setLastname] = useState("");
    const history = useHistory();
    let isAuth = window.sessionStorage.getItem('isAuth')

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        //  password === passwordr ?
        dispatch(register({ username, lastname, email, password, phone, date_birth, countery, level }, history))
        //:            alert("Verify your password");
    };


    return (
        <Container component="main" maxWidth="xs">
            {(isAuth === "true") ? <Redirect to="/" /> : null}

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={username} onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={lastname} onChange={(e) => setLastname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password} onChange={(e) => setPassword(e.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="phone"
                                label="phone"
                                type="phone"
                                id="phone"
                                autoComplete="current-phone"
                                value={phone} onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <label htmlFor="pass" className="label">
                                Country
                            </label>
                            <form className="input">
                                <select name="country" className="input"
                                    value={countery} onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="">--Please choose your country--</option>
                                    <option value="Ariana" >Ariana </option>
                                    <option value="Béja" >Béja </option>
                                    <option value="Ben Arous" > Ben Arous</option>
                                    <option value="Bizerte" > Bizerte</option>
                                    <option value="Gabès" >Gabès</option>
                                    <option value="Gafsa" > Gafsa</option>
                                    <option value="Jandouba" > Jandouba</option>
                                    <option value="Kairouan" >Kairouan </option>
                                    <option value="Kasserine" >Kasserine</option>
                                    <option value="Kébili" > Kébili</option>
                                    <option value="Kef" >Kef </option>
                                    <option value="Mahdia" > Mahdia</option>
                                    <option value="Manouba" >Manouba </option>
                                    <option value="Médnine" >Médnine </option>
                                    <option value="Monastir" >Monastir</option>
                                    <option value="Nabeul" > Nabeul</option>
                                    <option value="Sfax" > Sfax</option>
                                    <option value="Sidi Bouzid" >Sidi Bouzid </option>
                                    <option value="Siliana" >Siliana </option>
                                    <option value="Sousse" >Sousse </option>
                                    <option value="Tatouine" >Tatouine </option>
                                    <option value="Tozeur" >Tozeur </option>
                                    <option value="Tunis" >Tunis</option>
                                    <option value="Zaghouan" >Zaghouan </option>

                                </select>
                            </form>


                        </Grid>
                        <Grid item xs={12}>
                            <form className="group">
                                <label htmlFor="pass" className="label">
                                    level of studies

                                </label>
                                <select name="pets" id="pet-select" className="input"
                                    value={level} onChange={(e) => setLevel(e.target.value)}
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="7th_Year_of_base">7th Year of base</option>
                                    <option value="8th_Year_of_base">8th Year of base</option>
                                    <option value="9th_Year_of_base">9th Year of base</option>
                                    <option value="1st_Year_Secondary">1st Year Secondary</option>

                                    <option value="2nd_Year_Secondary_Math">2nd Year Secondary Math</option>
                                    <option value="2nd_Year_Secondary_Eco">2nd Year Secondary Eco</option>
                                    <option value="2nd_Year_Secondary_Info">2nd Year Secondary Info</option>
                                    <option value="2nd_Year_Secondary_Lettre">2nd Year Secondary Lettre</option>
                                    <option value="2nd_Year_Secondary_Sc">2nd Year Secondary Sc</option>

                                    <option value="3rd_Year_Secondary_Math">3rd Year Secondary Math</option>
                                    <option value="3rd_Year_Secondary_Eco">3rd Year Secondary Eco</option>
                                    <option value="3rd_Year_Secondary_Info">3rd Year Secondary Info</option>
                                    <option value="3rd_Year_Secondary_Lettre">3rd Year Secondary Lettre</option>
                                    <option value="3rd_Year_Secondary_Sc">3rd Year Secondary Sc</option>
                                    <option value="3rd_Year_Secondary_TECH">3rd Year Secondary Tech</option>

                                    <option value="BAC_ECO">baccalaureate Eco</option>
                                    <option value="BAC_Info">baccalaureate Info</option>
                                    <option value="BAC_Math">baccalaureate Math</option>
                                    <option value="BAC_Sc">baccalaureate Sc</option>
                                    <option value="BAC_Tech">baccalaureate Tech</option>
                                    <option value="BAC_Lettre">baccalaureate Lettre</option>
                                </select>

                            </form>
                        </Grid>
                        <Grid item xs={12}>
                            <form >
                                <label for="birthday">Birthday:</label>
                                <input type="date" id="birthday" name="birthday"
                                    value={date_birth} onChange={(e) => setDate(e.target.value)}

                                />
                            </form>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/user/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );

}

export default SignUp