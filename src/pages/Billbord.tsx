import { FC } from 'react';
import dotenv from 'dotenv';
import Billboard from '@/components/organisms/Billboard';

dotenv.config();

const Billbord: FC = () => {
  return (
    <>
      <Billboard />
    </>
  );
};

export default Billbord;
