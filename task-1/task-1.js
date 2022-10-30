const parser = new DOMParser();
const xmlString = `<list>
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
</list>`;
const xmlDom = parser.parseFromString(xmlString,'text/xml');
const listNode = xmlDom.querySelector('list');

const studentNode1 = listNode.firstElementChild;
const nameNode1 = studentNode1.querySelector('name');
const firstNode1Text = nameNode1.querySelector('first').textContent; 
const secondNode1Text = nameNode1.querySelector('second').textContent; 

const studentNode2 = listNode.lastElementChild;
const nameNode2Text = studentNode2.querySelector('name');
const firstNode2Text = nameNode2Text.querySelector('first').textContent; 
const secondNode2Text = nameNode2Text.querySelector('second').textContent;

const result = { "list":[
    {name: firstNode1Text +' '+ secondNode1Text,
    age : +studentNode1.querySelector('age').textContent , 
    prof: studentNode1.querySelector('prof').textContent,
    lang:nameNode1.getAttribute('lang')
    },
    {name: firstNode2Text +' '+ secondNode2Text,
    age : +studentNode2.querySelector('age').textContent , 
    prof: studentNode2.querySelector('prof').textContent,
    lang: nameNode2Text.getAttribute('lang')
    }
]}
console.log('result',result)