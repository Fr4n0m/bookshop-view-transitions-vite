import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { books } from '../data/books';
import Footer from '../components/Footer'

const BookDetail = () => {
  const { book } = useParams();

  const navigate = useNavigate();


  const info = books.find((b) => b.id === book);

  if (!info) {
    navigate('/404', { replace: true });
    return null;
  }

  return (
    <Layout title={`Libro ${info.title}`}>
      <main className="m-auto max-w-4xl">
        <header className="relative">
          <a
            href="/"
            type="button"
            className="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              ></path>
            </svg>
            <span className="sr-only">Icon description</span>
          </a>

          <h1
            className="scale-75 font-black uppercase text-4xl md:text-5xl text-center py-8 px-4 text-nowrap"
            style={{ viewTransitionName: 'book-title' }}
          >
            <span className="tracking-[14.3px] ml-3 md:tracking-[28.9px] md:ml-7">Librería de</span>
            <span className="block text-[67px] md:text-[107px]">Fran11799</span>
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">
          <div className="flex flex-col mb-10">
            <div className="book-big -ml-2 md:-ml-0 scale-75 md:scale-100">
              <div className="book-cover">
                <img
                  src={info.image}
                  alt={info.title}
                  className="object-cover w-full h-full"
                  style={{ viewTransitionName: `book-${info.id}` }}
                />
                <div className="effect"></div>
                <div className="light"></div>
              </div>
              <div className="book-inside"></div>
            </div>

            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center w-full"
              title={`Comprar por ${info.price} €`}
            >
              <svg
                className="w-3.5 h-3.5 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path
                  d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
                ></path>
              </svg>
              Comprar ahora
            </a>
          </div>

          <aside className="mt-10 md:mt-0">
            <h1 className="text-5xl font-black mb-4 drop-shadow-lg">{info.title}</h1>
            <p className="text-lg mb-4">{info.description}</p>
            <p>
              <strong>Autor: </strong>
              <a
                className="font-semibold text-gray-800 hover:underline italic"
                href="https://es.wikipedia.org/wiki/George_R._R._Martin"
              >
                {info.author}
              </a>
            </p>
            <p className="text-5xl font-bold font-serif mt-10 text-red-700 drop-shadow-md shadow-red-950 mb-10">
              {info.price} €
            </p>
          </aside>
        </div>

        <Footer />
      </main>
    </Layout>
  );
};

export default BookDetail;