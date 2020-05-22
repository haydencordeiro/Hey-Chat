import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';


// import MoreVertIcon from '@material-ui/icons/MoreVert';

function MssgCard(props)
{
return (
    <Card >
    <CardHeader
      avatar={
        <Avatar aria-label="recipe">
          {props.name.charAt(0).toUpperCase()}
        </Avatar>
      }

      title={props.name}
      subheader={props.message}
    />
    </Card>

);


}
 
export default MssgCard;