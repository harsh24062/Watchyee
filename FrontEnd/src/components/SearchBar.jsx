import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import {Search} from "@mui/icons-material"

const SearchBar = () => {

  const [input,setInput] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(input){
      navigate(`/search/${input}`)
    }
  }

  return (
    <Paper 
      component="form"
      onSubmit={handleSubmit}
      sx={{borderRadius:20, border:"1px solid #e3e3e3", pl:1, boxShadow:'none'}}   
      >
     <input 
        placeholder="Search Here..."
        className="search-bar"
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <IconButton type="submit" sx={{padding:"10px",color:"gray"}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar