import Categories from "../categories/categories.jsx";
const Directory = ({categories}) => {
    return (
        <div className='categoriesWrap'>
      {categories.map((category) => (
        <Categories key={category.id} category={category} />
      ))}
    </div>
    )
}

export default Directory