import { Typography, Grid } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4,
      }}
    >
      <Grid
        className="box-shadow"
        span={12} 
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: { xs: '100%', sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
