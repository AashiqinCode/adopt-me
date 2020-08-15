 // Your script goes here.....

 // A function component

 const Pet = (props) => {
 
    // Destructuring the props
    const {name,animal,breed} =props;
 
    // Always maintain a div at the root of the element
     return React.createElement("div", {}, [
         React.createElement("h1",null, name),
         React.createElement("h2", {}, animal),
         React.createElement("h2", {}, breed)
     ]);
 };

 const App = () => {

     // throw new Error("lol");
     return React.createElement( //createElement(type,[props],[...children])

         "div", null, [React.createElement("h1", null, "Adopt Me!"),
             React.createElement(Pet, {
                 name: "Luna",
                 animal: "Dog",
                 breed: "Havanese"
             }),
             React.createElement(Pet, {
                 name: "Pepper",
                 animal: "Bird",
                 breed: "Cockatiel"
             }),
             React.createElement(Pet, {
                 name: "Doink",
                 animal: "Cat",
                 breed: "Mix"
             })
         ]
     );

 };

 ReactDOM.render(React.createElement(App), document.getElementById("root"))