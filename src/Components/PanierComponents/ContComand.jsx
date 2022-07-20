import * as React from 'react';
import List from '@mui/material/List';
import {ButtonGroup,Button } from "@material-ui/core"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react'
import { PlusOne } from '@mui/icons-material';

export default function AlignItemsList(props) {
  const {ImageProducts,ProductsName,DescProducts,ProductsPrice} = props
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <List sx={{ width: '100%', maxWidth: '96%',height:'16vh', bgcolor: 'rgba(200,20,30)' 
    ,margin:'auto', marginTop:'10px',borderRadius:'15px', color:'white',overflow:'auto'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={ImageProducts} />
        </ListItemAvatar>
        <IconButton aria-label="delete" size="small"
        sx={{position:'absolute',right:'15px',top:'5px',color:'white',width:'25px',height:'25px',
          border:'none', borderRadius:'10px'}}>
         <DeleteIcon fontSize="inherit" />
          </IconButton>
        <ListItemText
          primary={ProductsName}
          secondary={
            <React.Fragment>
              {DescProducts}
              <Typography
                sx={{position:'absolute',right:'10px',bottom:'-40px',color:'white'}}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {ProductsPrice} Dzd
              </Typography>
            </React.Fragment>
          }
        />
          <ButtonGroup size='small' variant="contained" style={{position:'absolute',left:'50px',bottom:'-35px',
              background:'none',border:'none',width:'128px', height:'40px',
            }}>
            <Button onClick={decrementCounter}
            style={{margin:'1px',borderRadius:'10px',width:'15px'}}>-</Button>
            <Button style={{margin:'1px',borderRadius:'10px',width:'15px'}}>{counter}</Button>
            <Button onClick={incrementCounter}
              style={{margin:'1px',borderRadius:'10px',width:'15px'}}>+</Button>
          </ButtonGroup>
</ListItem>
    </List>
  );
}
