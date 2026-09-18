//import App from "../App";
//  Example -1
//const Function_Example = () => {
// function getName() {
//   return "Shubhangi";
// }
//  return (
//   <>
//      <h1> Hello Function example 1</h1>
//       <h1>Hello my name is {getName()}</h1>
//  </>
// )
//};

// Example 2

const Function_Example = () => {
    const add = (a, b) => {

        return a + b;
    }
    return (

        <>
            <div class="container">
                <h1> Addition Example</h1>
                <h2>10+20 = {add(10, 20)}</h2>
                <h2>40+50 = {add(40, 50)}</h2>

            </div>

        </>

    )

}


export default Function_Example;


