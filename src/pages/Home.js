import homePageImg from "../img/home/homePageImg3.png"
import electricalImg from "../img/home/electrical.jpg"
import transmitterImg from "../img/home/trasmitter3.png"
import otherImg from "../img/home/other3.png"

import './Home.css'
import {Button, Card, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";


function Home() {

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

  let getURL = useLocation().pathname;


  return (
    <div className={"Home"}>
      <div className={"Home-body"}>
        {isChinese ?
          <Row>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={homePageImg} alt="Image" id={"Home-page-img"}/>
            <div className={"text-on-image"}>上海宝宣自动化控制系统有限公司</div>
          </Row>
          :
          <Row>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={homePageImg} alt="Image" id={"Home-page-img"}/>
            <div className={"text-on-image-en"}>
              Shanghai Baoxuan Automation Control System Co.,Ltd
              <br/>
              HongKong Baoship International Engineering Co.,Ltd
            </div>
          </Row>
        }

        <Row className={"Home-content-title"}>
          {
            isChinese ?
              <div>
                公司业务范围及产品简介
              </div>
              :
              <div>
                Company Business and Product
              </div>
          }
        </Row>
        <Row className={"Home-content"}>

          <Card style={{width: "33.333%"}}>
            <Card.Img variant="top" src={transmitterImg} className={"home-card-img"}/>
            {isChinese ?
              <Card.Body>
                <Card.Title>热工、仪表自控业务</Card.Title>
                <Card.Text>
                  涉及DCS/PLC控制系统、压力/温度变送器、流量计、仪表（物位、称重、气体检测、水质分析）、工业交换机与阀门、火检系统、监控系统、传感器等产品
                </Card.Text>
                <Button variant="primary" href="/business/instrument">详细信息</Button>
              </Card.Body>
              :
              <Card.Body>
                <Card.Title>Thermal engineering & instrumentation</Card.Title>
                <Card.Text>
                  Including DCS/PLC control systems, pressure/temperature transmitters, flow meters, instruments
                  (level gauge, weighing, gas detection, Analytical), switches and valves,
                  fire detection systems, monitoring systems, sensors and other products
                </Card.Text>
                <Button variant="primary" href="/business/instrument?language=en">Details</Button>
              </Card.Body>
            }
          </Card>

          <Card style={{width: "33.334%"}}>
            <Card.Img variant="top" src={electricalImg} className={"home-card-img"}/>
            {isChinese?
              <Card.Body>
                <Card.Title>电气业务</Card.Title>
                <Card.Text>
                  涉及工业自动化系统（PLC、DCS）、电气传动工程（高低电机和变频器/柜）、UPS电池组/柜、直流电系统、高低压电容、配电柜、断路器、灯具等产品
                </Card.Text>
                <Button variant="primary" href="/business/electrical">详细信息</Button>
              </Card.Body>
              :
              <Card.Body>
                <Card.Title>Electrical & Automation</Card.Title>
                <Card.Text>
                  Including industrial automation systems (PLC, DCS), electrical transmission engineering (high and low
                  motors, convertors and cabinets), UPS battery packs, DC power systems, high and low voltage
                  capacitors, distribution cabinets, circuit breakers, lamps and other products
                </Card.Text>
                <Button variant="primary" href="/business/electrical?language=en">Details</Button>
              </Card.Body>
            }
          </Card>

          <Card style={{width: "33.333%"}}>
            <Card.Img variant="top" src={otherImg} className={"home-card-img"}/>
            {isChinese ?
              <Card.Body>
                <Card.Title>其他自动化业务</Card.Title>
                <Card.Text>
                  涉及除尘配件和整机除尘设备和元件供应、电磁振动输送设备、电磁振动给料机、能源管理系统、定位管理系统、智能配电箱/柜等产品
                </Card.Text>
                <Button variant="primary" href="/business/other">详细信息</Button>
              </Card.Body>
              :
              <Card.Body>
                <Card.Title>Other</Card.Title>
                <Card.Text>
                  Including filter equipments, dust-removing equipment, electromagnetic vibration
                  conveyor, electro-vibrating feeder, energy management system, positioning management system,
                  intelligent distribution box/cabinet and other products
                </Card.Text>
                <br/>
                <Button variant="primary" href="/business/other?language=en">Details</Button>
              </Card.Body>
            }
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default Home;