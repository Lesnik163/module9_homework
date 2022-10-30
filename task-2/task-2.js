const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`
 const data = JSON.parse(jsonString);
 const listNode = data.list;
 const result = {"list":[
  { 
      name:listNode[0].name,
      age:+listNode[0].age,
      prof:listNode[0].prof
  },
  {
      name:listNode[1].name,
      age:+listNode[1].age,
      prof:listNode[1].prof
  }
 ]};
 console.log('result',result)