import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import './signup.css';
import { CreateGroupe } from '../../../redux/action/Action_Groupe';



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


const ADDGroupe = () => {
    const classes = useStyles();
    const [Id_prof, setid] = useState(localStorage.getItem("_id"))
    const [matieres, setMatieres] = useState("");
    const [Name_Groupe, setName_Groupe] = useState("");
    const [Level, setLevel] = useState("");
    const history = useHistory();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateGroupe({ Id_prof, matieres, Name_Groupe, Level }, history))
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <i className="fas fa-user-friends"></i>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create new Groupe
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12} >
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="Name_Groupe"
                                label="Groupe Name"
                                name="Name_Groupe"
                                autoComplete="lname"
                                value={Name_Groupe} onChange={(e) => setName_Groupe(e.target.value)}
                            />
                        </Grid>


                        <Grid item xs={12}>
                            <form className="group">
                                <label htmlFor="pass" className="label">
                                    Level of studies

                                </label>
                                <select name="pets" id="pet-select" className="input"
                                    value={Level} onChange={(e) => setLevel(e.target.value)}
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
                            <form className="group">
                                <label htmlFor="pass" className="label">
                                    matiere
                                </label>
                                <select name="pets" id="pet-select" className="input"
                                    value={matieres} onChange={(e) => setMatieres(e.target.value)}
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

export default ADDGroupe