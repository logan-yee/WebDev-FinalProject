import { auth } from "../config/firebase";
import { signOut } from 'firebase/auth';


const logout = () => {
    try{
        signOut (auth);
    } catch (err) {
        console.error(err);
    }
}

export default logout;