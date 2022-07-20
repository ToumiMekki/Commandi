import { makeStyles } from '@material-ui/core';
import {Grid,Button } from "@material-ui/core"
import Box from '@mui/material/Box';
import { useSwipeable } from 'react-swipeable'
import TextField from '@mui/material/TextField'
import ContCommand from '../Components/PanierComponents/ContComand'
import ImageProducts from '../image/pizza.jpg'
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
    GridPanier:{
      textAlign:'center',
      width:'100%', height:'90vh',
      overflow:'auto',
      position:'fixed',
      background:'#ffffff',
      bottom:'0',
      boxShadow:'0px 0px 5px 5px rgba(0,0,0,0.5)',
      zIndex:'100',
      borderRadius:'20px',
    },
    BoxPanier:{
        width:'100%', height:'58vh',
        overflow:'auto',
        position:'relative',
        marginTop:'20px',
        marginBottom:'30px',
    },
    BoxConfirm:{
        width:'100%',
        position:'relative',
        bottom:'0',
        marginTop:'20px',
        display:'flex',
    },
    PricePanier:{
        color:'#000',
        padding:'15px 10% 15px 10% ',
        marginLeft:'10px',
        marginRight:'10px',
        border:'2px solid',
        borderRadius:'10px',

    },
    SwipDown:{
        background:'rgba(0,0,0,0.5)',
        width:'40%',
        position:'relative',
        left:'30%',
        borderRadius:'0px 0px 20px 20px',
    },
  })

  const ButtonStyled = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 17,
    position:'absolute',
    bottom:'20px', right:'10px',
    color:'#fff',
    padding:'15px 10% 15px 10% ',
    marginLeft:'10px',
    marginRight:'10px',
    border:'2px solid',
    borderRadius:'10px',
lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  

function Panier({closeOpenPanier}) {
    const classes = useStyles()
    const SwipDown = useSwipeable({
        onSwipedDown: () => closeOpenPanier(false),
      });
    

  return (
    <Grid className={classes.GridPanier}>
        <Box {...SwipDown} className={classes.SwipDown}>
                SwipDown <br />
                to Close
        </Box>
        <Box>
            <h2>Tous Commands</h2>
        </Box>
        <TextField id="outlined-basic" label="Voter Nom" variant="outlined" 
        size="small"
        /> 
        <Box className={classes.BoxPanier}>
            <ContCommand ImageProducts={ImageProducts} ProductsName="Pizza 2 XXL" 
            DescProducts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo asperiores, obcaecati,"
            ProductsPrice="2000"/>
            <ContCommand ImageProducts={ImageProducts} ProductsName="Pizza 2 XXL" 
            DescProducts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo asperiores, obcaecati,"
            ProductsPrice="2000"/>
            <ContCommand ImageProducts={ImageProducts} ProductsName="Pizza 2 XXL" 
            DescProducts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo asperiores, obcaecati,"
            ProductsPrice="2000"/>
            <ContCommand ImageProducts={ImageProducts} ProductsName="Pizza 2 XXL" 
            DescProducts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo asperiores, obcaecati,"
            ProductsPrice="2000"/>
            <ContCommand ImageProducts={ImageProducts} ProductsName="Pizza 2 XXL" 
            DescProducts="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo asperiores, obcaecati,"
            ProductsPrice="2000"/>
        </Box>
        <Box className={classes.BoxConfirm}>
            <h3 className={classes.PricePanier}>
                2000 Dzd
            </h3>
            <ButtonStyled>Confirmer</ButtonStyled>
        </Box>
    </Grid>
  )
}

export default Panier