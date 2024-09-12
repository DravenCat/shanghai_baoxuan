import "./Profile.css"

import Info from "./Info"
import {Route, Routes} from "react-router-dom";
import Location from "./Location";
import {Col} from "react-bootstrap";


function Profile() {
  return(
    <div className={'Profile-body'}>
      <Routes>
        <Route path={"/"} element={<Info />} />
        <Route path={"/location"} element={<Location />}/>
      </Routes>
    </div>
  );
}

export default Profile;