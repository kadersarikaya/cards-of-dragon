import React from 'react'
import './subheading.css'
type IProps = {
    subheadTitle: string;
    subheadDesc?: string;
    isFirst?: boolean;
    onClick?: () => void;
}

const Subheading:React.FC<IProps> = ({subheadTitle, subheadDesc, isFirst=false}) => {
  return (
        <div className="cod__subheading">
          <div className="cod__subheading-title">
            <div className="cod__subheading-title-container">
              <h3 className={`${isFirst ? `cod__subheading-title__first` : `cod__subheading-title__base`}`}>{subheadTitle}</h3>
            </div>
          </div>
          <div className="cod__subheading-divider">
            <div className="cod__subheading-divider-container">
              <div className="cod__subheading-divider-wrapper">
                <span></span>
              </div>
            </div>
          </div>
          <div className="cod__subheading-desc">
            <div className="cod__subheading-desc-container">
              <h2>{subheadDesc}</h2>
            </div>
          </div>
        </div>
    )
}

export default Subheading