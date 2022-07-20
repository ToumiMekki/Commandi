import { makeStyles } from '@material-ui/core';
import {Grid } from "@material-ui/core"
import Box from '@mui/material/Box';
import { BiMenuAltLeft } from "react-icons/bi";
import ContCategories from '../Components/MainMenu/ContCategories'
import ContProducts from '../Components/MainMenu/ContProducts'
import PizzaImg from '../image/pizza.jpg'
import { useSwipeable } from 'react-swipeable'
import {useState} from 'react'
import Panier from './Panier'

const useStyles = makeStyles({
  GridMenu:{
    textAlign:'center',
    width:'100%', height:'100vh',
    overflow:'auto',
  },
  TitleCategories:{
    textAlign:'left',
    margin:'20px',
    marginTop:'100px',
  },
  TitleProducts:{
    textAlign:'left',
    margin:'20px',
    marginTop:'20px',
  },

  CategoriesBox:{
    display:'flex',
    width:'100%',
    paddingBottom:'10px',
    overflow:'auto',
  },
  ProductsBox:{
    display:'flex',
    width:'100%',
    paddingBottom:'10px',
    overflow:'auto',
    marginBottom:'100px',
  },
  BoxSwipup:{
    width:'40%',
    padding:'10px',
    position:'fixed',
    bottom:'0px', left:'30%',
    background:'rgba(0,0,0,0.5)',
    borderRadius:'0px 20px 0px 20px',
  },
})

function Menu() {
  const classes = useStyles()
  const [OpenPanier,setOpenPanier] = useState(false)
  
  const SwipUp = useSwipeable({
    onSwipedUp: () => setOpenPanier((OpenPanier)=> !OpenPanier),
  });

  return (
    <Grid className={classes.GridMenu}>
      <Box>
      <h2>RusturantName</h2>
      </Box>
      <h3 className={classes.TitleCategories}>All Categories</h3>
      <Box className={classes.CategoriesBox}>
          <ContCategories CategoriesName='Pizza'/>
          <ContCategories CategoriesName='Tacos'/>
          <ContCategories CategoriesName='Hamburger'/>
          <ContCategories CategoriesName='Drinks'/>
          <ContCategories CategoriesName='Desserts'/>
      </Box>
      <h3 className={classes.TitleProducts}>All Products</h3>
      <Box className={classes.ProductsBox}>
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. " />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
        <ContProducts ProductsImg={PizzaImg} ProductsName="Pizza margarita" ProductsPrice="1000 dzd"
        ProductsDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, nam iusto praesentium consectetur vitae mollitia, vero tempore fugiat maxime sit, quam ab minus nesciunt officiis debitis tempora id enim." />
      </Box>
      <h4 {...SwipUp} className={classes.BoxSwipup}>swipe up</h4>
      { OpenPanier && <Panier closeOpenPanier={setOpenPanier}/>}
    </Grid>
  )
}

export default Menu