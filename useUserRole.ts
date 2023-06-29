import { UserRole } from '@/shared/types/common';
import { useSelector } from 'react-redux';
import { getUserData } from '@/entities/User';
import { useRouter } from 'next/router';

export const useUserRole = ():UserRole => {
  const { query } = useRouter();
  const queryRole = query.role as UserRole;
  const userData = useSelector(getUserData);

  return userData?.role || queryRole;
};
