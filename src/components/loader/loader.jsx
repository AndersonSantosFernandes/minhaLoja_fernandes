import {CircularProgress} from "@mui/material"


export const Loader = ({loading}) => {

if(!loading){
return null
}

    return(
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
<CircularProgress/>
<p style={{color: !loading ? 'red' : 'green'}}>Loading</p>
</div>

    )
}