



import { useTranslation } from 'react-i18next';
import './style.css'; /* como já estamos dentro da página home 
importamos dessa forma*/

import { Linguagem } from "../../components/Linguagem/index"



export function Home() {

const lista1 = ["JavaScript","React","Vue Js", "Tailwind CSS"];
  const coluna1 = lista1.map(

    (a)=> <ul><li>{a}</li></ul>

  )
  const lista2 = ["Styled Components", "Saas", "Node", "TypeScript"];
  const coluna2 = lista2.map(

(b)=> <ul><li>{b}</li></ul>

  )
  const lista3 = ["Angular", "Java"];
  const coluna3 = lista3.map(

(c)=> <ul><li>{c}</li></ul>

  )
  
   
  let { t } = useTranslation();  
    return (
  
            <div className="Header">
          <h1>{t('welcomeTo')} </h1>
               <div className='Logo' > </div>
               <img className='imagem1' src='src\assets\Logo\logo.png'></img>
              
            <div className=' Rectangle4234'> </div>
            
            <div className='div1'>{coluna1}</div> 
            <div className='div2'>{coluna2}</div> 
            <div className='div3'>{coluna3}</div> 
              
               <Linguagem />   
               
           </div>
    
    )
  }
