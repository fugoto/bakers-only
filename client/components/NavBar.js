import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './auth/Logout';
import { Button } from '@material-ui/core/';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

function NavBar(props) {
    // const classes = useStyles();
    // return (
    //     <div className={classes.root}>
    //                 <AppBar position="static">
    //     <Toolbar>
    //           <Link to="/">Home</Link>
    //      <Link to="/addPhoto">Add Photo</Link>
    //        <Link to="/editPhotos">Manage Photos</Link>
    //        { !props.user.id ? 
    //          <Link to="/login">Log in</Link>
    //          : <Logout /> }
    
    //   </Toolbar>
    // </AppBar>

    //     </div>
    // )


  return (
    <div id="nav-bar">
    {/* <div id='menu-items'> */}
        <Link to="/">Home</Link>
      <Link to="/addPhoto">Add Photo</Link>
      <Link to="/editPhotos">Manage Photos</Link>
        {/* </div> */}
      <div id="auth-button">
      { !props.user.id ? 
           <Link to="/login">
               <Button variant="contained" color="secondary" className="signInAuthButton" >
                   Log in
                </Button>
            </Link>
          : <Logout /> }
        {/* { !props.user.id ? 
          <Link to="/login">Log in</Link>
          : <Logout /> } */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
