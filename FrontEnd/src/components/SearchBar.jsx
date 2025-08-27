import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import {Search} from "@mui/icons-material"

const SearchBar = () => {
  return (
    <Paper 
      component="form"
      onSubmit={()=>{}}
      sx={{borderRadius:20, border:"1px solid #e3e3e3", pl:1, boxShadow:'none'}}   
      >
     <input 
        placeholder="Search Here..."
        className="search-bar"
        value=""
        onChange={()=>{}}/>
        <IconButton type="submit" sx={{padding:"10px",color:"gray"}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar