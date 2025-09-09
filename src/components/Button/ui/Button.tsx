import styles from "./Button.module.scss"

interface ButtonProps {
    handleClick: () => void;
    isDisabled?: boolean;
    title: string;
}

export function Button({handleClick, isDisabled, title}: ButtonProps) {
    return (
        <button onClick={handleClick} disabled={isDisabled} className={`${isDisabled ? styles.disabled : ""} `}>
            {title}
        </button>
    )
}