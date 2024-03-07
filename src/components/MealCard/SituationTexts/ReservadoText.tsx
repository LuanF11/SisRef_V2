import CheckIcon from '@/components/Icons/CheckIcon';
import style from './SituationTexts.module.css';

const ReservadoText = () => {
    return (
        <><span className={style.reservado}>Reservado</span><CheckIcon variant='verde'/></>
    )
}

export default ReservadoText;