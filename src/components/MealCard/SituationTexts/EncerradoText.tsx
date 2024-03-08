import style from './SituationTexts.module.css';
import CrossCircleIcon from '@/components/Icons/CrossCircleIcon';

const EncerradoText = () => {
    return (
        <><span className={style.encerrado}>Encerrado</span><CrossCircleIcon/></>
    )
}

export default EncerradoText;