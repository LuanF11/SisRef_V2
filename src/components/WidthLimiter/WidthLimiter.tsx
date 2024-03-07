import style from './WidthLimiter.module.css';

const WidthLimiter = ({ children }: { children: React.ReactNode }) => {
    return <div className={style.widthLimiter}>{children}</div>;
};

export default WidthLimiter;
