import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import {CheckCircle} from '@mui/icons-material'
import {demoChannelUrl,demoChannelTitle,demoThumbnailUrl,demoVideoTitle,demoProfilePicture,demoVideoUrl} from "../utils/constants"

const VideoCard = ({video:{id:{videoId},snippet}}) => {
   
  return (
    <Card sx={{width:{xs:"100%",md:"320px"}, boxShadow:"none", borderRadius:"0"}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl} >
           <CardMedia image={snippet?.thumbnails?.high?.url}
             alt={snippet?.title} 
             sx={{width:358, height:180}}/>
        </Link>
        <CardContent sx={{ height:"106px"}}>
            {/* Channel Url */}
           <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
             <Typography fontWeight="bold" color="black">
                {snippet?.title.slice(0,30) || demoVideoTitle.slice(0,30)} 
             </Typography>
           </Link>
           {/* Channel Title */}
           <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
             <Typography fontWeight="bold" color="grey" variant="subtitle2">
                {snippet?.channelTitle.slice(0,30) || demoChannelTitle.slice(0,30)} 
                <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}}></CheckCircle>
             </Typography>
           </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard