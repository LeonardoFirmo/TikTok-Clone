import React from 'react'
import './Comentario.css'

function Comentario({messages,handleChatClick}) {
  return (
    <div className="sidebar">
    <div  className="slidebar-header" style={{ borderBottom: "2px solid grey", width: "100%" }}>
      <span
        className=" videoSidebar_icones"
        onClick={handleChatClick}
        style={{ marginLeft: "95%", display: "inline-block" }}
      >
        X
      </span>
      <h2>{messages.length} Comentários</h2>
    </div>

    <ul className="sidebar-msgs" key={messages.msg}>
      {messages.map((message) => {
        return (
          <li key={message.msg}>
            <h3>{message.nome}</h3>
            <p>{message.msg}</p>
          </li>
        );
      })}
    </ul>

  </div>
  
  )
}

export default Comentario