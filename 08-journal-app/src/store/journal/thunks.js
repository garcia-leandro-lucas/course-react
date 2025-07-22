// Thunl es cuando tengo acciones asincronas

import { collection, doc, setDoc } from "firebase/firestore/lite";
import { fireBaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {

    return async( dispatch, getState ) => {

        dispatch( savingNewNote() );
        const { uid } = getState().auth;

        // uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( fireBaseDb, `${uid}/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        /* console.log( {newDoc} );
        console.log( {setDocResp} ); */

        newNote.id = newDoc.id;

        // dispatch
        // dispatch( addNewEmptyNote )
        // dispatch( activeNote )

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) );

    };

}

export const startLoadingNote = () => {

    
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuario no');

        //console.log( {uid} );

        const notes = await loadNotes( uid );
        dispatch( setNote(notes) );
    }

}

export const startSaveNote = () => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        console.log(noteToFireStore);
         console.log("Guardando nota:", noteToFireStore);
         
        const docRef = doc( fireBaseDb, `${uid}/journal/notes/${note.id}` );
        await setDoc( docRef, noteToFireStore );

    }

}