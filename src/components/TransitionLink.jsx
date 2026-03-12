import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const isModifiedEvent = (event) => {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
};

const supportsViewTransitions = () => {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
};

const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const TransitionLink = ({ to, replace = false, state, onClick, children, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);

    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (rest.target && rest.target !== '_self') return;
    if (isModifiedEvent(event)) return;

    event.preventDefault();

    const navigateTo = () => navigate(to, { replace, state });

    if (!supportsViewTransitions() || prefersReducedMotion()) {
      navigateTo();
      return;
    }

    document.startViewTransition(navigateTo);
  };

  return (
    <Link to={to} replace={replace} state={state} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

TransitionLink.propTypes = {
  to: PropTypes.string.isRequired,
  replace: PropTypes.bool,
  state: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TransitionLink.defaultProps = {
  replace: false,
  state: undefined,
  onClick: undefined,
};

export default TransitionLink;
