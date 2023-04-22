import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';
import EventEx from './component/EventEx';
import UseStateEx from './component/UseStateEx';
import Header from './component/Header'
import DayList from './component/DayList'
import Day from './component/Day'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  // USE react-router-dom
  //Switch내부는 URL에 따라 각각 다른 페이지를 보여줄거야
  //Switch외부는 모든 페이지에 공통으로 노출한다.
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Switch> 
            <Route exact path="/">
              <DayList/>
            </Route>
            <Route path="/day/:day">
              <Day/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );

  // GET Day 1 WORDs
  // return (
  //   <div className="App">
  //       <Header/>
  //       <DayList/>
  //       <Day/>
  //   </div>
  // );


  // userState & prop
  // return (
  //   <div className="App">
      
  //     <h1>state & props</h1>
  //     <h4>state : component의 속성값으로 state값이 변하면 react는 자동으로 화면을 update해준다.</h4>
  //     <h4>props : component내부에서 값을 변경할 수 없다. 변경하려면 state를 만들어서 사용해야한다.</h4>
      
  //     <UseStateEx age={10}/>
  //     <UseStateEx age={20}/>
  //     <UseStateEx age={30}/>

  //   </div>
  // );

  // Event 할당 방법
  // return (
  //   <div className="App">
  //     <EventEx/>
  //   </div>
  // );

  // component별 style 적용
  // return (
  //   <div className="App">
  //     <Hello/>
  //     <div className={styles.box}>
  //       App.js - box
  //     </div>
  //   </div>
  // );

  // return (
  //   <div classNAme="App">
  //     <Hello />
  //     <Hello />
  //     <Hello />
  //     <Welcome />
  //   </div>
  // );
  
  // const name = "Jin";
  // const site = {
  //   name : "Naver",
  //   url: "https://www.naver.com",
  // }
  // return (
  //   <div className="App">
  //    <h1 style={{
  //     color:"white",
  //     backgroundColor:"black",
  //     }}>Welcome, {name}. </h1>
  //     <a href={site.url}>{site.name}</a>
  //   </div>
  // );
}

export default App;
