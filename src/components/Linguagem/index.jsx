import brasil from '../../assets/flags/brasil.png'
import spain from '../../assets/flags/spain.png'
import usa from '../../assets/flags/usa.png'

import { useTranslation } from 'react-i18next'

import './style.css';


const languagesOptions = [
   {
   name: "Português",
   value: "ptBR",
   flag : brasil
   },
   {
       name: "Espanhol",
       value: "esp",
       flag : spain
       },
       {
           name: "English",
           value: "en",
           flag : usa
       },
   ]
   



 export function Linguagem() {
  


   const{ t, i18n } = useTranslation();
  
    return (
      <div>
          
      <div className="background_Portugues"></div>
       <h1 id='portugues' >Português</h1> 
       <button  className="bottomPortugues"> <img src='src\assets\flags\brazil.png'></img></button>
     
      
    
       <div className="background_Ingles"></div>
       <h1 id="ing" >Inglês</h1> 
       <button type="button" className="bottomIngles" ><img src = 'src/assets/flags/united-states.png'></img></button>
  
   
    <div className="background_Espanhol"> </div>
       <h1 id='espanhol'  >Espanhol</h1> 
       <button  className="bottomEspanhol"  ><img src='src\assets\flags\spain.png'></img></button>

 
       </div>


  )
}

