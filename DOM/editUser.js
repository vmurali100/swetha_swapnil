var person = {
  fname: "Murali",
  lname: "Krishna",
  gender: "Male",
  subjects: ["HTML", "CSS", "Angular"]
};
function editPerson() {
  // document.getElementById("fname").value = person.fname;
  // document.getElementById("lname").value = person.lname;
  for (a in person) {
    if (a != "gender" && a != "subjects") {
      document.getElementById(a).value = person[a];
    } else if (a == "gender") {
      var allRadioBtns = document.getElementsByName("gender");
      for (i = 0; i < allRadioBtns.length; i++) {
        //   console.log(allRadioBtns[i].value);
        if (allRadioBtns[i].value == person[a]) {
          allRadioBtns[i].checked = true;
        }
      }
    } else {
      var allCheckBoxs = document.getElementsByName("subject");
      for (i = 0; i < allCheckBoxs.length; i++) {
        //   console.log(allCheckBoxs[i].value);
        for (j = 0; j < person.subjects.length; j++) {
          console.log(person.subjects[j]);
          if (allCheckBoxs[i].value == person.subjects[j]) {
            allCheckBoxs[i].checked = true;
          }
        }
      }
    }
  }
}
