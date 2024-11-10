import React from "react";

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volvi a generar');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                // Funciones con argumentos:
                increment( 10 );
                // Funciones sin argumentos
                /* increment(); */
            }}
        >
            Incrementar
        </button>
    )
})
