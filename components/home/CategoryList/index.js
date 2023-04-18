import CategoryListItem from "../CategoryListItem";

function CategoryList({ title }) {
  return (
    <div>
      <h3 className="px-8 text-4xl font-light">{title}</h3>
      <div className="mt-8">
        <ul className="grid grid-cols-4 gap-10 justify-items-center w-full">
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
          <li>
            <CategoryListItem />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
