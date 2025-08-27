import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import WatchYee_Logo from '../assets/WatchYee_Logo.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
   <Stack 
   direction="row"
   alignItems="center"
   sx={{position:"sticky",background:"black",top:0, justifyContent:"space-between"}}>
   <Link to={"/"} style={{display:"flex",alignItems:"center"}}>
    <img src={WatchYee_Logo} alt='Watchyee Logo' height={70}  style={{ cursor: "pointer" }}/>
   </Link>
   <SearchBar />
   </Stack>
  )
}

export default Navbar