import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import ChannelCard from "./ChannelCard"
import Videos from "./Videos"
import { FetchAPI } from "../utils/FetchAPI"

const ChannelDetail = () => {

  const {id} = useParams()
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  
  useEffect(()=>{
    // fetch channel info
    FetchAPI(`channels?part=snippet&id=${id}`).then((data)=>(
     setChannelDetail(data?.items[0])
    ))
    //fetch channel video
    FetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>(
     setVideos(data?.items)
    ))
  },[id])

  return (
    <Box minHeight="95vh">
      <Box>
         <div style={{background: "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
          zIndex:10,height:"200px"
         }}/>
         <ChannelCard channelDetail={channelDetail} marginTop="-140px"/>
      </Box>
      <Box display="flex" p="2">
         <Box sx={{mr:{sm:"60px"}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail