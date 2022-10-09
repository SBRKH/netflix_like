import {Sheet} from "../Sheet";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../app/home/Home";

export const MainRouter = () => {
  return (
    <Sheet sx={{
      padding: 2,
      paddingTop: 5
    }}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<div>blabla</div>} />
      </Routes>
    </Sheet>
  )
}