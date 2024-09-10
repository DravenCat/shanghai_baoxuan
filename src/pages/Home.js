import homePageImg from "../img/homePageImg.png"
import './Home.css'


function Home() {
  return(
    <div className="App">
      <div className={"Home-body"}>
        <div className={"Home-content"}>
          <p>
            上海宝宣自动化控制系统有限公司
          </p>
          <img src={homePageImg} alt="background" className="Home-image" />
        </div>

      </div>
      {/*<div className="img-box" >*/}
      {/*  <div className="img" />*/}
      {/*</div>*/}

    </div>
  );
}

export default Home;