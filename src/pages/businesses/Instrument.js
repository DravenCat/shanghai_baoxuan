import {useLocation} from "react-router-dom";


function Instrument() {
  let hash = useLocation().hash
  if (hash === "") {
    window.scrollTo(0, 0);
  }

  return(
    <div className={"General-content"}>
      <div className={"General-title"}>
        热工、仪表自控业务
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="transmitter">
        <li>
          测量/分析/检测仪表
        </li>
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="solution">
        <li>
          液压与气动方案
        </li>
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="valve">
        <li>
          阀门集成方案与备件
        </li>
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="burner">
        <li>
          燃烧器及其备件
        </li>
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="monitor">
        <li>
          监控系统
        </li>
      </div>
    </div>
  );
}

export default Instrument;