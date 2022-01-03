import '../App.css';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { useParams ,useHistory} from 'react-router-dom';
import {getCustomersById,updateCustomer} from '../api/api.js';
export default function Detail() {
    let { id } = useParams();
    const [userInfo, setUserInfo] = useState({})
    const history = useHistory();
    useEffect(async () => {
      const res = await getCustomersById(id);
      setUserInfo(res.data)
    }, [])
    console.log('userInfo', id,userInfo)
    const handleValue = (value, type) => {
      switch (type) {
        case 'last_name':
          setUserInfo({...userInfo, last_name: value})
          break;
        case 'first_name':
          setUserInfo({...userInfo, first_name: value})
          break;
        case 'company':
          setUserInfo({...userInfo, company: value})
          break;
        case 'city':
          setUserInfo({...userInfo, city: value})
          break;
        case 'password':
          setUserInfo({...userInfo, password: value})
          break;
        case 'username':
          setUserInfo({...userInfo, username: value})
        default:
          break;
      }
    }
    const handleOnUpdate = async () => {
      console.log("userInfo", userInfo);
            const res = await updateCustomer(userInfo)
            console.log("res", res);
            if(res.status == 200){
              alert("Cập nhật thành công");
              history.push('/customers');
            }
            else alert("Lỗi");
    }
    const handleOnDelete = async () => {
            const res = await updateCustomer({id:userInfo.id,hide:true})
            console.log("res", res);
            if(res.status == 200){
              alert("Xóa thành công");
              history.push('/customers');
            }
            else alert("Lỗi");
    }
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <label>id </label>
                <input
              className="inputBox"
              placeholder="id ..."
              value={userInfo?.id}
              disabled
            />
            <button
          className="loginBtn"
          type="button"
          onClick={()=>handleOnDelete()}
        >
          Delete User
        </button>
          </div>
          <div>
              <label>last_name </label>
              <input
              className="inputBox"
              placeholder="last_name ..."
              value={userInfo?.last_name}
              onChange={(pw) => {
                handleValue(pw.target.value, "last_name");
              }}
            />
          </div>
          <div>
              <label>first_name </label>
              <input
              className="inputBox"
              placeholder="first_name ..."
              value={userInfo?.first_name}
              onChange={(pw) => {
                handleValue(pw.target.value, "first_name");
              }}
            />
          </div>
          <div>
              <label>company </label>
              <input
              className="inputBox"
              placeholder="company ..."
              value={userInfo?.company}
              onChange={(pw) => {
                handleValue(pw.target.value, "company");
              }}
            />
          </div>
          <div>
              <label>City </label>
              <input
              className="inputBox"
              placeholder="City ..."
              value={userInfo?.city}
              onChange={(pw) => {
                handleValue(pw.target.value, "city");
              }}
            />
          </div>
          <div>
              <label>user_name </label>
              <input
              className="inputBox"
              placeholder="user_name ..."
              value={userInfo?.username}
              onChange={(pw) => {
                handleValue(pw.target.value, "username");
              }}
            />
          </div>
          <div>
              <label>Password </label>
              <input
              className="inputBox"
              placeholder="Password ..."
              value={userInfo?.password}
              onChange={(pw) => {
                handleValue(pw.target.value, "password");
              }}
            />
          </div>
          <button
          className="loginBtn"
          type="button"
          onClick={()=>handleOnUpdate()}
        >
          Update
        </button>
        </header>
      </div>
    );
  }