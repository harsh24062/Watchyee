import { useState, useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import {Typography, Box, Stack} from "@mui/material"
import {CheckCircle} from "@mui/icons-material"
import { FetchAPI } from "../utils/FetchAPI"
import Videos from "./Videos"
import ReactPlayer from "react-player" 

const VideoDetail = () => {

  const {id} = useParams()
  const [videoDetail,setVideoDetail] = useState(null)
  const [videos,setVideos] = useState(null)

   useEffect(()=>{
    FetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>(
       setVideoDetail(data.items[0])
    ))
 
    FetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>(
      setVideos(data.items)
    ))
  },[id])

  if(!videoDetail?.snippet ) return 'Loading....'

  const {snippet:{title, channelId, channelTitle}, 
    statistics:{ viewCount, likeCount }} = videoDetail
 

  return (
    <Box minHeight="95vh">
          <Stack>
            <Stack direction={{xs:"column",md:"row"}}>
               <Box flex={1}>
                  <Box sx={{width:"100%", position:"sticky",top:"86px"}}>
                   <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                      className="react-player" controls/>
                      <Typography variant="h5" fontWeight="bold" p={2} >
                        {title}
                      </Typography>
                       <Stack direction="row" justifyContent="space-between"
                          py={1} px={2}>
                          <Link to={`/channel/${channelId}`}>
                            <Typography variant={{sm:"subtitle1",md:"h6"}}>
                              {channelTitle}
                              <CheckCircle sx={{fontSize:'12px',color:"grey",ml:"5px"}}/>
                            </Typography>
                          </Link>
                          <Stack direction="row" gap="20px" alignContent="center">
                            <Typography variant="body1" sx={{opacity:0.7}}>
                              {parseInt(viewCount).toLocaleString()} veiws
                            </Typography>
                            <Typography variant="body1" sx={{opacity:0.7}}>
                              {parseInt(likeCount).toLocaleString()} likes
                            </Typography>
                          </Stack>
                       </Stack>
                  </Box>
               </Box>
           
         
          <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column"/>
          </Box>
          </Stack>
         </Stack> 
    </Box>
  )
}

export default VideoDetail