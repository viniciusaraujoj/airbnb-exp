import star from '../assets/star.png'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={`../images/${props.item.coverImg}`} className='card--img' />

      <div className='card--stats'>
        <img src={star} className='card--icon' />
        <span>{props.item.stats.rating}</span>
        <span className='clr-gray'>
          ({props.item.stats.reviewCount}) &#9900; USA
        </span>
      </div>

      <p className='card--title'>{props.item.title}</p>

      <p className='card--price'>
        <span className='bold'>From ${props.item.price}</span> / person
      </p>
    </div>
  )
}

export default Card
