import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title='Login'>
      <form 
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
        >
        <Grid container columns={12} spacing={2}>

          {/* Correo */}
          <Grid span={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              sx={{ mb: 2 }}
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          {/* Contraseña */}
          <Grid span={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              sx={{ mb: 2 }}
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          {/* Mensaje de Error */}
          {!!errorMessage && (
            <Grid span={12}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          )}

          {/* Botones */}
          <Grid container columns={12} spacing={2} sx={{ mb: 2, mt: 1 }} direction="column">
            <Grid
              span={12}
              sx={{
                md: { gridColumn: 'span 6' } // Ocupa 6 columnas en md+
              }}
            >
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid
              span={12}
              sx={{
                md: { gridColumn: 'span 6' }
              }}
            >
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Link de registro */}
          <Grid container justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
