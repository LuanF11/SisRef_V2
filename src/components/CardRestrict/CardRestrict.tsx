import React from "react";
import PropTypes from 'prop-types';
import styles from "./CardRestrict.module.css";

const CardRestrict = ({ iconRestrict, textRestrict}) => {
    return (
        <div className={styles.card}>
        <div className={styles.top}>
            <div className={styles.restrictName}>
                <i dangerouslySetInnerHTML={{ __html: iconRestrict }} />
                <span>{textRestrict}</span>
            </div>
            <div className={styles.restrictAction}>
                <a href="">Remover</a>
            </div>
        </div>
        </div>
    );
    }

CardRestrict.propTypes = {
    iconRestrict: PropTypes.string.isRequired,
    textRestrict: PropTypes.string.isRequired,
};

export default CardRestrict;