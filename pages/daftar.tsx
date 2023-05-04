import type { NextPage } from 'next';
// import component
import FormRegister from '../components/presentational/FormRegister/FormRegister';

const Login: NextPage = () => {

  return (
    <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50 block`}>
        <FormRegister/>
    </div>
  );
};

export default Login;
