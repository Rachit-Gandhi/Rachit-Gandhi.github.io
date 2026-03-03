import styles from "./IconLink.module.css";

type IconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export default function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a href={href} aria-label={label} className={styles.link}>
      {children}
    </a>
  );
}
