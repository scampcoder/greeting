const name = prompt("Enter your name, please.", "name");
const today = new Date();
const hrs = today.getHours();
  document.writeln("<b>");
  document.writeln("<b>");
  if(hrs <= 12){
    document.write("Good morning, " + name + "!");
    document.body.style.backgroundColor = "#F1E85F";
    } else if (hrs <= 18) {
    document.write("Good afternoon, " + name + "!");
    document.body.style.backgroundColor = "#5F68F1";
    } else {
      document.write("Good evening, " + name + "!");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#131430";
    }
