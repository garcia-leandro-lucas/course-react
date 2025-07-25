import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}, onFormChange = () => {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {

      createValidators();

    }, [ formState ])

    useEffect(() => {

        setFormState( initialForm );

    }, [ initialForm ])


    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[ formValue ] !== null ) return false;
        }
        
        return true;

    }, [ formValidation ] );
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        const newFormState = {
            ...formState,
            [ name ]: value
        }
        setFormState(newFormState);
        onFormChange(newFormState);
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckValues = {};

        for (const formField of Object.keys( formValidations )) {
            //console.log(formField);

            const [ fn, errorMessage = 'Este campo es requerido' ] = formValidations[formField];

            formCheckValues[`${ formField }Valid`] = fn( formState[ formField ] ) ? null : errorMessage;
        
        }

        setFormValidation( formCheckValues );
        //console.log(formCheckValues);

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}