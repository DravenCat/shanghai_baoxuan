import {useLocation} from "react-router-dom";
import other1 from "../../img/other/other1.png";
import other2 from "../../img/other/other2.png";


function Other() {

  const getLanguage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.get('language');
    if (language === "en") {
      return 0;
    }
    return 1;
  }

  // 1 chinese, 0 english
  let isChinese = getLanguage();

  let hash = useLocation().hash
  if (hash === "") {
    window.scrollTo(0, 0);
  }

  return(
    <div className={"General-content"}>
      {isChinese?
        <div className={"General-title"}>
          其他自动化业务
        </div>
        :
        <div className={"General-title"}>
          Other
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="vibration">
          <li className={"Business-text-subtitle"}>
            电磁振动设备
          </li>
          - 电磁振动输送设备、电磁振动给料机及其配件
          <br/>
          - 相关品牌：法国世感（SCAIME）
          <img src={other1} alt="electromagnetic vibrating conveyor" className="Business-single-image" />
        </div>
        :
        <div className={"General-text Business-text"} id="vibration">
          <li className={"Business-text-subtitle"}>
            Electromagnetic Vibration Equipment
          </li>
          - Electromagnetic vibrating conveyor, and its spare parts
          <br/>
          - Electro-vibrating feeder, and spare parts
          <br/>
          - Brand: SCAIME
          <img src={other1} alt="electromagnetic vibrating conveyor" className="Business-single-image" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="filter">
          <li className={"Business-text-subtitle"}>
            除尘配件和整机设备
          </li>
          - 除尘配件和整机除尘设备，除尘配件包括：过滤布袋、除尘滤袋（过滤滤袋）、除尘骨架（袋笼）、电磁脉冲阀、膜片、卸料器等一系列除尘配件产品
          <br/>
          - 除尘设备包括：布袋除尘器，旋风除尘器，湿式除尘器，静电除尘器等其它配套产品
          <img src={other2} alt="Filter Equipment" className="Business-single-image" />
        </div>
        :
        <div className={"General-text Business-text"} id="filter">
          <li className={"Business-text-subtitle"}>
            Filter Equipment
          </li>
          - Bag Filter Equipment, Dust-removing equipment, and its spare parts
          <br/>
          - Filter-bag, Bearing, Belt, Gears and racks, Shaft, Sealing element
          <img src={other2} alt="Filter Equipment" className="Business-single-image" />
        </div>
      }

    </div>
  );
}

export default Other;