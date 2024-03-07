import style from './SituationTexts.module.css';
import BackslashIcon from '@/components/Icons/BackslashIcon';

const CanceladoText = () => {
    return (
        <><span className={style.cancelado}>Cancelado</span><BackslashIcon/></>
    )
}

export default CanceladoText;