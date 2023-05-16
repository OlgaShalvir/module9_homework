
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`
const xmlDOM = new DOMParser().parseFromString(xmlString, "text/xml");
console.log('xmlDOM', xmlDOM);
let result = {
  list: []
}

const listNode = xmlDOM.querySelector("list");
const studentsNode = listNode.querySelectorAll("student");



for (const studentNode of studentsNode ) {
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  student = new Object;
  student.name = firstNode.textContent + " " + secondNode.textContent;
  student.age = ageNode.textContent;
  student.prof = profNode.textContent;
  student.language = langAttr;
  result.list.push(student)
}

console.log("result", result)