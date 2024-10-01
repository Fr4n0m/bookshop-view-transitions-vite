import PropTypes from 'prop-types';


const Layout = ({ title, children }) => {

	/* let scrollPosition = 0;

            // Guardar la posición del scroll antes de navegar
            window.addEventListener('beforeunload', () => {
              scrollPosition = window.scrollY;
            });

            async function fetchAndReplaceContent(toUrl) {
              const response = await fetch(toUrl.pathname);
              const text = await response.text();

              const parser = new DOMParser();
              const doc = parser.parseFromString(text, 'text/html');

              // Extraer el contenido del nuevo body
              const newBodyContent = doc.body.innerHTML;

              return newBodyContent;
            }

            if (document.startViewTransition) {
              window.navigation.addEventListener('navigate', (event) => {
                const toUrl = new URL(event.destination.url);

                // Ignorar si es una página externa
                if (location.origin !== toUrl.origin) return;

                // Interceptar la navegación
                event.intercept({
                  async handler() {
                    try {
                      const newBodyContent = await fetchAndReplaceContent(toUrl);

                      // Iniciar la transición de vista
                      document.startViewTransition(() => {
                        document.body.innerHTML = newBodyContent;

                        // Restaurar la posición del scroll
                        document.documentElement.scrollTop = scrollPosition;
                      });
                    } catch (error) {
                      console.error('Error en la transición de vista: ', error);
                    }
                  },
                });
              });
            }

            // Al cargar la página, restaurar la posición del scroll si existe
            document.addEventListener('DOMContentLoaded', () => {
              document.documentElement.scrollTop = scrollPosition;
            }); */

  return (
    <>
   <div
      className="fixed top-0 z-[-2] h-screen w-screen bg-[#7e00f339] bg-[radial-gradient(#ffffff33_1px,#E9E5DC_1px)] bg-[size:20px_20px]"
    >
    </div>
		  {children}
  	</>
  );
};

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Layout;
