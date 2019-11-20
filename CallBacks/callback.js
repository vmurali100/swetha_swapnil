const users = [
  {
    fname: "Napoleon",
    lname: "Lehman"
  },
  {
    fname: "Marlissa",
    lname: "Nance"
  },
  {
    fname: "Larina",
    lname: "Gerver"
  }
];
//ES 5 Syntex
// function getUsers() {}

//ES6 Syntex
const getUsers = () => {
  setTimeout(() => {
    // console.log("I will be availbale after 3sec");
    users.map(user => {
      let myLi = document.createElement("li");
      myLi.innerHTML = user.fname + " " + user.lname;
      document.getElementById("myUl").appendChild(myLi);
    });
  }, 3000);
};

const addUser = getUsers => {
  setTimeout(() => {
    // console.log("I will be available after 2sec");
    users.push({ fname: "Ram", lname: "Krishna" });
    getUsers();
  }, 4000);
};

// getUsers();
addUser(getUsers);
