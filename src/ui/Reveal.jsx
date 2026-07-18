import { useInView } from '../hooks/useInView';

/** Wraps children in a scroll-triggered fade/rise that respects reduced motion. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${className}`} data-visible={inView} {...rest}>
      {children}
    </Tag>
  );
}
