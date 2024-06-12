import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1>Mark the places you want to visit</h1>
      <Outlet />
    </div>
  );
}

export default AppLayout;
