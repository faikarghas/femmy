import type { NextPage } from 'next';
import { wrapper } from '../store/store';
import { verifyJwt } from '../utils/verifyJwt';

// import component
import FormB from '../components/presentational/FormBestie/FormBestie';


const FormBestie: NextPage = ({provinsi,kabupaten,kecamatan}:any) => {
  return (
    <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50`}>
      <FormB provinsi={provinsi} kabupaten={kabupaten} kecamatan={kecamatan}/>
    </div>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let auth = false
  let provinsi = []
  let kabupaten = []
  let kecamatan = []

      const fetchProvinsi = await fetch(`${process.env.NEXT_PUBLIC_API}/api/provinsis`,{
        method:"GET",
      })
      provinsi = await fetchProvinsi.json()

      const fetchKabupaten = await fetch(`${process.env.NEXT_PUBLIC_API}/api/kabupatens`,{
          method:"GET",
      })
      kabupaten = await fetchKabupaten.json()

      const fetchKecamatam = await fetch(`${process.env.NEXT_PUBLIC_API}/api/kecamatans`,{
        method:"GET",
        })
      kecamatan = await fetchKecamatam.json()
      auth = true

  return {
    props: {
      provinsi,
      kabupaten,
      kecamatan,
      auth : auth
    },
  }
})

export default FormBestie;
