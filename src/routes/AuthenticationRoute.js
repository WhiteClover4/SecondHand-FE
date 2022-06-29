import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useQuery from '../hooks/independent/useQuery';

export default function AuthenticationRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const query = useQuery();
  const visit = query.get('continue');

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && visit) return navigate(visit, { replace: true, state: location });
    if (isAuthenticated) return navigate('/', { replace: true, state: location });
  }, [isAuthenticated, location]);

  return children;
}
