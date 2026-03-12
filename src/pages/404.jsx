import Layout from '../layouts/Layout';

const NotFound = () => {
  return (
    <Layout title="404 | Page not found">
      <main className="max-w-4xl m-auto min-h-screen grid place-content-center text-center">
        <h1 className="text-4xl font-black mb-4">
          You broke it! <br /> 404 This page does not exist
        </h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="404 Not Found" />
      </main>
    </Layout>
  );
};

export default NotFound;
