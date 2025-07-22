import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo } from "react"
import { setActiveNote, startSaveNote } from "../../store/journal"

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.journal );
    const { body, title, onInputChange, date, formState } = useForm( 
        note,
        {},
        (updatedForm) => dispatch(setActiveNote(updatedForm))
    );

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    },[date] );

    /* useEffect(() => {
      
        dispatch( setActiveNote( formState ) )

    }, [formState]) */

    const onSaveNote = () => {
        console.log('startSaveNote');
        dispatch( startSaveNote() );
    }

    return (
        
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container
            direction={'column'}
            justifyContent={'space-between'}
            sx={{mb:1}}>

            <Grid
                container
                item
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 1 }}
            >
                <Typography fontSize={39} fontWeight="light">
                    { dateString }
                </Typography>

                <Button 
                    onClick={ onSaveNote }
                    color="primary"
                    sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb:1 }}
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            {/* Images Galerry */}
            <ImageGallery />

        </Grid>

    )
}
