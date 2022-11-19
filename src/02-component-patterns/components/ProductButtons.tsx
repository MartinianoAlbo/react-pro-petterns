import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

    //! TODO : maxCount
    const { increaseBy, counter, maxCount } = useContext( ProductContext );

    //! TODO : isMaxReached = useCallback, [ counter, maxCount ]
    
    const isMaxReched = useCallback(
      () =>  !!maxCount && counter === maxCount? true : false, 
      [ counter, maxCount ],
    )
    
    return (
        <div 
            className={ `${ styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button
                className={  `${ styles.buttonAdd } ${ isMaxReched() &&  styles.disabled }` }
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    );
}