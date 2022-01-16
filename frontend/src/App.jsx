import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation/MainNavigation";

const StyledMain = styled.main`
  /* Display & Box Model */
  margin-top:5rem;
`

function App() {
  return (
    <>
      <MainNavigation />
      <StyledMain>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </StyledMain>
    </>
  )
}

export default App
