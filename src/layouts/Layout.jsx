import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
