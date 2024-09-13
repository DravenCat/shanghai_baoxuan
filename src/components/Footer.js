import Container from 'react-bootstrap/Container';
import {DropdownDivider} from "react-bootstrap";

function Footer() {

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

  return(
    <div className="App-footer">
      {isChinese?
        <div className='text-center p-3'>
          © 2024 上海宝宣自动化控制系统有限公司版权所有
        </div>
        :
        <div className='text-center p-3'>
        Copyright © 2024 Shanghai Baoxuan Automation Control System Co. LTD. Built with React
        </div>
      }
    </div>
  );
}

export default Footer;