import { useNavigate } from 'react-router-dom';
import PlaceHoder from '../../placeholder-image.png';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DiscoverCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


const handleClick = () => { 
  navigate('/post/'+props.obj._id);
}


  return (
    <Card className='m-2 grey' sx={{ Width: 345 }} onClick={handleClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'black' }} aria-label="recipe">
            {props.obj.username?props.obj.username[0]:"U"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.obj.username ? props.obj.username : "Unknown"}           //props.obj.Username
        subheader={props.obj.date ? props.obj.date : "1-Jan-2023"   } //props.obj.Date
      />
      <CardMedia
        component="img"
        height="194"
        image={props.obj.image ? props.obj.image : PlaceHoder }  //props.obj.Image
        alt={props.obj.title ? props.obj.title+" image" : "Image not found"  } //props.obj.Title
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.obj.cover ? props.obj.cover : "No cover"  }   
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.obj.Content ? props.obj.Content : "No content" }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}