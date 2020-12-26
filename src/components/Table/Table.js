import { useMemo } from 'react'

export default function Table(props) {
  const head = [
    { id: "id", name: "ID" },
    { id: "firstName", name: "First Name" },
    { id: "lastName", name: "Lirst Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
  ];

  const renderHead = () => {
    return (
      <tr>
        {head.map((item) => (
          <th key={item.id} onClick={() => props.onSort(item.id, "low")}>
            {item.name}
            {props.log === item.id && props.sort === "low" ? (
              <span>&#9650;</span>
            ) : (
              <span>&#9660;</span>
            )}
          </th>
        ))}
      </tr>
    );
  };

  const renderChildren = useMemo(() => props.data.map((item) => {
      return (
        <tr key={item.id * Math.floor(Math.random() * 1000)} onClick={() => props.onSelectItem(item)} >
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      );
    }), [props.data])

  return (
    <table className="table">
      <thead>{ renderHead() }</thead>
      <tbody>{ renderChildren }</tbody>
    </table>
  );
}
