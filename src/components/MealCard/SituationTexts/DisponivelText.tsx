import CheckIcon from '@/components/Icons/CheckIcon';
import style from './SituationTexts.module.css';

const DisponivelText = () => {
    return (
        <><span className={style.disponivel}>Disponível</span><CheckIcon variant='cinza'/></>
    )
}

export default DisponivelText;