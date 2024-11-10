// Si se quiere usar memo(), se debe importar memo de la siguiente manera:
/* import { memo } from 'react'; */

// Si se quiere usar React.memo, se debe importar React de la siguiente manera:
import  React  from "react";

export const Small = React.memo(({value}) => {

    console.log("Me volvi a dibujar");

    return (
        <>
            <small>{value}</small>
        </>
    )
})
