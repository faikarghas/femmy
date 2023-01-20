import Header from '../presentational/Header/Header2';
import Footer from '../presentational/Footer/Footer';
import Script from 'next/script'
export interface ILayout {
  children: React.ReactNode;
  page: string;
}

const Layout: React.FC<ILayout> = ({ children, page }) => {
  return (
    <>
     {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-245288693-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-245288693-1');
        `}
      </Script>
      <Header page={page}/>
      <main className={`${page !== 'home' ? 'mt-[85px]' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
