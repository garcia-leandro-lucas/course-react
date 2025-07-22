import { loginWithEmailPassword, logoutFirebase, RegisterUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

    }

}

export const startGoogleSignIn = ( ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        console.log({ result });

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

    }

}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        //const resp = await RegisterUserWithEmailPassword( { email, password, displayName } );
        //const { ok, uid, photoURL, errorMessage } = await RegisterUserWithEmailPassword( { email, password, displayName } );
        const result = await RegisterUserWithEmailPassword( { email, password, displayName } );
        // console.log(resp);

        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

    }

}

export const startLoginWithEmailPassword = ( { email, password } ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        //const { ok, uid, photoURL, errorMessage } = await loginWithEmailPassword( {email, password} );
        //const resp = await loginWithEmailPassword( {email, password} );
        const result = await loginWithEmailPassword( {email, password} );
        console.log(result);

        if( !result.ok ) return dispatch( logout( result ) );

        dispatch( login( result ) );

    }

}

export const startLogout = () => {

    return async( dispatch ) => {

        await logoutFirebase();

         dispatch( logout() );

    }

}