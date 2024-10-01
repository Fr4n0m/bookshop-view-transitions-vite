import Layout from '../layouts/Layout';
import Title from '../components/Title';
import ListBooks from '../components/ListBooks';

const Bookstore = () => {
  return (
    <Layout title="Librería Fran11799">
      <main className="m-auto max-w-4xl">
        <Title />
        <ListBooks />
      </main>
    </Layout>
  );
};

export default Bookstore;
