import './categories.scss'

const Categories = ({category}) => {
    const {imgSrc, genre, discription} = category;
return (
    <div className='categoriesWrap_category'>
          <div className='categoriesWrap_category_image' style={{
            backgroundImage: `url(${imgSrc})`
          }} />
          <div className='categoriesWrap_category_text'>
            <h2 className='categoriesWrap_category_text_genre'>{genre}</h2>
            <p className='categoriesWrap_category_text_disc'>{discription}</p>
          </div>
        </div>
)
}

export default Categories