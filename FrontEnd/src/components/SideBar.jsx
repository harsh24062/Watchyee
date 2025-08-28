import {Stack} from '@mui/material'
import {categories} from '../utils/constants'

const selectedCategory = "New"

const SideBar = () => {
  return (
    <Stack 
      direction="column"
      sx={{overflow:"auto", height:{xs:'auto',md:"90%",flexDirection:{xs:'row',md:'column'}}}}>
       {categories.map((category,index)=>(
        <button id={index} className="category-btn"
          style={{background:category.name===selectedCategory && "#FC1503"}}>
            <span style={{color:category.name===selectedCategory?"white":"blue",
                marginRight:"15px"}}>
                {category.icon}
            </span>
            <span style={{color:category.name===selectedCategory?"white":"black",
                opacity:category.name===selectedCategory?"1":"0.7"}}>
                {category.name}
            </span>
        </button>
       ))}
    </Stack>
  )
}

export default SideBar