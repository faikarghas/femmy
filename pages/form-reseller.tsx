import type { NextPage } from 'next';

// import component
import Layout from '../components/layouts/index';
import FormResell from '../components/presentational/FormReseller/FormReseller';

// import hoc
import { withAUth } from '../hoc/withAuth';

const FormReseller: NextPage = () => {
  return (
    <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50`}>
      <FormResell/>
    </div>
  );
};

export default FormReseller;
