import style from './SituationTexts.module.css';
import LockIcon from '@/components/Icons/LockIcon';

const BloqueadoText = () => {
    return (
        <><span className={style.bloqueado}>Bloqueado</span><LockIcon /></>
    )
}

export default BloqueadoText;