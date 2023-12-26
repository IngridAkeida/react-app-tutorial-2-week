import { useState } from "react";

//{items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // a function (item: string) => void
  onSelectItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //message
  const message = items.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={
              selectedIndex === index
              ? "list-group-item active" 
              : "list-group-item"
            } 
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))} 
      </ul>
    </>
  );
}

export default ListGroup;
