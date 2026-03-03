import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "ghost" | "solid";
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, variant = "ghost", className, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
