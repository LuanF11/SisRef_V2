import style from './CheckIcon.module.css';

const CheckIcon = ({ variant }: { variant: "verde" | "cinza" | "laranja" | "azul-claro" }) => {
    let color = style.gray;
    switch (variant) {
        case "verde":
            color = style.green;
            break;
        case "laranja":
            color = style.orange;
            break;
        case "azul-claro":
            color = style.lightBlue;
            break;
    }

    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={color} d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM4.8 9L1.8 6L2.646 5.154L4.8 7.302L9.354 2.748L10.2 3.6L4.8 9Z" />
        </svg>
    );
};

export default CheckIcon;