// import {Table} from "react-bootstrap";
import { Table } from "antd";
import {useLocation} from "react-router-dom";

const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    width: "10%",
    align: 'center',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    align: 'center',
    width: "70%",
  },
  {
    title: '业务方向',
    dataIndex: 'field',
    width: "20%",
    align: 'center',
    onCell: (_, index) => {
      if (index === 0) {
        return { rowSpan: 14 };
      }
      if (index === 14) {
        return { rowSpan: 14 }
      }
      if (index === 28) {
        return { rowSpan: 5 }
      }
      if (index !== 0 && index !== 14 && index !== 28) {
        return { rowSpan: 0 };
      }

      return {};
    },
  },
];

const columns_en = [
  {
    title: '#',
    dataIndex: 'number',
    width: "10%",
    align: 'center',
  },
  {
    title: 'Product',
    dataIndex: 'name',
    align: 'center',
    width: "70%",
  },
  {
    title: 'Field',
    dataIndex: 'field',
    width: "20%",
    align: 'center',
    onCell: (_, index) => {
      if (index === 0) {
        return { rowSpan: 14 };
      }
      if (index === 14) {
        return { rowSpan: 14 }
      }
      if (index === 28) {
        return { rowSpan: 5 }
      }
      if (index !== 0 && index !== 14 && index !== 28) {
        return { rowSpan: 0 };
      }

      return {};
    },
  },
];

const data= [
  {
    key: '1',
    number: '1',
    name: '10KVA、6KVA高压变频器以及年度维修维护服务',
    field: '电气',
  },
  {
    key: '2',
    number: '2',
    name: '380VAC低压变频器及控制柜以及年度维修维护服务',
  },
  {
    key: '3',
    number: '3',
    name: '电厂用UPS及旁路柜、电池组/柜等以及年度维修维护服务',
  },
  {
    key: '4',
    number: '4',
    name: '直流屏、直流充电系统以及年度维修维护服务',
  },
  {
    key: '5',
    number: '5',
    name: '电气小三箱（照明配电箱、就地控制箱、开关箱、紧停箱、检修电源箱等)',
  },
  {
    key: '6',
    number: '6',
    name: '电能计量系统及年度维修维护服务',
  },
  {
    key: '7',
    number: '7',
    name: '柴发系统及柴发电气系统，以及年度维修维护',
  },
  {
    key: '8',
    number: '8',
    name: '高压电容电感（高压补偿）',
  },
  {
    key: '9',
    number: '9',
    name: '低压电容电感（低压补偿）',
  },
  {
    key: '10',
    number: '10',
    name: '中高压断路器',
  },
  {
    key: '11',
    number: '11',
    name: '高压配电柜',
  },
  {
    key: '12',
    number: '12',
    name: '低压配电柜',
  },
  {
    key: '13',
    number: '13',
    name: '高压电机、低压电机、各类电缆',
  },
  {
    key: '14',
    number: '14',
    name: '灯具及照明系统',
  },
  {
    key: '15',
    number: '15',
    name: 'DCS控制系统及年度维修维护服务',
    field: '热工、仪表自控',
  },
  {
    key: '16',
    number: '16',
    name: '辅控系统，包括输煤PLC控制系统、除灰除渣PLC控制系统、凝结水PLC控制系统以及其他辅控PLC控制系统',
  },
  {
    key: '17',
    number: '17',
    name: '水质分析仪表及年度维修维护服务',
  },
  {
    key: '18',
    number: '18',
    name: '压力变送器、温度变送器、热电偶热电阻等',
  },
  {
    key: '19',
    number: '19',
    name: '流量计，包括电磁流量计、质量流量计、涡街流量计等',
  },
  {
    key: '20',
    number: '20',
    name: '物位仪表，包括雷达料位计、雷达液位计、超声波料（液）位计等',
  },{
    key: '21',
    number: '21',
    name: '称重仪表，包括称重传感器以及配套仪表',
  },
  {
    key: '22',
    number: '22',
    name: '火检系统',
  },{
    key: '23',
    number: '23',
    name: '仪表柜、阀岛箱、电磁阀柜、气动柜',
  },
  {
    key: '24',
    number: '24',
    name: '气体检测、有毒气体（液体）检测仪表及控制系统，个人防护产品等',
  },
  {
    key: '25',
    number: '25',
    name: '各类工业交换机、各类阀门',
  },
  {
    key: '26',
    number: '26',
    name: '监控系统，包括包括弱电监控系统、门禁监控系统、安防系统、变电站综合自动化监控系统等的设计、集成、组态调试和系统维护；',
  },
  {
    key: '27',
    number: '27',
    name: '汽轮机空气间隙传感器系统、汽轮机键相轴向测量传感器系统、磁通密度测量传感器系统',
  },
  {
    key: '28',
    number: '28',
    name: '楼宇自动化系统',
  },
  {
    key: '29',
    number: '29',
    name: '除尘配件和整机除尘设备，除尘配件包括：过滤布袋、除尘滤袋（过滤滤袋）、除尘骨架（袋笼）、电磁脉冲阀、膜片、卸料器等一系列除尘配件产品' +
      '，除尘设备包括：布袋除尘器，旋风除尘器，湿式除尘器，静电除尘器等其它配套产品',
    field: '其他',
  },
  {
    key: '30',
    number: '30',
    name: '电磁振动设备、电磁振动给料机',
  },
  {
    key: '31',
    number: '31',
    name: '能源管理系统',
  },
  {
    key: '32',
    number: '32',
    name: '施工人员、工作人员、移动设备等定位管理系统',
  },
  {
    key: '33',
    number: '33',
    name: '智能配电箱/柜',
  },
];

const data_en= [
  {
    key: '1',
    number: '1',
    name: '10KVA, 6KVA high voltage frequency convertor and annual maintenance service',
    field: 'Electical & Automation',
  },
  {
    key: '2',
    number: '2',
    name: '380VAC low voltage frequency convertor and control cabinet and annual maintenance service',
  },
  {
    key: '3',
    number: '3',
    name: 'UPS and bypass cabinets, battery packs/cabinets, etc. and annual maintenance service',
  },
  {
    key: '4',
    number: '4',
    name: 'DC screen, DC charging system and annual maintenance service',
  },
  {
    key: '5',
    number: '5',
    name: 'lighting distribution box, local control box, switch box, emergency stop box, maintenance power box, etc.',
  },
  {
    key: '6',
    number: '6',
    name: 'Electric metering system and annual maintenance service',
  },
  {
    key: '7',
    number: '7',
    name: 'Diesel motor and diesel electrical system, as well as annual maintenance service',
  },
  {
    key: '8',
    number: '8',
    name: 'High voltage capacitor and inductor (high voltage compensation)',
  },
  {
    key: '9',
    number: '9',
    name: 'Low voltage capacitor and inductor (low voltage compensation)',
  },
  {
    key: '10',
    number: '10',
    name: 'Medium and high voltage circuit breakers',
  },
  {
    key: '11',
    number: '11',
    name: 'High voltage distribution cabinet',
  },
  {
    key: '12',
    number: '12',
    name: 'Low voltage distribution cabinet',
  },
  {
    key: '13',
    number: '13',
    name: 'High voltage motors, low voltage motors, cables',
  },
  {
    key: '14',
    number: '14',
    name: 'Lamps and lighting system',
  },
  {
    key: '15',
    number: '15',
    name: 'DCS control system and annual maintenance service',
    field: 'Thermal Engineering & Instrumentation',
  },
  {
    key: '16',
    number: '16',
    name: 'Auxiliary control system, including coal conveying PLC control system, ash and slag removal PLC control ' +
      'system, condensate water PLC control system and other auxiliary control PLC control systems',
  },
  {
    key: '17',
    number: '17',
    name: 'Water quality analytical instruments and annual maintenance services',
  },
  {
    key: '18',
    number: '18',
    name: 'Pressure transmitter, temperature transmitter, thermocouple, thermal resistor, etc.',
  },
  {
    key: '19',
    number: '19',
    name: 'Flow meters, including electromagnetic flow meters, mass flow meters, vortex flow meters, etc.',
  },
  {
    key: '20',
    number: '20',
    name: 'Level instruments, including radar level meter, radar liquid level meter, ultrasonic material (liquid) level meter, etc.',
  },{
    key: '21',
    number: '21',
    name: 'Weighing instruments, including weighing sensors and supporting instruments',
  },
  {
    key: '22',
    number: '22',
    name: 'Fire detection system',
  },{
    key: '23',
    number: '23',
    name: 'Instrument cabinet, valve island box, solenoid valve cabinet, pneumatic cabinet',
  },
  {
    key: '24',
    number: '24',
    name: 'Gas detection, toxic gas (liquid) detection instruments and control systems, personal protection products, etc.',
  },
  {
    key: '25',
    number: '25',
    name: 'Industrial switches, valves',
  },
  {
    key: '26',
    number: '26',
    name: 'Monitoring system, including the design, integration, configuration debugging and system ' +
      'maintenance of weak current monitoring system, access control system, security system, ' +
      'substation integrated automation monitoring system, etc.',
  },
  {
    key: '27',
    number: '27',
    name: 'Steam turbine air gap sensor system, steam turbine key phase axial measurement sensor system,' +
      ' magnetic flux density measurement sensor system',
  },
  {
    key: '28',
    number: '28',
    name: 'Building Automation Systems',
  },
  {
    key: '29',
    number: '29',
    name: 'Bag Filter Equipment, Dust-removing equipment and filter-bag, Bearing, Belt, Gears and racks, Shaft, Sealing element',
    field: 'Other',
  },
  {
    key: '30',
    number: '30',
    name: 'electromagnetic vibrating conveyor and electro-vibrating feeder',
  },
  {
    key: '31',
    number: '31',
    name: 'Energy Management System',
  },
  {
    key: '32',
    number: '32',
    name: 'Location management system for construction personnel, staff, mobile equipment, etc.',
  },
  {
    key: '33',
    number: '33',
    name: 'Intelligent distribution box/cabinet',
  },
];


function Summary() {

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


  if (useLocation().hash === "") {
    window.scrollTo(0, 0);
  }

  return(
    <div className={"General-content"}>
      {isChinese?
        <div className={"General-title"} id="summary-top">
          业务产品总览表
        </div>
        :
        <div className={"General-title"} id="summary-top">
          Product Summary Table
        </div>
      }
      {isChinese?
        <div className={"Business-subtitle"}>
          用于市政（自来水、污水）建材、化工行业（生物化工）、发电行业、煤矿的产品汇总
        </div>
        :
        <div className={"Business-subtitle-en"}>
          Products summary for municipal (tap water, sewage) building materials, chemical industry (biochemical
          industry), power generation industry, coal mines
        </div>
      }

      <hr className={"General-hr"}/>
      <div className={"Business-summary-table"}>
        {isChinese?
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
          />
          :
          <Table
            columns={columns_en}
            dataSource={data_en}
            bordered
            pagination={false}
          />
        }

      </div>
    </div>
  );
}

export default Summary;