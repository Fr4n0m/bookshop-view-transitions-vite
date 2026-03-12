import { Navigate, useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { books } from '../data/books';
import Footer from '../components/Footer';
import TransitionLink from '../components/TransitionLink';

const BookDetail = () => {
  const { book } = useParams();

  const info = books.find((b) => b.id === book);

  if (!info) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout title={`${info.title} | View Transitions Library`}>
      <main className="m-auto w-full max-w-[1500px] px-4 pb-8 md:px-6 2xl:px-8">
        <header className="relative">
          <div className="mb-3 flex justify-start pt-2 md:pt-4">
            <TransitionLink
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-black/70 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              <svg
                className="h-3.5 w-3.5 rotate-180"
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
              Back
            </TransitionLink>
          </div>

          <h1
            className="pt-8 text-center font-black uppercase leading-[0.9] text-black"
            style={{ viewTransitionName: 'book-title' }}
          >
            <span className="block text-[clamp(1.2rem,2.5vw,2rem)] tracking-[0.32em] text-black/60">
              View Transitions
            </span>
            <span className="block bg-gradient-to-r from-black via-zinc-700 to-zinc-500 bg-clip-text pt-2 text-[clamp(2.8rem,8vw,6.6rem)] tracking-[0.04em] text-transparent">
              Library
            </span>
          </h1>
        </header>
        <section className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-black/10 bg-white/60 p-4 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm md:mt-10 md:p-6 lg:grid-cols-[360px_1fr] lg:gap-10 lg:p-8 2xl:mt-12 2xl:gap-14">
          <div className="flex w-full flex-col gap-5 lg:items-center">
            <div
              className="book-big w-full lg:max-w-[350px]"
              style={{ height: 'auto', aspectRatio: '350 / 550' }}
            >
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

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black/30"
              title={`Buy for ${info.price} EUR`}
              aria-label={`Buy ${info.title} for ${info.price} euros`}
            >
              <svg
                className="h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path
                  d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
                ></path>
              </svg>
              Buy now
            </button>
          </div>

          <aside className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm md:p-7 lg:p-8 2xl:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/45">Book details</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl xl:text-5xl">{info.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-black/70 md:text-lg">{info.description}</p>
            <p className="mt-6 text-sm text-black/70 md:text-base">
              <strong className="text-black">Author: </strong>
              <a
                className="font-semibold italic text-black transition hover:text-black/70"
                href={info.authorLink}
                target="_blank"
                rel="noreferrer"
              >
                {info.author}
              </a>
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Rating</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.rating.toFixed(1)} ★</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Reviews</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.reviews.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Format</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.format}</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Stock</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.stock}</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Shipping</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.shipping}</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white/70 px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">Pages</p>
                <p className="mt-1 text-sm font-semibold text-black">{info.pages}</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-black/45">
              ISBN {info.isbn}
            </p>
            <div className="mt-10 flex items-end justify-between border-t border-black/10 pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">Price</span>
              <p className="font-serif text-4xl font-bold leading-none text-black md:text-5xl">
                {info.price}
                <span className="ml-1 text-2xl text-black/70 md:text-3xl">€</span>
              </p>
            </div>
          </aside>
        </section>

        <Footer matchParentWidth />
      </main>
    </Layout>
  );
};

export default BookDetail;
