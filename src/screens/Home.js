import '../App.css';
import { useEffect, useState } from 'react';

export default function Home() {
    const [curTime, setCurTime] = useState(new Date())
    const newYear = new Date('2022-02-01 00:00:00');
  
    useEffect(() => {
      if (newYear.getTime() - curTime.getTime() > 0) {
        const intervalId = setTimeout(timer, 1000)
        return () => clearTimeout(intervalId)
      }
    }, [curTime])
  
    function timer() {
      let timeLeft = newYear.getTime() - Date.now();
      console.log(timeLeft);
      // let time = new Date(timeLeft - 1000);
      setCurTime(new Date(timeLeft))
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <img alt="newYear" src={"https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/12/tet-nguyen-dan-nham-dan-2022.jpg"} />
          <h2>
            Đếm ngược đến tết Nguyên Đán 2022
          </h2>
          <p>Còn {curTime.getMonth()} tháng {curTime.getDate() - 1 > 0 ? curTime.getDate() - 1 : 0} ngày {curTime.getHours() - 7 > 0 ? curTime.getHours() - 8 : 0} giờ {curTime.getMinutes()} phút {curTime.getSeconds()}s </p>
        </header>
      </div>
    );
  }