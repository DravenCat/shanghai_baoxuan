import dcs_plc from "../../img/dcs_plc/p00.png";
import convertor from "../../img/electrical/electrical2.png";
import powersystem from "../../img/electrical/electrical3.png";
import lightingsystem from "../../img/electrical/electrical4.png";
import {useLocation} from "react-router-dom";


function Electrical() {
  let hash = useLocation().hash
  if (hash === "") {
    window.scrollTo(0, 0);
  }

  return(
    <div className={"General-content"}>
      <div className={"General-title"} id="electrical-top">
        电气业务
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="DCS_PLC">
        <li>
          DCS/PLC 系统集成
        </li>
        - DCS/PLC系统集成，包括系统控制柜、HMI（触摸屏）、自动化网络（PC操作站、工程师站、电缆、光缆、网关）、软件编程
        <br/>
        - 服务内容：硬件集成、软件编程调试、现场安装调试及服务等、售后服务包括年度维修维护等
        <br/>
        - 相关品牌：西门子, AB, 施耐德, 霍尼韦尔, 通用电气, 欧姆龙, 三菱, 菲尼克斯, 魏德米勒
        <img src={dcs_plc} className={"Business-single-image"} alt="DCS/PLC" />
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="convertor">
        <li>
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
        - 相关品牌：西门子, AB, ABB, 施耐德, 丹佛斯, 诺德, Lenze, 弗兰德, 安川电机, 三菱, PBA, 中国本地品牌等
        <img src={convertor} className={"Business-single-image"} alt={"Convertor"}/>
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="powersystem">
        <li>
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
        - 服务内容：硬件集成、现场安装调试及服务等、售后服务包括年度维修维护等
        <br/>
        - 相关品牌：西门子, ABB, 施耐德, 通用电气, 伊顿, 三菱, 中国本地品牌等
        <img src={powersystem} className={"Business-single-image"} alt="PowerSystem" />
      </div>
      <hr className={"General-hr"}/>
      <div className={"General-text"} id="lightingsystem">
        <li>
          灯具与照明系统
        </li>
        - LED灯具、包含工矿灯、路灯、LED投光灯、LED荧光、LED三防吸顶灯等
        <br/>
        - 应急照明集中电源箱以及其它照明配电箱
        <img src={lightingsystem} className={"Business-single-image"} alt="Light" />
      </div>
    </div>
  );
}

export default Electrical;