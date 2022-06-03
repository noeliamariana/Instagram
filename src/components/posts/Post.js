import React from "react";
import { Postagens } from "../Postagens";
import { Story } from "../Story";
import { Sugestao } from "../Sugestao";
import "./Post.css";


function Post({ username, caption, imageUrl, usuario }) {
  return (

    // <div className="post">     

    // <div className="post__header">
    // <h3>{username}</h3>
    //  {/*  */} 
    // shift alt f
    //  <img className="usuario" src={usuario} alt={caption} title={caption}/>
    //  <img className="post__image" src={imageUrl} alt={caption} title={caption} />
    // </div>
    // </div>
    <>
      <div className="MainGrid">

        {/* PRIMEIRA COLUNA DO INSTGRAM A PARTE DAS POSTAGENS E OS STORYS*/}
        <div className="first-column" style={{ gridArea: "firstColumn" }}>



          <div className="box" >
            <Story /> {/* Importando o componente Story*/}
          </div>

          <div className="box" style={{ margin: "30px 0 10px" }}>
            <Postagens />
          </div>


        </div>

        <div style={{ gridArea: "secondColumn" }}>
          {/* SEGUNDA COLUNA DO INSTAGRAM, A PARTE DAS SUGESTÕES DE AMIZADE */}
          <div className="suggestionbox">
            {/* sugestão */}
            <Sugestao />
          </div>
        </div>
      </div>
    </>





  );
}

export default Post;

