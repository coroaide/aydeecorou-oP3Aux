import { Box} from '@material-ui/core';
import useUser from '../hooks/useUser';

export default function MoreInfo(){
    const {nombre,apellido} = useUser();
    return(
        <Box>
            <p>{nombre}</p>
            <p>{apellido}</p>
        </Box>
    )
}
