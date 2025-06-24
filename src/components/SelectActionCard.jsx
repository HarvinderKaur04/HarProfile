import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



const cards = [
  {
    id: 1,
    image: '/Images/html.png',
    title: 'HTML',
  },
  {
    id: 2,
    image: '/Images/css.png',
    title: 'CSS',

  },
  {
    id: 3,
     image: '/Images/Bootstrap.png',
    title: 'Bootstrap',

  },
  {
    id: 4,
     image: '/Images/js.png',
    title: 'JavaScript',

  },
  {
    id: 5,
     image: '/Images/react.svg',
    title: 'React JS',
  },
  {
    id: 6,
     image: '/Images/Node.png',
    title: 'Node JS',

  },
  {
    id: 7,
     image: '/Images/Ex.png',
    title: 'Express JS',

  },
  {
    id: 8,
     image: '/Images/sql.png',
    title: 'SQL',

  },
  {
    id: 9,
    image: '/Images/MongoDB.png',
    title: 'MongoDB',
  },

  {
    id: 10,
     image: '/Images/python.svg',
    title: 'Python',

  },
  {
    id: 11,
     image: '/Images/java2.png',
    title: 'Java',

  },
  {
     id: 12,
     image: '/Images/c.svg',
    title: 'C Language',

  },
    
 
];



export default function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{

        height: '100%',
        display: 'grid',
        border: '10px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        boxShadow:'revert-layer',
        gap: 5.5,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          sx={{
            height: 230,
            // border: '3px solid',
            borderColor: ' #ec7f37',
            backgroundColor: ' #fbe9e7 ',
            borderRadius: '25px',
            boxShadow: '0 0 12px 2px #d50000', 
             color: '#d50000',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: ' #d50000',
              borderColor: '#ec7f37',
              color: 'rgb(231, 215, 204)',
            },
          }}

        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',

                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '200px', textAlign: 'center' }}>
              {card.image && (
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    height: 100,
                    objectFit: 'contain',
                    mb: 2,
                    display: 'block',
                    mx: 'auto',
                  }}
                />
              )}
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}


