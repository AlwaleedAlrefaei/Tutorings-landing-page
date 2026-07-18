import styles from './Button.module.css';

const VARIANTS = {
  primary: styles.primary,
  ghost: styles.ghost,
  onDark: styles.onDark,
};

export function Button({
  as: Tag = 'a',
  variant = 'primary',
  size,
  withArrow = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [styles.btn, VARIANTS[variant], size === 'sm' && styles.sm, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
      {withArrow && (
        <span className={styles.arrow} aria-hidden="true">
          ←
        </span>
      )}
    </Tag>
  );
}
