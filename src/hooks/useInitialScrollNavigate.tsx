import { NavigateOptions, To, useNavigate } from "react-router-dom";

export const useInitialScrollNavigate = () => {
  const navigate = useNavigate();

  const _navigate = (to: To, options?: NavigateOptions) => {
    navigate(to, options);
    window.scrollTo(0, 0);
  };

  return _navigate;
};
