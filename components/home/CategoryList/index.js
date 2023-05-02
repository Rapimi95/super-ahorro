import CategoryListItem from "../CategoryListItem";

function CategoryList({ title, items }) {
  return (
    <>
      <h3 className="px-8 text-4xl font-light w-full">{title}</h3>
      <div className="mt-8 w-full">
        <ul className="grid grid-cols-4 gap-10 justify-items-center w-full">
          {items?.map((item, index) => (
            <li key={index}>
              <CategoryListItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryList;
