import { useState, useEffect } from "react"
import {Box , Stack, Typography} from '@mui/material'
import SideBar from "./SideBar"
import Videos from "./Videos"
import { FetchAPI } from "../utils/FetchAPI"

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState("New")
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    FetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
     setVideos(data.items)
    })
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{xs:"column",md:"row"}}}>
     <Box sx={{height:{xs:"auto",md:"92vh"}, borderRight:"1px solid #3d3d3d", px:{xs:0,md:2}}}>
       <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
       <Typography className="copyright" variant="body2" sx={{mt:1.5}}>
         Copyright 2025 @osk123
       </Typography>
     </Box>
     <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
           {selectedCategory} <span style={{color:"blue"}}>
            videos
           </span>
        </Typography>
        <Videos videos={videos} />
     </Box>
    </Stack>
  )
}

export default Feed