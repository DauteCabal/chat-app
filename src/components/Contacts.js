import React from 'react'
import "./Contact.css"

const profileInfo = {
  name: "daute",
  avatar: "http://daute.dev/me.jpeg",
  online: true
}

function Element() {
  return (

<div className="Contact">

      <img className="avatar" src={profileInfo.avatar} alt="me" />

      <div className="status">
        <h4 className="name">{profileInfo.name}</h4>
        <div className={profileInfo.online ? "status-online" : "status-offline"}></div>
        <div className="status-text">{profileInfo.online ? "Connected" : "disconnected"}</div>
      </div>

    </div>
  );
}

export default Element