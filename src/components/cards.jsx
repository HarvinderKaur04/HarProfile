
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#242424',
      dark: '#f44336',
    },
  },
   border: '2px solid #f44336', 
});

export default function BoxSx() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 100,
          height: 100,
          bgcolor: 'primary.main',
          borderRadius: '10px',
          border: '2px solid #f44336', 
          fontSize: 12,
             color: 'red',
          '&:hover': {
          bgcolor: 'primary.dark',
              
          },
        }}
      />
    </ThemeProvider>
  );
}
