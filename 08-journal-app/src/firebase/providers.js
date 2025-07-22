import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProviders = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup( FireBaseAuth, googleProviders );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log( {credentials} )
        const  user = result.user;
        //console.log(user);

        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            // User
            displayName, email, photoURL, uid
        }

    } catch (error) {
        
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }

    }
}


export const RegisterUserWithEmailPassword = async( {email, password, displayName} ) => {

    try {
        console.log( { email, password, displayName } );
        const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        console.log(resp);

        // TODO: actualizar el displayName en Firebase
        await updateProfile( FireBaseAuth.currentUser, {
            displayName
        } );


        return {
            ok: true,
            // User
            displayName, email, photoURL, uid
        }

    } catch (error) {

        //console.log(error);

        return{ 
            ok: false,
            errorMessage: error.message
        }
    }

}

export const loginWithEmailPassword = async( { email, password } ) => {

    // signInWithEmailAndPassword

    try {
        console.log( {email, password} );
        const resp = await signInWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL, displayName } =  resp.user;
        console.log(resp);


        return {
            ok: true,
            displayName, photoURL, uid
        }

        
    } catch (error) {
        
        console.log(error);

        return{ 
            ok: false,
            errorMessage: error.message
        }

    }

}

export const logoutFirebase = async() => {

    return await FireBaseAuth.signOut();

}