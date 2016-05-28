import React from "react";
import LinearProgress from "material-ui/lib/linear-progress";
import {getFondationStyle} from "../fondations.js";
import Avatar from "material-ui/lib/avatar";
import styles from "material-ui/lib/styles";

const colors = styles.Colors;

const style = {

  globalcontainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 10
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10
  }

};

export const TalkProgressBar = ({text, attendees, fondation, room}) => (
  <div style={style.globalcontainer}>
    <Avatar
      color={colors.white}
      backgroundColor={getFondationStyle(fondation).color}
      style={{fontSize: '13px', top: '-px'}}>
      {attendees}
    </Avatar>
    <div style={style.information}>
      <div>
        {text}
        <div style={{fontWeight: 'bold'}}>Salle : {room}</div>
      </div>
      <LinearProgress mode='determinate'
                      value={attendees}
                      max={70}
                      style={{height: '5px'}}
                      color={getFondationStyle(fondation).color}
      />
    </div>
  </div>
);

export default TalkProgressBar;
