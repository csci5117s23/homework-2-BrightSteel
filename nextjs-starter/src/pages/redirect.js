import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Redirect = ({url}) => {
  const router = useRouter();

  useEffect(() => {
    router.push(url);
  }, []);

  return null;
};

export default Redirect;