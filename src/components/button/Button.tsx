import React from 'react'
import './button.css'

type IProps = {
  buttonName: string;
  buttonLink?: string;
}

const Button:React.FC<IProps> = ({buttonName, buttonLink}) => {
  return (
    <div className="cod__iconic-btn">
      <a href={buttonLink} className='' >
        {buttonName}
      </a>
    </div>
  )
}

export default Button