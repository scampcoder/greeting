const name = prompt("Enter your name, please.", "name");
const today = new Date();
const hrs = today.getHours();
  document.writeln("<b>");
  document.writeln("<b>");
  if(hrs <= 12){
    document.write("Good Morning " + name + "!");
    } else if (hrs <= 18) {
    document.write("Good Afternoon " + name + "!");
    } else {
      document.write("Good evening " + name + "!");
    }
