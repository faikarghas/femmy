import type { NextPage } from 'next';
// import component
import FormLogin from '../components/presentational/FormLogin/FormLogin';

const Login: NextPage = () => {

  return (
    <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50 block`}>
        <FormLogin/>
    </div>
  );
};

export default Login;
