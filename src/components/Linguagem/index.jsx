import brasil from '../../assets/flags/brasil.png'
import spain from '../../assets/flags/spain.png'
import usa from '../../assets/flags/usa.png'

import { useTranslation } from 'react-i18next'

import './style.css';


const languagesPortugues = [
   {
   name: "Português",
   value: "ptBR",
   flag : brasil
   },
  
   ]
   
   
const languagesEspanhol = [
  {
  name: "Espanhol",
  value: "esp",
  flag : spain
  },
 
  ]

  const languagesEnglish = [
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
          
          {languagesPortugues.map((languagesPortugue)=>(
<button id='background_Portugues'
key={languagesPortugue.value}
onClick = {()=>{

i18n.changeLanguage (languagesPortugue.value);

}}

>
<img className='imagem1' src='src\assets\flags\brasil.png' />

<div >
<div className='idiomas'>
<span>{languagesPortugue.name}</span>
</div>
</div>

</button>

))}


{languagesEspanhol.map((languagesEspanho)=>(
<button id='background_Espanhol'
key={languagesEspanho.value}
onClick = {()=>{

i18n.changeLanguage (languagesEspanho.value);

}}

>
<img className='imagem1' src='src\assets\flags\spain.png' />

<div >
<div className='idiomas'>
<span>{languagesEspanho.name}</span>
</div>
</div>

</button>

))}

{languagesEnglish .map((languagesEnglis )=>(
<button id='background_English'
key={languagesEnglis.value}
onClick = {()=>{

i18n.changeLanguage (languagesEnglis.value);

}}

>
<img className='imagem1' src='src\assets\flags\usa.png' />

<div >
<div className='idiomas'>
<span>{languagesEnglis.name}</span>
</div>
</div>

</button>

))}



          
      <div className="background_Portugues"></div>

       <button  className="bottomPortugues"> <img src='src\assets\flags\brazil.png'></img></button>
     
      
    
       <div className="background_Ingles"></div>
       
       <button type="button" className="bottomIngles" ><img src = 'src/assets/flags/united-states.png'></img></button>
  
   
    <div className="background_Espanhol"> </div>
     
       <button  className="bottomEspanhol"  ><img src='src\assets\flags\spain.png'></img></button>

 
       </div>


  )
}

