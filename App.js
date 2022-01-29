import React from 'react';

import UseState from './component/hooks/UseState';
import UseEffect from './component/hooks/UseEffect';
import UseReducer from './component/hooks/UseReducer';
import ToDo from './component/Project2_ToDo/ToDo';
import WeatherApp from './component/Project3_WeatherApp/WeatherApp';

//this is need to be written <= 16th version, else if u are using React.
//1st necessary consition

const App = () => {
  //2nsd necessary condition
  // i.e. functional component
  return (
    //without return othing will work
    // bcoz it will ask for something to render

    //USING DIV:
    // <div>
    //  <h2>Hello, world... This is my 1st app</h2>
    // </div>
    //  <>
    //  <h2>Hello,jkfs  world... This is my 1st app</h2>
    //  {/* returning anothor component in app */}
    //  <Content/>   
    //  {/* <> .. </>  tags for react.fragment */}
    //  </>
    // <UseState/>
    // <UseEffect/>
    <ToDo/>
     

    //USING section
    // <section>
    //   <h2>Hello, world... This is my 1st app</h2>
    // </section>
    // <p>Hii</p>  ........will give error
    //return kevl ek hee element ho skta
    //use div or react fragment to wrap all ur code in JSX code
  )
}
  // function App(){
  //   return (<h2>Hello, world... This is my 1st app</h2>);
  // }
  // const Content = () =>{
  //   //this type of components are called Nested components
  //   return(
  //     <p>This is the main content of the site</p>
  //   )
  // }


export default App;
