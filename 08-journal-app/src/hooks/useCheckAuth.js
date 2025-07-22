import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";
import { FireBaseAuth } from "../firebase/config";
import { startLoadingNote } from "../store/journal/";

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    
    useEffect(() => {

    onAuthStateChanged( FireBaseAuth, async( user ) => {
        //console.log(user);

        if( !user ) return dispatch( logout() );

        const { uid, email, displayName,photoURL } = user;

        dispatch( login({ uid, email, displayName,photoURL }) );
        dispatch( startLoadingNote() );

    } )

    }, [])

    return {
        status
    }

}