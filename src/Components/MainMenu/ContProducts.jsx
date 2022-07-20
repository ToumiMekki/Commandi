import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"

const useStyles = makeStyles({
  GridProducts:{
    background:'rgba(200,20,30)',
    margin:'10px',
    borderRadius:'20px',
    minWidth:'230px', maxHeight:'300px',
    color:'white',
    overflow:'auto',
    padding:'20px',
  },
  ImgProd:{
    width:'150px',
    borderRadius:'40px',
  }
})

function ContProducts(props) {
    const classes = useStyles()
    const {ProductsImg,ProductsName,ProductsPrice,ProductsDesc} = props
  return (
    <Grid className={classes.GridProducts}>
            <img src={ProductsImg} alt="" className={classes.ImgProd}/>
            <h3>{ProductsName}</h3>
            <h4>{ProductsPrice}</h4>
            <p>{ProductsDesc}</p>
            <button>Add Cart</button>
    </Grid>
  )
}

export default ContProducts