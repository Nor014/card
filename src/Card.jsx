import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { img } = this.props

    return (
      <div className="card" >
        {img && <img src={img} alt='img' className='card__img'/>}
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card