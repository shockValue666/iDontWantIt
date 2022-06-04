import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from './svgs/StarIcon'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function RoadMapComponent({props}:any) {

    const [dense, ] = React.useState(false);
  const [secondary, ] = React.useState(false);
  return (
    <div style={{color:"black"}}>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          </Typography>
          <Demo>
            <List dense={dense}>
              {props.map((roadmapItem:any) => {
                  return (
                      <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            {/* <FolderIcon /> */}
                            <StarIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={roadmapItem}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                  )
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default RoadMapComponent
