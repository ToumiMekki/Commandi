import { makeStyles } from '@material-ui/core';
import {Grid,Container} from "@material-ui/core"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LogoImg from '../image/qr-code.png'
import { useSwipeable, Swipeable } from 'react-swipeable'
import Arab from '../image/algeria.png'
import French from '../image/france.png' 
import English from '../image/English.png'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
    ContainerHome:{
        background:'rgba(200,20,30)',
        width:'100%', height:'100vh',
        textAlign:'center',
        fontWeight:'700',
        overflow:'auto',
    },
    GridImg:{
        width:'70%',
        maxWidth:'450px',
        minWidth:'130px',
        textAlign:'center',
        fontWeight:'700',
        margin:'auto',
    },
    Img:{
        width:'100%', 
        marginTop:'30%',
    },
    Translate:{
        width:'10%',
        maxWidth:'50px',
        margin:'20px',
        marginBottom:'50px',
    },
    TextDesc:{
        width:'90%',
        margin:'auto',
        marginTop:'10%',
    },
    SwipUp:{
        width:'50%',
        padding:'5px',
        position:'fixed',
        bottom:'0', left:'25%',
        background:'rgba(0,0,0,0.5)',
        
    },
})

function Home() {
    const classes = useStyles()
    const SwipUp = useSwipeable({
        onSwipedUp: () => navigate('menu')
      });
      const navigate = useNavigate()
        
  return (
    <Grid className={classes.ContainerHome}>
        <Grid className={classes.GridImg} xs="auto">
            <img src={LogoImg} alt="" className={classes.Img}/>
            <h1>QrMenu</h1>
        </Grid>
        <Grid className={classes.TextDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda autem error porro sed praesentium distinctio 
            soluta id tempora facere repellat. Adipisci distinctio quod, 
            minus voluptatum nulla repellat laborum vero voluptatem.
        </Grid><br /><br />
        <Grid>
            Sélectionner votre langue
            <Grid>
                <img src={Arab} alt="" className={classes.Translate}/>
                <img src={French} alt="" className={classes.Translate}/>
                <img src={English} alt="" className={classes.Translate}/>
            </Grid>
        </Grid>
        <Grid {...SwipUp} className={classes.SwipUp}>
            SwipUp
        </Grid>
    </Grid>
  )
}

export default Home