import React, { useEffect, useState } from 'react';


const App = () => {
  const [x, setX] = useState(() => {
    return 1;
  });
  useEffect(() => {
    console.log("Hello Parent" + x)
  }, [])

  console.log(x)
  return (
    <div>
      <button onClick={() => {setX(x + 1)}}>Huh </button>
      <Temp/>
    </div>
  )


}


export const Example = () => {
  const [x, setX] = useState(() => {
    console.log("oh shit");
    return 77;
  });
  useEffect(() => {
    console.log(`Hello world ${x}`)
  })
  return (
    <h1>{x}</h1>
  )
}

const Temp = React.memo(Example);

class Welcome extends React.Component {
  x = () => {
    return "hello"
  }
  render() {
    return <h1>{this.x()}</h1>
  }




}

class Employee {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln
  }

  getFullName() {
    return this.fn + ' ' + this.ln
  }
}

class Manager extends Employee {
  constructor(fn, ln, staff) {
    super(fn, ln)
    this.staff = staff;
  }

  displayInfo() {
    return this.getFullName() + ' has a staff of ' + this.staff
  }
}
export default App;

