import { useInitialScrollNavigate } from "@/hooks/useInitialScrollNavigate";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const navigate = useInitialScrollNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    navigate("/chart");
  }, [navigate, pathname]);

  return <div>Home Page</div>;
}
