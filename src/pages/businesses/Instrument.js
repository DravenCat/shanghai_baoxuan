import {useLocation} from "react-router-dom";
import instrument1 from "../../img/instrument/instrument1.png";
import instrument2 from "../../img/instrument/instrument2.png";
import instrument3 from "../../img/instrument/instrument3.png";
import instrument4 from "../../img/instrument/instrument4.png";
import instrument5 from "../../img/instrument/instrument5.png";


function Instrument() {

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
          热工、仪表自控业务
        </div>
        :
        <div className={"General-title"}>
          Thermal Engineering
          & Instrumentation
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="transmitter">
          <li className={"Business-text-subtitle"}>
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
        :
        <div className={"General-text Business-text"} id="transmitter">
          <li className={"Business-text-subtitle"}>
            Transmitter & Instruments
          </li>
          - Pressure transmitter/Differential pressure transmitter; Temperature transmitter
          <br/>
          - Thermal resistance, Thermocouple
          <br/>
          - Radar level gauge, Liquid/Solid level gauge
          <br/>
          - Flowmeter, Electromagnetic Flowmeter, Vortex Flowmeter, Mass flowmeter
          <br/>
          - Weighing instrument, Load cell
          <br/>
          - Analytical instruments, Gas detection instrument
          <br/>
          - Service: Hardware integration, Site commissioning, after-sales service
          including annual maintenance, etc.
          <br/>
          - Brand: Honeywell, Siemens, ABB, Emerson, Endress+Hauser, Vega, china local brand ...
          <img src={instrument1} alt="Transmitter" className="Business-single-image" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="solution">
          <li className={"Business-text-subtitle"}>
            液压与气动方案
          </li>
          - 提供完整的的气动方案，包括气缸、电磁阀、过滤减压阀、气动柜、气动设备集成柜体和元件供应
          <br/>
          - 提供完整的液压方案，包括液压缸、液压阀、比例阀等零部件、液压设备集成柜体和元件供应
          <br/>
          - 相关品牌: 诺冠（Norgren）, SMC, 费斯托（Festo）, 博世力士乐（Bosch Rexroth）, 派克（Parker）, 中国本地品牌等
          <img src={instrument2} alt="Solution" className="Business-single-image" />
        </div>
        :
        <div className={"General-text Business-text"} id="solution">
          <li className={"Business-text-subtitle"}>
            Pneumatic &
            Hydraulic Solution
          </li>
          - Provide comprehensive pneumatic solutions, including cylinder, solenoid valve, Filter regulator, pneumatic cabinet...
          <br/>
          - Provide comprehensive hydraulic solutions, including hydraulic cylinder, Hydraulic valve, proportional valve,
          and other components, hydraulic cabinet
          <br/>
          - Brand: Norgren, SMC, Festo, Bosch Rexroth, Parker, china local brand ...
          <img src={instrument2} alt="Solution" className="Business-single-image" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="valve">
          <li className={"Business-text-subtitle"}>
            阀门集成方案与备件
          </li>
          - 提供完整的阀门集成方案和阀门备件，包括球阀、碟阀、各种水阀、电动阀门、气动阀门、调节阀、开关阀、闸阀
          <br/>
          - 提供电动执行器、气动执行器、阀门定位器等产品
          <br/>
          - 相关品牌: 西门子（Siemens）, ABB, 费希尔（Fisher）, 罗托克（Rotork）, 中国本地品牌等
          <img src={instrument3} alt="Valve" className="Business-single-image" />
        </div>
        :
        <div className={"General-text Business-text"} id="valve">
          <li className={"Business-text-subtitle"}>
            Valve & Actuator
          </li>
          - Valve, including Electric Valve, Pneumatic valve, Regulating valve, on-off valve, Gate valve...
          <br/>
          - Electric actuator, Pneumatic actuator
          <br/>
          - Valve positioner
          <br/>
          - Brand: ABB, Siemens, Fisher, Rotork, chinese local product...
          <img src={instrument3} alt="Valve" className="Business-single-image" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="burner">
          <li className={"Business-text-subtitle"}>
            燃烧器及其备件
          </li>
          - 相关品牌: 霍尼韦尔（Honeywell）, 中国本地品牌等
          <img src={instrument4} alt="Burner" className="Business-single-image" />
        </div>
        :
        <div className={"General-text Business-text"} id="burner">
          <li className={"Business-text-subtitle"}>
            Burner and Burner components
          </li>
          - Brand: Honeywell, chinese local product...
          <img src={instrument4} alt="Burner" className="Business-single-image" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="monitor">
          <li className={"Business-text-subtitle"}>
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
        :
        <div className={"General-text Business-text"} id="monitor">
          <li className={"Business-text-subtitle"}>
            Monitoring System
          </li>
          - Video monitoring systems, including the design, integration, configuration debugging and system maintenance of
          weak current monitoring systems, access control systems, security systems, substation
          integrated automation monitoring systems, etc.
          <br/>
          - Building Automation
          <br/>
          - Brand: Honeywell, Siemens, Johnson Controls, Schneider, chinese local product, Hikvision, Dahua...
          <img src={instrument5} alt="Monitor" className="Business-single-image" />
        </div>
      }
    </div>
  );
}

export default Instrument;