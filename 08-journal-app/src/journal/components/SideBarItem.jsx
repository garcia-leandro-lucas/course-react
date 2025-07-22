import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react';
import { setActiveNote } from '../../store/journal';
import { useDispatch } from 'react-redux';

export const SideBarItem = ( {title = '', id, body, date, imageUrls =[]} ) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {

        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;

    }, [ title ] );

    const itemActive = ({id}) => {
        console.log( 'Note active' );
        dispatch(setActiveNote( {title, id, body, date, imageUrls} ));
    }

  return (
    
    <ListItem
        disablePadding>
        <ListItemButton onClick={itemActive} >
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid>
                <ListItemText primary={ newTitle }/>
                <ListItemText secondary={ body }/>
            </Grid>
        </ListItemButton>
    </ListItem>

  )
}
