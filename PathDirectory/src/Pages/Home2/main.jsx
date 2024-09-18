import SlideShow from '../FunçõesGlobais/Slide/slideShow';
import '../Home2/main.css'
import '../../../public/Midias/trilha02.png'


function Mainnn () {
return(

<div>

<div className="backCarrosel">
    <div className="carrosel"><SlideShow/></div>
    <div className="slogan">
      <h4>Guie seus primeiros passos <strong>com quem já trilhou o caminho.</strong></h4>
      <h4>Playlists,guias e insigths para sua jornada profissional.</h4>
    </div>
    <div >
      <img className="trilha" src="../../../public/Midias/trilha02.png" alt="icone de trilha" />
    </div>
    <div className="Csuaconta">
        <a href="">Crie sua conta</a>
    </div> 
</div>
<div className='orientacao'>
  
  <h3 className='orientacao-filho'>Assista também</h3>

  <div className='videos'>
      <iframe className='videos_1' width="560" height="315" 
      src="https://www.youtube.com/embed/6dNiED1dlhA" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>

  </div>
</div>



<div className="Qsomos">

    <h3 className='Qsomos_filho'>Quem Somos</h3>
    <div className='txt01'>
      <h4>Somos uma plataforma colaborativa voltada para o meio educativo, onde profissionais e estudantes
      criam perfis e compartilham playlists e roadmaps</h4>
      <h4>com conteúdo acadêmico de qualidade.</h4>
    </div>
    
    <div className='txt02'>
      <h4>Com essas playlists, criadas por pessoas do meio ao qual o conteúdo se refere, você pode otimizar 
        seu tempo e sua produtividade,além de se poupar de fazer</h4>
      <h4>buscas que levariam horas para encontrar um conteúdo de qualidade.</h4>
      <h4></h4>
    </div>

</div>
</div>


)
}

export default Mainnn;