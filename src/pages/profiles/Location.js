



function Location() {

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
    isChinese ?
        <div className={"General-content"}>
          <div className={"General-title"}>
            地址信息
          </div>
          <hr className={"General-hr"}/>
          <div className={"General-text"}>
            办公地址：上海市杨浦区国定东路275-8号绿地汇创大厦704室
          </div>
          <div className={"General-text"}>
            工厂地点：上海市松江区泖亭路188号财富兴园国际企业公园37栋
          </div>
          <div className={"General-text"}>
            电话：+86 21 61920708
          </div>
          <div className={"General-text"}>
            传真：+86 21 61920667
          </div>
          <div className={"General-text"}>
            邮箱：chinabaoxuan@126.com
          </div>
        </div>
        :
        <div className={"General-content"}>
          <div className={"General-title"}>
            Address
          </div>
          <hr className={"General-hr"}/>
          <div className={"General-text"}>
          </div>
          <div className={"General-text"}>
            Shanghai: Rm 704, 275-8 East Guoding Rm, Yangpu District, Shanghai;
          </div>
          <div className={"General-text"}>
            Factory: No.37, 188 Maoting Rd, Songjiang District, Shanghai
          </div>
          <div className={"General-text"}>
            Phone：+86 21 61920708
          </div>
          <div className={"General-text"}>
            Fax：+86 21 61920667
          </div>
          <div className={"General-text"}>
            E-mail：chinabaoxuan@126.com
          </div>
        </div>

  );
}

export default Location;