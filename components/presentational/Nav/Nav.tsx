import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useSelector } from "react-redux";

import { selectAuthState } from "../../../store/authSlice";
import { listNav } from '../../../utils/data';
import { getCookie } from '../../../utils/cookie';
import { verifyJwt } from '../../../utils/verifyJwt';
import { customId } from '../../../utils/customId';


import ButtonLoginAndRegister from '../../../components/presentational/ButtonLoginAndRegister/ButtonLoginAndRegister'
import Logout from '../Logout/Logout'


export interface INav {
  page: string;
  position: string;
  auth: boolean;
}
const Nav: React.FC<INav> = ({ page, position, auth }) => {
  const [menu, setMenu] = useState(false);
  const [pop, setPop] = useState(false);
  const [user, setUser] = useState<any>();

  const router = useRouter()
  const authIdentifier = useSelector(selectAuthState);

  const openMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const openPop = () => {
    setPop(true);
  };

  const closePop = () => {
    setPop(false);
  };


  const [offset, setOffset] = useState(0);

  const getUser = async () =>{

    let token = getCookie('refreshToken',{})
    if (token) {
      let usr = await verifyJwt(token)

      if (usr == false) return;

      try {
        const endpoint = `http://localhost:1337/api/users/${usr.id}`;
        const options = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        setUser(result)
      } catch (error) {

      }
    }

  }

  useEffect(() => {
    getUser()

    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`
      ${position == 'header' ? 'px-6 lg:px-12' : 'px-0 lg:px-0 mb-2'}
      ${
        page == 'home'
          ? `${
              offset > 100
                ? `${menu ? 'bg-[#601146]' : 'bg-white'}`
                : 'bg-transparent'
            }`
          : `${menu ? 'bg-transparent' : 'bg-white'} `
      }
      ${position == 'header' ? 'fixed z-50' : ''}
      w-full top-0 left-0 py-4 transition-all h-[85px]`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
              <img
                src={`${
                  menu
                    ? '/images/logo-femmy-white.png'
                    : '/images/logo-femmy.png'
                }`}
                className={`${
                  position == 'header' ? 'h-[50px] z-10' : 'h-[50px]'
                }  lg:h-[55px] lg:mr-3 sm:h-10 object-contain `}
                alt="Flowbite Logo"
              />
          </Link>
          {position !== 'header' ? (
            <ul className="text-right block lg:hidden">
              <li>
                <Link href="/" className="font-sans text-femmy-pdark text-right text-[14px]">
                    Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/" className="font-sans text-femmy-pdark text-right text-[14px]">
                    Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          ) : (
            ''
          )}
          {position == 'header' && (
            <div
              id="menu-hamburger"
              onClick={openMenu}
              className={`${menu && 'open'} block md:hidden`}
            >
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
            </div>
          )}
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 rounded-lg border  md:flex-row md:space-x-4 lg:space-x-7 xl:space-x-9 md:mt-0 md:text-sm md:font-medium md:border-0">
              {listNav.map((txt, i) => {
                return (
                  <li className="flex items-center" key={i}>
                    <Link
                      href={`/${txt
                        .replace(/[^\w\s]/gi, 'dan')
                        .split(' ')
                        .join('-')}`}
                      replace={true}
                      className={`${txt.split(' ').join('-') === router.pathname.replace(/\//g, "") ? 'text-[#EA92A7]' : 'text-femmy-pdark'} font-sansSemi md:text-[9px] xl:text-[13px] block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 xl:tracking-[2px]`}
                      aria-current="page"
                    >
                      {txt}
                    </Link>
                  </li>
                );
              })}
              {position == 'header' ? (
              <li className='flex items-center text-femmy-pdark font-sansSemi md:text-[9px] xl:text-[13px] py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 xl:tracking-[2px] cursor-pointer' onClick={openPop}>giveaway</li>
              ):''}

              {/* media social */}
              {position == 'header' ? (
                <li className="flex items-center group relative cursor-pointer">
                  <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center justify-center">
                    {/* <img
                      className="md:w-[12px] lg:w-[18px] object-contain"
                      src="/images/mag.png"
                    />
                    <span className="px-2">|</span> */}
                    <span className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                      media sosial kami
                    </span>
                  </div>
                  <div className="group-hover:block hidden transition-all  absolute top-full w-full pt-0">
                    <ul className="list-none list rounded-2xl gap-y-2 flex flex-col justify-end bg-white p-4">
                      <li className="">
                        <Link href="https://www.tiktok.com/@femmy.daily" 
                            className="flex items-center"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              className="w-[30px]"
                              src="/images/tiktok.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Tik Tok
                            </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="https://www.Instagram.com/femmy.daily" 
                            className="flex items-center"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              className="w-[30px]"
                              src="/images/logo-ig.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Instagram
                            </span>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ" 
                            className="flex items-center"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              className="w-[30px]"
                              src="/images/logo-yt.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Youtube
                            </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                ''
              )}

              {/* Auth */}
              {/* <ButtonLoginAndRegister position='header' auth={auth}/> */}

              {/* Auth reseller */}
              {position == 'header' && auth ? (
                <>
                  <li className='relative usr'>
                    <div className='cursor-pointer'><img className='h-[25px]' src='/images/user-icon.png'/></div>
                    {/* modal user */}
                    <div className='min-w-[240px] absolute pt-4 left-[50%] translate-x-[-50%] hidden musr'>
                      <div className='flex bg-femmy-pdark p-4 rounded-tr-[2rem] rounded-tl-[2rem]'>
                        <img className='w-[60px] object-contain' src='/images/user-avatar.png' />
                        <div className='pl-4'>
                          <h6 className='text-white font-sans text-[20px] mb-2'>ID {customId(user?.id)}</h6>
                          <h6 className='text-white font-sans mb-1 text-[16px]'>Hi, {user?.type},</h6>
                          <h5 className='text-white font-sans font-bold text-[17px]'>{user?.username}!</h5>
                        </div>
                      </div>
                      <div className='bg-[#FBEEE5] rounded-br-[2rem] rounded-bl-[2rem] shadow-[3px_4px_6px_rgba(136,37,94,0.25);]'>
                        <ul className='p-4'>
                          <li className='mb-3'><Link href='/akun' className='font-sansMedium text-femmy-pdark text-[16px]'>akun saya</Link></li>
                          {authIdentifier.role === "Reseller" ?
                          <li><Link href='/akun/riwayat-transaksi' className='font-sansMedium text-femmy-pdark text-[16px]'>cek status pesanan</Link></li>
                          :
                          <></>
                          }
                        </ul>

                        <Logout/>

                      </div>
                    </div>
                  </li>
                  <li className='relative point'>
                    <div className='cursor-pointer'><img className='h-[25px]' src='/images/gift-icon.png'/></div>
                    {/* modal point */}
                    <div className='min-w-[300px] absolute pt-4 right-[0px] hidden mpoint'>
                      <div className='bg-[#FBEEE5] rounded-[2rem] shadow-[3px_4px_6px_rgba(136,37,94,0.25);]'>
                        <ul className='px-7 py-7'>
                          <li className='mb-3'><Link href='/cek-poin-bestie' className='font-sansMedium text-femmy-pdark text-[16px]'>cek poin-mu</Link></li>
                          <li className='mb-3'><Link href='/katalog-hadiah' className='font-sansMedium text-femmy-pdark text-[16px]'>tukar poin dengan hadiah</Link></li>
                          {/* <li className='mb-3'><Link href='/tukar-emoney' className='font-sansMedium text-femmy-pdark text-[16px]'>tukar poin dengan e-money</Link></li> */}
                          <li className='mb-3'><Link href='/cek-riwayat-poin' className='font-sansMedium text-femmy-pdark text-[16px]'>cek riwayat penukaran poin</Link></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {authIdentifier.role === "Reseller" ?
                  (
                    <>
                    <li>
                      <Link href="/wishlist"><img className='h-[25px]' src='/images/love-icon.png'/></Link>
                    </li>
                    <li>
                      <Link href="/keranjang"><img className='h-[25px]' src='/images/cart-icon.png'/></Link>
                    </li>
                    </>
                  ) : (<></>) }
                </>
              ) : (
                <></>
              )}

            </ul>
          </div>
        </div>
      </nav>

      {position == 'header' ? (
        <div
          className={`pt-36 pb-12 px-8 flex flex-col justify-between sm:hidden fixed w-full h-full bg-[#601146] top-0 left-0 z-10 transition-all translate-x-[100%] ${
            menu && 'translate-x-[0%]'
          }`}
        >
          <ul className="p-0">
            {listNav.map((txt, i) => {
              return (
                <li className="flex items-center" key={i}>
                  <Link
                    href={`/${txt
                      .replace(/[^\w\s]/gi, 'dan')
                      .split(' ')
                      .join('-')}`}
                    replace={true}
                    className="font-sans text-[16px] block py-2 px-0 mb-4 rounded md:bg-transparent md:p-0 text-femmy-white"
                    aria-current="page"
                  >
                      {txt}
                  </Link>
                </li>
              );
            })}

            <li className='flex items-center font-sans text-[16px] py-2 px-0 mb-4 rounded md:bg-transparent md:p-0 text-femmy-white' onClick={openPop}>giveaway</li>
          </ul>

          {/* Auth */}
          {/* <ul>
            <li className="font-sans text-[16px] block py-2 px-0 mb-4 rounded md:bg-transparent md:p-0 text-femmy-white">
              <Link href="/login">masuk</Link>
            </li>
            <li className="font-sans text-[16px] block py-2 px-0 mb-4 rounded md:bg-transparent md:p-0 text-femmy-white">
              <Link href="/daftar">daftar</Link>
            </li>
          </ul> */}

          <ul className="pl-0">
            <li className="inline-block mr-2">
              <Link href="https://www.tiktok.com/@femmy.daily" target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/tiktok.png" />
              </Link>
            </li>
            <li className="inline-block mr-2">
              <Link href="https://www.Instagram.com/femmy.daily" target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/logo-ig.png" />
              </Link>
            </li>
            <li className="inline-block mr-2">
              <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ" target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/logo-yt.png" />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}

      <div className={`${pop === true ? 'flex' : 'hidden'} fixed z-[100] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-black bg-opacity-50 justify-center items-center`}>
      <div className='text-[20px] text-white absolute top-5 right-5 cursor-pointer' onClick={closePop}>X</div>  
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSdW7f6SLrZwTH0N9D8m7BUkGW6mX61yCGUlhlp16kufw_swdA/viewform' target='_blank' rel='noopener'>
        <picture>
          <source media="(min-width:650px)" srcSet="/images/femmy_giveaway.jpg" />
          <img src="/images/femmy_giveaway-m.jpg" alt="Flowers" className='m-auto object-contain' width={'80%'} height={'80%'}/>
        </picture>
      </a>
      </div>
    </>


  );
};

export default Nav;
