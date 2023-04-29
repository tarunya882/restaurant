import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar , makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  profile: {
    marginRight: '8vh'
  }
}));

const Profile = (props) => {
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className={classes.profile} onClick = {props.onClick}>
        <Avatar src={user.picture} sx={{ width: 56, height: 56 }} />
      </div>
    )
  );
};

export default Profile;
