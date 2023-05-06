import { useEffect, useState } from "react";

const Item = ({
  item,
  deleteItem,
}: {
  item?: string;
  deleteItem: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDone(false);
  }, [deleteItem]);

  return (
    <div className="item">
      <button
        style={{
          color: done ? "white" : " #fb6f92",
          backgroundColor: done ? " #fb6f92" : "white",
        }}
        onClick={done ? deleteItem : () => setDone(true)}
      >
        {done ? "🗑" : "✔"}
      </button>
      <wbr />
      <p
        style={{
          margin: "0",
          padding: "0",
          textDecoration: done ? "line-through" : "none",
          width: "30vw",
          wordWrap: "break-word",
        }}
        onClick={() => setDone(!done)}
      >
        {item}
      </p>
    </div>
  );
};

export default Item;
