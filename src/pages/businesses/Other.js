import {useLocation} from "react-router-dom";
import other1 from "../../img/other/other1.png";
import other2 from "../../img/other/other2.png";


function Other() {
  let hash = useLocation().hash
  if (hash === "") {
    window.scrollTo(0, 0);
  }

  return(
    <div className={"General-content"}>
      <div className={"General-title"}>
        其他自动化业务
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="vibration">
        <li>
          电磁振动设备
        </li>
        - 电磁振动输送设备、电磁振动给料机及其配件
        <br/>
        - 相关品牌：法国世感（SCAIME）
        <img src={other1} alt="electromagnetic vibrating conveyor" className="Business-single-image" />

      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="filter">
        <li>
          除尘配件和整机设备
        </li>
        - 除尘配件和整机除尘设备，除尘配件包括：过滤布袋、除尘滤袋（过滤滤袋）、除尘骨架（袋笼）、电磁脉冲阀、膜片、卸料器等一系列除尘配件产品
        <br/>
        - 除尘设备包括：布袋除尘器，旋风除尘器，湿式除尘器，静电除尘器等其它配套产品
        <img src={other2} alt="Filter Equipment" className="Business-single-image" />
      </div>
    </div>
  );
}

export default Other;