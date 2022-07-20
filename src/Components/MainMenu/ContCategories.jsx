import { makeStyles } from '@material-ui/core';
import {Grid} from "@material-ui/core"

const useStyles = makeStyles({
  GridCategories:{
    background:'rgba(200,20,30)',
    margin:'10px',
    borderRadius:'30px',
    fontSize:'20px',
    paddingLeft:'20px',
    paddingRight:'20px',
    padding:'12px',
    color:'white',
  },
})

function ContCategories(props) {
    const classes = useStyles()
    const {CategoriesName} = props
  return (
    <Grid className={classes.GridCategories}>
        {CategoriesName}
    </Grid>
  )
}

export default ContCategories