import { Box, CardContent, CardMedia ,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import {Link} from "react-router-dom"
import {demoProfilePicture} from "../utils/constants"

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{
        borderRadius:"20px", 
        boxShadow:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:"356px",md:"320px"},
        height:"320px",
        margin:"auto",
        marginTop:marginTop
        }}>
       <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title} 
              sx={{width:"180px", height:"180px" , borderRadius:"50%", mb:2, border:"1px solid black"}}/>
           <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px"}}></CheckCircle>
           </Typography>
            {channelDetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}
        </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard