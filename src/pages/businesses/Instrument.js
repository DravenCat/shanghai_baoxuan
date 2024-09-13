import {useLocation} from "react-router-dom";
import instrument1 from "../../img/instrument/instrument1.png";
import instrument2 from "../../img/instrument/instrument2.png";
import instrument3 from "../../img/instrument/instrument3.png";
import instrument4 from "../../img/instrument/instrument4.png";
import instrument5 from "../../img/instrument/instrument5.png";
import other1 from "../../img/other/other1.png";


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
        - 测量仪表集（仪表柜），包括压力差压变送器、温度变送器、传感器等
        <br/>
        - 流量仪表（仪表柜），包括电磁流量计、涡街流量计、质量流量计等
        <br/>
        - 分析仪表（仪表柜），包括PH计、电导率、硅表、钠表、浊度计等
        <br/>
        - 物位仪表，包括雷达料位计、超声波料位计、料位开关等
        <br/>
        - 称重仪表，包括称重传感器、接线盒、显示单元等
        <br/>
        - 气体检测仪表、有毒气体检测仪表及系统，个人防护产品
        <br/>
        - 服务内容：硬件集成、现场安装调试及服务等、售后服务包括年度维修维护等
        <br/>
        - 相关品牌：霍尼韦尔（Honeywell）, 西门子（siemens）, ABB, 艾默生（Emerson）, 恩德斯豪斯（E+H）, 维佳（Vega）, 中国本地品牌等
        <img src={instrument1} alt="Transmitter" className="Business-single-image" />
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="solution">
        <li>
          液压与气动方案
        </li>
        - 提供完整的的气动方案，包括气缸、电磁阀、过滤减压阀、气动柜、气动设备集成柜体和元件供应
        <br/>
        - 提供完整的液压方案，包括液压缸、液压阀、比例阀等零部件、液压设备集成柜体和元件供应
        <br/>
        - 相关品牌: 诺冠（Norgren）, SMC, 费斯托（Festo）, 博世力士乐（Bosch Rexroth）, 派克（Parker）, 中国本地品牌等
        <img src={instrument2} alt="Solution" className="Business-single-image" />
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="valve">
        <li>
          阀门集成方案与备件
        </li>
        - 提供完整的阀门集成方案和阀门备件，包括球阀、碟阀、各种水阀、电动阀门、气动阀门、调节阀、开关阀、闸阀
        <br/>
        - 提供电动执行器、气动执行器、阀门定位器等产品
        <br/>
        - 相关品牌: 西门子（Siemens）, ABB, 飞世尔（Fisher）, 罗托克（Rotork）, 中国本地品牌等
        <img src={instrument3} alt="Valve" className="Business-single-image" />

      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="burner">
        <li>
          燃烧器及其备件
        </li>
        - 相关品牌: 西门子（Siemens）, 中国本地品牌等
        <img src={instrument4} alt="Burner" className="Business-single-image" />

      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="monitor">
        <li>
          监控系统
        </li>
        - 监控系统，包括弱电监控系统、门禁监控系统、安防系统、变电站综合自动化监控系统等的设计、集成、组态调试和系统维护
        <br/>
        - 楼宇自动化系统
        <br/>
        - 相关品牌: 西门子（Siemens）, 霍尼韦尔（Honeywell）, 江森自控（Johnson Controls）, 施耐德（Schneider）, 中国本地品牌, 例如
        海康威视（Hikvision）, 大华（Dahua）等
        <img src={instrument5} alt="Monitor" className="Business-single-image" />

      </div>
    </div>
  );
}

export default Instrument;