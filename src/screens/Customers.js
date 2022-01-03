import { useEffect, useState } from "react";
import { login } from "../api/api.js";
import { useHistory } from "react-router-dom";
import "./styles.css";
import {getListCustomer} from "../api/api.js";
import Button from '@mui/material/Button';
import Detail from "./Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function Customers() {
  const [listCustomer, setListCustomer] = useState([]);
   const history = useHistory();
  useEffect(async () => {
      let { data } = await getListCustomer();
      setListCustomer(data);
  }, [])
  const handleOnClickName = (id) => {
    history.push({
      pathname: `./customers/${id}`,
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Danh sach Customers</h2>
        {listCustomer.map((item, index) => {
          return <div>
            {item.hide!=1&&<Button key={index} onClick={()=>handleOnClickName(item.id)}>{item.last_name} {item.first_name}</Button>}
            </div>
        })}
      </header>
    </div>
  );
}
