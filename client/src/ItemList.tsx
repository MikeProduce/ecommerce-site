

interface Item {
    id: number;
    name: string;
}

interface ItemListProps {
    items: Item[];
}

const ItemList = ({ items }: ItemListProps) => (
    <ul>
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
);

export default ItemList;
