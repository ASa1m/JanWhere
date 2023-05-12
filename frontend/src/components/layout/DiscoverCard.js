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
import { red } from '@mui/material/colors';
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
  navigate('/post/'+props.id);
}


  return (
    <Card className='m-2' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.username?props.username[0]:"U"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.username ? props.username : "Unknown"}           //props.Username
        subheader={props.date ? props.date : "1-Jan-2023"   } //props.Date
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image ? props.image : PlaceHoder }  //props.Image
        alt={props.title ? props.title+" image" : "Image not found"  } //props.Title
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.cover ? props.cover : "No cover"  }   
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
            {props.Content ? props.Content : "No content" } // props.Content
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}