
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function IconAvatars() {

  return (
    <Stack direction="row" spacing={5} marginTop={5} sx={{ '& > :not(style)': { m: 1 } }}>
  <a href='' aria-label='Gmail'>
    <Avatar 
      sx={{ 
        width: 56,
        height: 56, 
        bgcolor: '#dac5c3',
        color:' #d50000',
        border: '3px solid #d50000',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#d50000',
          color:'#dac5c3',
          boxShadow: '0 0 10px 4px rgba(213, 0, 0, 0.7)',
          
                  
        }
      }}
    >
      <i className="fa-solid fa-envelope"></i>
    </Avatar>
  </a>

  <a href='' aria-label='LinkedIn'>
    <Avatar 
      sx={{ 
       width: 56,
        height: 56, 
        bgcolor: '#dac5c3',
        color:' #d50000',
        border: '3px solid #d50000',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#d50000',
          color:'#dac5c3',
          boxShadow: '0 0 10px 4px rgba(213, 0, 0, 0.7)',
        }
      }}
    >
      <i className="fa-brands fa-linkedin-in"></i>
    </Avatar>
  </a>

  <a 
    href='https://github.com/HarvinderKaur04' 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label='Github'
  >
    <Avatar 
      sx={{ 
       width: 56,
        height: 56, 
        bgcolor: '#dac5c3',
        color:' #d50000',
        border: '3px solid #d50000',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#d50000',
          color:'#dac5c3',
          boxShadow: '0 0 10px 4px rgba(213, 0, 0, 0.7)',
        }
      }}
    >
      <i className="fa-brands fa-github"></i>
    </Avatar>
  </a>
</Stack>

  
  );
}


 