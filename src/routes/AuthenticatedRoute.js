import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AuthenticatedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const visit = encodeURIComponent(location.pathname + location.search);
    if (!isAuthenticated)
      return navigate(`/login?continue=${visit}`, {
        replace: true,
        state: location,
      });
  }, [location, isAuthenticated]);

  return children;
}
