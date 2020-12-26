import { useState, useEffect } from "react";
import { getLowTable, getBigTable } from "../../services/api";
import Loader from "../Loader/Loader";
import Table from "../Table/Table";
import PersonDetails from "../PersonDetails/PersonDetails";
import Pagination from '../Pagination/Pagination'

function App() {
  const [dataBase, setData] = useState([]);
  const [person, setPerson] = useState();
  const [load, setLoad] = useState(true);
  const [sort, setSort] = useState("low");
  const [logs, setLog] = useState("");

  useEffect(() => {
    renderBigData()
  }, []);

  const renderBigData = async (page) => {
    const res = await getBigTable(page);
    await selectionSort("id", res);
    setLoad(false);
  };

  const selectionSort = async (logs, data = dataBase) => {
    let datas = await data.concat();
    let n = datas.length;
    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (datas[j][logs] < datas[min][logs]) min = j;
      }
      let t = datas[min];
      datas[min] = datas[i];
      datas[i] = t;
    }
    const sortType = sort === "low" ? "desc" : "low";
    const dataSort = sort === "low" ? datas : datas.reverse();
    setData(dataSort)
    setLog(logs)
    setSort(sortType)
  };

  const handleRow = (item) => {
    setPerson(item);
  };

  const personView = person ? <PersonDetails personDetail={person} /> : null

  const renderChildren = () => {
    return (
      <>
        <Table
          data={dataBase}
          log={logs}
          sort={sort}
          onSelectItem={(item) => handleRow(item)}
          onSort={(log, sort) => {
            selectionSort(log);
            setSort(sort);
          }}
        />
        { personView }
        <div>
          <Pagination />
        </div>
        
      </>
    );
  };

  const loading = load ? <Loader /> : renderChildren();


  return (
    <div className="container">
      <h1>test</h1>
      { loading }
    </div>
  );
}

export default App;
