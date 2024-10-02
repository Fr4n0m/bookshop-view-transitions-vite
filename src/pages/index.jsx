import Layout from '../layouts/Layout';
import Title from '../components/Title';
import ListBooks from '../components/ListBooks';
import Footer from '../components/Footer';

const Bookstore = () => {
  return (
    <Layout title="Librería Fran11799">
      <main className="m-auto max-w-4xl">
        <Title />
        <ListBooks />
        <Footer />
      </main>
    </Layout>
  );
};

export default Bookstore;
