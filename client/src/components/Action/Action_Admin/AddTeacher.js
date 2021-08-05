import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import './signup.css';
import { registerTeacher } from '../../../redux/action/action_Register';



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


const AddTeacher = () => {
    const classes = useStyles();
    const [date_birth, setDate] = useState("2020-01-01")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    //const [passwordr, setPasswordr] = useState("");
    const [countery, setCountry] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [lastname, setLastname] = useState("");
    const history = useHistory();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        //  password === passwordr ?
        dispatch(registerTeacher({ username, lastname, email, specialite, phone, date_birth, countery }, history))
        //:            alert("Verify your password");
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ADD Teacher
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
                                    value={specialite} onChange={(e) => setSpecialite(e.target.value)}
                                >
                                    <option value="">--Please choose an option--</option>
                                    <option value="Anglais">Anglais</option>
                                    <option value="Physical_Chemistry">Physical_Chemistry</option>
                                    <option value="Sciences">Sciences</option>
                                    <option value="technology">technology</option>
                                    <option value="French">French</option>
                                    <option value="Informatics">Informatics</option>
                                    <option value="Mathematics">Mathematics</option>
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

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        register
                    </Button>
                    
                </form>
            </div>
           
        </Container>
    );

}

export default AddTeacher