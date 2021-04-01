import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  background: {
    width: "100%",
  

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    margin: "5px",
    backgroundColor: '#00ce2d',
    backgroundImage: 'url("https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80")',
    backgroundBlendMode: 'screen',
    boxShadow: '4px 5px 9px black',
    borderRadius: 10,
    transition: '450ms',
    '&:hover': {
        fontSize: "20px",
        transform: 'scale(1.04)',
        color: 'white',
    },
  },
  activeCard: {
    borderBottom: '10px solid #00ce2d',   
    backgroundColor: '#b00b13',
    color: 'white',
    
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    padding: "8px",
    borderRadius: 10,
  
  },
  title: {
    padding: '0 16px',
    
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: "black",
    
    
  },

  date: {
    color: "white",
  
    
  },

  description: {

    color: "black",

  }

});
