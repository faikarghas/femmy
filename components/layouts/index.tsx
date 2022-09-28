import Header from '../presentational/Header/Header';
import Footer from '../presentational/Footer/Footer';

export interface ILayout {
  children: React.ReactNode;
  page: string;
}

const Layout: React.FC<ILayout> = ({ children, page }) => {
  return (
    <>
      <Header page={page} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
