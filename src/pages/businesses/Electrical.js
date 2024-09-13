import dcs_plc from "../../img/dcs_plc/p00.png";
import convertor from "../../img/electrical/electrical2.png";
import powersystem from "../../img/electrical/electrical3.png";
import lightingsystem from "../../img/electrical/electrical4.png";
import {useLocation} from "react-router-dom";


function Electrical() {

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
        <div className={"General-title"} id="electrical-top">
          电气业务
        </div>
        :
        <div className={"General-title"} id="electrical-top">
          Electrical & Automation
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="DCS_PLC">
          <li className={"Business-text-subtitle"}>
            DCS/PLC 系统集成
          </li>
          - DCS/PLC系统集成，包括系统控制柜、HMI（触摸屏）、自动化网络（PC操作站、工程师站、电缆、光缆、网关）、软件编程
          <br/>
          - 服务内容：硬件集成、软件编程调试、现场安装调试及服务等、售后服务包括年度维修维护等
          <br/>
          - 相关品牌：西门子（Siemens）, AB, 施耐德（Schneider）, 霍尼韦尔（Honeywell）, 通用电气（GE）, 欧姆龙（Omron）,
          三菱（Mitsubishi）, 菲尼克斯（Phoenix）, 魏德米勒（Weidmuller）
          <img src={dcs_plc} className={"Business-single-image"} alt="DCS/PLC" />
        </div>
        :
        <div className={"General-text Business-text"} id="DCS_PLC">
          <li className={"Business-text-subtitle"}>
            DCS/PLC System Integration
          </li>
          DCS/PLC system integration, including system control cabinet, HMI (Touch Screen), Automated network
          (PC Operation Station, Engineering Station,cable, optical cable, gateway), Software programming
          <br/>
          - Service: Hardware integration, Software programming, Site commissioning, after-sales service
          including annual maintenance, etc.
          <br/>
          - Brand：Siemens, AB, Schneider, Honeywell, GE, OMRON, Mitsubishi, Phoenix, WEIDMULLER...
          <img src={dcs_plc} className={"Business-single-image"} alt="DCS/PLC" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="convertor">
          <li className={"Business-text-subtitle"}>
            变频器/柜与电机
          </li>
          - MCC 柜生产集成、变频器/柜、软启动器/柜、电机启动器保护柜、伺服控制柜
          <br/>
          - 齿轮电机、齿轮减速器、变速箱、伺服电机、直线电机
          <br/>
          - 涉及电压等级：380~400VAC、6KV、10KV
          <br/>
          - 服务内容：硬件集成、现场安装调试及服务等、售后服务包括年度维修维护等
          <br/>
          - 相关品牌：西门子（Siemens）, AB, ABB, 施耐德（Schneider）, 丹佛斯（Danfoss）, 诺德（NORD）, Lenze, 弗兰德（Flender）,
          安川电机（Yaskawa）, 三菱（Mitsubishi）, PBA, 中国本地品牌等
          <img src={convertor} className={"Business-single-image"} alt={"Convertor"}/>
        </div>
        :
        <div className={"General-text Business-text"} id="convertor">
          <li className={"Business-text-subtitle"}>
            Convertor and Motor
          </li>
          - MCC cabinet, Frequency convertor/cabinet, Soft starter/cabinet, Motor starter protect cabinet, Servo control cabinet
          <br/>
          - Geared motor, Gear Reducer, Gearbox, Servo motor, Linear motor
          <br/>
          - Voltage level: 380~400VAC, 6KV, 10KV

          <br/>
          - Service：Hardware integration, Site commissioning, after-sales service
          including annual maintenance, etc.
          <br/>
          - Brand:  Siemens, AB, ABB, Schneider, Danfoss, NORD, Lenze, Flender, Yaskawa, Mitsubishi, PBA, china local brand...
          <img src={convertor} className={"Business-single-image"} alt={"Convertor"}/>
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="powersystem">
          <li className={"Business-text-subtitle"}>
            电力系统器/柜
          </li>
          - 高低压配电柜；开关柜；UPS及电池组柜体生产成套
          <br/>
          - CRPS、电力系统计算机继电保护、断路器（高/低压）、接触器、电能表
          <br/>
          - 智能直流屏、直流充电系统生产成套
          <br/>
          - 应急电源屏、柴油发电机电源柜体集成
          <br/>
          - 电气照明箱、电源箱、急停箱及其他定制柜/箱
          <br/>
          - 涉及电压等级: 220VAC, 380~400VAC, 6KV, 10KV, 110VDC, 220VDC
          <br/>
          - 服务内容：设计，硬件集成、现场安装调试及服务等、售后服务包括年度维修维护等
          <br/>
          - 相关品牌：西门子（Siemens）, ABB, 施耐德（Schneider）, 通用电气（GE）, 伊顿（EATON）, 三菱（Mitsubishi）, 中国本地品牌等
          <img src={powersystem} className={"Business-single-image"} alt="PowerSystem" />
        </div>
        :
        <div className={"General-text Business-text"} id="powersystem">
          <li className={"Business-text-subtitle"}>
            Power System
          </li>
          - High and low voltage distribution cabinet; Switch cabinet; UPS and battery pack
          <br/>
          - CRPS, Computer Relaying for Power Systems, Circuit breaker (Hihg/Low
          Voltage),Contactor, Electric energy meter
          <br/>
          - DC charging cabinet; Intelligent DC cabinet
          <br/>
          - Electrical lighting box, power box, Emergency stop box, and other customized
          cabinet/box
          <br/>
          - Voltage level: 220VAC, 380~400VAC, 6KV, 10KV, 110VDC, 220VDC
          <br/>
          - Service: Design, Hardware integration, Site commissioning, after-sales service
          including annual maintenance, etc.
          <br/>
          - Brand: Siemens, ABB, Schneider, GE, EATON, Mitsubishi, china local brand ...
          <img src={powersystem} className={"Business-single-image"} alt="PowerSystem" />
        </div>
      }

      <hr className={"General-hr"}/>
      {isChinese?
        <div className={"General-text Business-text"} id="lightingsystem">
          <li className={"Business-text-subtitle"}>
            灯具与照明系统
          </li>
          - LED灯具、包含工矿灯、路灯、LED投光灯、LED荧光、LED三防吸顶灯等
          <br/>
          - 应急照明集中电源箱以及其它照明配电箱
          <img src={lightingsystem} className={"Business-single-image"} alt="Light" />
        </div>
        :
        <div className={"General-text Business-text"} id="lightingsystem">
          <li className={"Business-text-subtitle"}>
            Lamps &
            Lighting systems
          </li>
          - Lighting System, LED lamp, LED street lamps, the LED tunnel lamps, the LED mining lamps, the LED flood lamps and the LED solar-wind complementary lamps
          <br/>
          - Emergency lighting centralized power supply box and other lighting distribution boxes
          <img src={lightingsystem} className={"Business-single-image"} alt="Light" />
        </div>
      }

    </div>
  );
}

export default Electrical;