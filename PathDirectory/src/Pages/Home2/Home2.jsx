import { useState } from "react";
import '../Home/Home.css'
import '../../../public/Midias/Logo-lite.png'

function Home2(props) {
    return( 
    <div className="header">
        
      <div className="cabecalho" >
            
        <img className="logo"   src="../../../public/Midias/Logo-lite.png" alt="Logo Path Carrer" />
          <a className="cabecalho_links" href={props.L1}> {props.n1} </a>
          <a className="cabecalho_links" href={props.L2}> {props.n2} </a>
          <a className="cabecalho_links" href={props.L3}> {props.n3} </a>    
      </div>
    </div>
)}

export default Home2;