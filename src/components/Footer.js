import "./Footer.css"


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
        <div className='text-center p-sm-2 copyright'>
          © 2024 上海宝宣自动化控制系统有限公司版权所有
        </div>
        :
        <div className='text-center p-sm-2 copyright'>
        Copyright © 2024 Shanghai Baoxuan Automation Control System Co. LTD. Built with React
        </div>
      }
      <div className='text-center pb-2'>
         <a href={"https://beian.miit.gov.cn/#/Integrated/index"} className="ICP-code">沪ICP备2024099341号 </a>
      </div>
    </div>
  );
}

export default Footer;