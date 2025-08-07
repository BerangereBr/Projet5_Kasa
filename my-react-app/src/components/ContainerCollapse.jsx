import datas from '../../about.json'
import Collapse from "./Collapse";


function ContainerCollapse() {

  return (
    <div className="containerCollapse">
      {datas.map((data, index) => (
      <Collapse key={index} titre={data.titre} paragraphe={data.paragraphe}/>))}
    </div>
  );
}

export default ContainerCollapse
