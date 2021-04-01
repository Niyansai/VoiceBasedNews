import { makeStyles } from "@material-ui/core/styles";


export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
        transition: '450ms',

    },


    card: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "48vh",
        padding: "10%",
        borderRadius: 10,
        color: "black",
        margin: "5px",
        backgroundImage: 'url("https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80")',
        backgroundBlendMode: 'screen',
        boxShadow: '4px 5px 9px black',
        transition: '450ms',
        '&:hover': {
            fontSize: "20px",
            transform: 'scale(1.04)',
            backgroundBlendMode: 'overlay',
            color: 'white',

        },
    },

    infoCard: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "green",
    },

    size: {
        fontSize: 16,
       fontWeight: 'bolder',
    },

})