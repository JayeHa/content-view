import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    navigate("/chart");
  }, [navigate, pathname]);

  return <div>Home Page</div>;
}
