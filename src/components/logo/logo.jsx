import './logo.scss'
import logomarca from '../../assets/logo3.svg'

export function Logo(){
    return(
<>
<img src={logomarca} alt="" />
<h1 className='title-shop'>TecComerce</h1>
</>
    )
}