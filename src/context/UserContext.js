import {createContext} from 'react';

const UserContext = createContext({
    nombre:null,
    apellido:null,
});

export default UserContext;
