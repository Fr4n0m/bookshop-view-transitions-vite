import Layout from '../layouts/Layout';
import Title from '../components/Title';
import ListBooks from '../components/ListBooks';
import Footer from '../components/Footer';

const Bookstore = () => {
  return (
    <Layout title="View Transitions Library">
      <main className="m-auto w-full max-w-[1500px]">
        <Title />
        <ListBooks />
        <Footer />
      </main>
    </Layout>
  );
};

export default Bookstore;
