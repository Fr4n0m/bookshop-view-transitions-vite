import PropTypes from 'prop-types';


const Layout = ({ title, children }) => {

  return (
    <>
   
		  {children}
  	</>
  );
};

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Layout;
