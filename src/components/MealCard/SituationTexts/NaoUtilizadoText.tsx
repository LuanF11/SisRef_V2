import CheckIcon from '@/components/Icons/CheckIcon';
import style from './SituationTexts.module.css';

const NaoUtilizadoText = () => {
    return (
        <><span className={style.naoUtilizado}>Utilizado</span><CheckIcon variant='laranja'/></>
    )
}

export default NaoUtilizadoText;