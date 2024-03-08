import CheckIcon from '@/components/Icons/CheckIcon';
import style from './SituationTexts.module.css';

const UtilizadoText = () => {
    return (
        <><span className={style.utilizado}>Utilizado</span><CheckIcon variant='verde'/></>
    )
}

export default UtilizadoText;