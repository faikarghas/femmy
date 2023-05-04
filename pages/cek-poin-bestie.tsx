import {useState,useRef} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';
import { verifyJwt } from '../utils/verifyJwt';
import { customId } from '../utils/customId';
import { getCookie } from '../utils/cookie'

import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';

const CekPoinBestie: NextPage = ({auth,user}:any) => {
  const [klaimModal,setKlaimModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState<any>()
  const [message, setMessage] = useState('Kirim'); 


  const openModal = async () => {
    setKlaimModal(true)
  }

  const closeModal = async () => {
    setKlaimModal(false)
  }

  const fileInput = useRef(null)

  const handleFileInput = (e:any) => {
      // handle validations
      setSelectedFile(e.target.files[0])

      console.log(e.target.files[0]);
  }

  const kirimdata = async () => {
    setMessage('Loading...')

    let formData = new FormData();
    formData.append("files", selectedFile);
    formData.append('ref', 'api::reward-converted.reward-converted') // link with my table
    formData.append('refId', '1')

    const token = getCookie('refreshToken',{})
    const endpoint = 'http://localhost:1337/api/upload';
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        // 'Content-Type': 'application/json',
      },
      body: formData,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);

    if (result[0].id) {
      const fileId = result[0].id
      const data = {
        data:{
          users_permissions_user: {
            connect: [user.id],
          },
          Upload: fileId
        }
      }
      const JSONdata = JSON.stringify(data);
      const endpointReward = `http://localhost:1337/api/reward-converteds`;
      const optionsER = {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };

      const response = await fetch(endpointReward, optionsER);
      const resUpdate = await response.json();


      if (resUpdate.data) {
        setMessage('Terkirim');
      }
    }

  }

  return (
    <Layout page="tentang-kami" auth={auth}>
        <section className='py-20 px-16 bg-[#F3AAB5] bg-opacity-10'>
          <div className='text-center'>
            <h1 className='text-femmy-pdark text-[35px] font-head'>Cek Poin Anda</h1>
          </div>
          <div className='px-24'>
            <div className='h-[1px] bg-femmy-pdark mt-5 mb-8'></div>
          </div>
          <div className='text-center'>
            <p className='font-sans text-femmy-pdark font-semibold text-[18px]'>No. ID Femmy Bestie</p>
            <p className='font-sansExtra text-femmy-pdark font-extrabold text-[40px] leading-[33px] tracking-[0.08em] mb-20'>{customId(user.id)}</p>

            <div className='flex flex-wrap'>
              <div className='basis-full lg:basis-1/2'>
                <h2 className='text-femmy-pdark text-[35px] font-head mb-6'>Klaim Poin</h2>
                <div className='h-[100px]'>
                  <p className='font-sansSemi text-femmy-pdark text-[18px]'>Klaim poin kamu dengan mengunduh<br/>struk pembelian kami disini</p>
                </div>
                <div>
                  <div onClick={openModal} className='inline-block bg-femmy-pdark text-[#FDC8CE] py-3 px-16 rounded-lg font-sansSemi'>Klaim Poin Kamu</div>
                </div>
              </div>

              <div className='basis-full lg:basis-1/2'>
                <h2 className='text-femmy-pdark text-[35px] font-head mb-6'>Jumlah Poin Anda</h2>
                <div className='h-[100px]'>
                  <p className='font-sansSemi text-femmy-pdark text-[18px] mb-2'>Total Poin Rewards Kamu : </p>
                  <p className='font-sansExtra text-femmy-pdark font-extrabold text-[45px] leading-[33px] tracking-[0.08em]'>{user.point}</p>
                </div>
                <div>
                  <Link href="/cek-riwayat-poin" className='inline-block bg-femmy-pdark text-[#FDC8CE] py-3 px-16 rounded-lg font-sansSemi'>Cek riwayat penukaran poin</Link>
                </div>
              </div>
            </div>

          </div>
          <div>
          </div>
        </section>
        <section className='relative'>
            <div className='flex'>
              <div className='relative overflow-hidden'>
                <img className='mix-blend-screen h-full absolute top-0 left-0 z-20' src='/images/bg-cekpoin.png' />
                <img className='z-10' src='/images/cash-reward.png'/>

                <div className='absolute top-[50%] translate-y-[-50%] left-0 w-full z-30 text-center'>
                  <h3 className='font-head text-femmy-pdark text-[33px] mb-6'>Cash Reward</h3>
                  <Link href='/tukar-emoney' className='font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-20 rounded-lg '>tukar poin dengan e-money</Link>
                </div>
                <div className='absolute bottom-8 left-0 w-full z-30 text-center'>
                  <img className='w-[220px] object-contain mx-auto' src='/images/pay.png' />
                </div>

              </div>
              <div className='relative'>
                <img className='mix-blend-screen h-full absolute top-0 left-0 z-20' src='/images/bg-cekpoin.png' />
                <img className='' src='/images/gift-reward.png'/>

                <div className='absolute top-[50%] translate-y-[-50%] left-0 w-full z-30 text-center'>
                  <h3 className='font-head text-femmy-pdark text-[33px] mb-6'>Gift Reward</h3>
                  <Link href='/katalog-hadiah' className='font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-20 rounded-lg '>tukar poin dengan hadiah</Link>
                </div>

              </div>
            </div>
        </section>

        <div className={`${klaimModal ? 'fixed' : 'hidden'} top-0 left-0 bg-[#F5E8DF] w-full h-full z-[50] flex justify-center items-center flex-col`}>
          <h3 className='font-sans text-femmy-pdark text-[18px] mb-8 cursor-pointer' onClick={closeModal}> {`<`} kembali</h3>

          <div>
            <div className='p-8 border-[1px] border-femmy-pdark border-dashed lg:w-[500px]'>
              <div className='text-center'>
                <img src='/images/upload.png' className='w-[90px] m-auto mb-8'/>
                <p className='font-sans text-femmy-pdark text-[18px]'>{selectedFile?selectedFile.name : `Unggah invoice / struk pembelian produk Femmy disini untuk kami verifikasi`}</p>
              </div>
            </div>
            <div>
              <p className='font-sans text-femmy-pdark text-[14px] text-center my-4'>atau</p>
              <input
                name="file"
                type="file"
                // value={selectedFile}
                onChange={handleFileInput}
                className='custom-file-input h-[55px]'
              />
              <h2 onClick={kirimdata} className='cursor-pointer text-center font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-20 rounded-lg'>{message}</h2>
            </div>
          </div>

        </div>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let token = await verifyJwt(req.cookies.refreshToken)
  let auth = false
  let user = []

  if(token){
    const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}`,{
        method:"GET",
        headers:{
            'Authorization': 'Bearer ' + req.cookies.refreshToken,
        }
    })

    user = await fetchData.json()
    auth = true
  }

  return {
    props: {
      auth : auth,
      user : user
    },
  }
})

export default CekPoinBestie;