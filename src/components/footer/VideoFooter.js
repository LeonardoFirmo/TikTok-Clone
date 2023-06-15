import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Leonardo Firmo</h3>
        <p>Gato pulando</p>
        <div className="videoFooter__music"> 
          <MusicNoteIcon className="videoFooter__icon"/>

          <div className="videoFooterMusic__text">
            <p>Título da musica</p>
          </div>
          
        </div>
      </div>

      <img 
        className="videoFooter__record"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z" 
        alt="Imagem de um vinil girando" 
      />

    </div>
  );
}

export default VideoFooter;
