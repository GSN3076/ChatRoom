import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className={"hero"}>
      <h1>Realtime Chat Rooms For Jain Software<span role="img" aria-label="emoji">💬</span></h1>
      {/* <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
      <img src={require("../../img/background.png")} style={{width:"50%",display:"flex",alignSelf:'right'}} />
    </div>
    
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (

                  <div key={name} className="activeItem">
                    <img style={{width:50,height:40,borderRadius:20,margin:8}} src={"https://cdn4.iconfinder.com/data/icons/hipster-color-set/128/funky_hipster_color_b-512.png"} />
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;