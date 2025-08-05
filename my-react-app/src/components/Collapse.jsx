import { useState } from "react"
import datas from '../../about.json'
import closeVecteur from '../assets/closeVecteur.png'
import openVecteur from '../assets/openVecteur.png'


function Collapse() {
  const [open, setOpen] = useState([]);
  const isOpen = (index) => { 
    if (open.includes(index)){
      setOpen(open.filter((i) => i !==index));
    }else{
      setOpen([...open, index])
    }
  }
  
  return (
    <div className="containerCollapse">
      {datas.map((data, index) => (
        <div className="collapse" key={index}>
          <div>
            <div className="collapse__title">
              <h1>{data.titre}</h1>
              <button onClick={() => isOpen(index)}>
                <img src={open.includes(index) ? openVecteur : closeVecteur} alt="vecteur"/>
              </button>
            </div>
          </div>
          {open.includes(index) && <p>{data.paragraphe}</p>}
        </div>
      ))}
    </div>
  );
}

export default Collapse
