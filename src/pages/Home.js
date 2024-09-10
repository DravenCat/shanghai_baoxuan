import background from "../img/background.png"


function Home() {
  return(
    <div className="App">
      <div className={"App-body"}>
        <p>
          上海宝宣自动化控制系统有限公司
        </p>
        <img src={background} alt="background" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

    </div>
  );
}

export default Home;