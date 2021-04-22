import React, { FC } from 'react'
import './dot-loader.styles.scss'
type Props = {
    loadingText?: string;
  };

const DotLoader: FC<Props> = ({
    loadingText
}) => {
    return (
        <div className="dot-loader">
           <p className="loading">{loadingText}<span>.</span><span>.</span><span>.</span></p>
        </div>
    )
}

export default DotLoader
