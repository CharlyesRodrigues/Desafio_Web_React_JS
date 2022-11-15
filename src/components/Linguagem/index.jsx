

import './style.css';


 export function Linguagem(props) {
  



  
    return (
      <div>
          
      <div className="background_Portugues"></div>
       <h1 id='portugues' >Português</h1> 
       <button  className="bottomPortugues"  onclick="myFunction()"> <img src='src\assets\flags\brazil.png'></img></button>
     
      
    
       <div className="background_Ingles"></div>
       <h1 id="ing" >Inglês</h1> 
       <button type="button" className="bottomIngles" onclick ="teste()"></button>
  
   
    <div className="background_Espanhol"> </div>
       <h1 id='espanh'  >Espanhol</h1> 
       <button  className="bottomEspanhol" onclick = "teste()" ><img  src='src\assets\flags\spain.png'></img></button>

 
  </div>


  )
}

