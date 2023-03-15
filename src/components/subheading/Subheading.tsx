import React from 'react'
import './subheading.css'
type IProps = {
    subheadTitle: string;
    subheadDesc: string;
    isFirst?: boolean;
}

const Subheading:React.FC<IProps> = ({subheadTitle, subheadDesc, isFirst=false}) => {
  return (
      <div className='cod__subheading-content'>
        <h1 className={isFirst ? `cod__subheading-title__first` : `cod__subheading-title`}>{subheadTitle}</h1>
        <div className="cod__subheading__divider">
          <span></span>
        </div>
        <p className='cod__subheading-description'>{subheadDesc}</p>
      </div>
    )
}

export default Subheading