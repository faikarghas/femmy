import type { NextPage } from 'next';

// import component
import Layout from '../components/layouts/index';
import FormB from '../components/presentational/FormBestie/FormBestie';

// import hoc
import { withAUth } from '../hoc/withAuth';

const FormBestie: NextPage = () => {
  return (
    <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50`}>
      <FormB/>
    </div>
  );
};

export default FormBestie;
