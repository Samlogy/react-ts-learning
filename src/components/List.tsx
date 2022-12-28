import { ReactElement, ReactNode } from "react";

type ListItem = any;
interface ListProps {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}
const List: <ListItem>({ items, render }: ListProps) => ReactElement = ({
  items,
  render,
}) => {
  console.log("items: ", items);
  return (
    <ul>
      {items.map((item: ListItem, index: number) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
