import { useState } from "react"
import datas from '../../about.json'

function Collapse() {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <div>
      {datas.map((data, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {data.titre}
          </button>
          {openIndex === index && <p>{data.paragraphe}</p>}
        </div>
      ))}
    </div>
  );
}

export default Collapse
