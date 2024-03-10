import { ReactNode } from 'react';
import style from './WidthLimiter.module.css';

const WidthLimiter = ({ children }: { children: ReactNode }) => {
    return <div className={style.widthLimiter}>{children}</div>;
};

export default WidthLimiter;