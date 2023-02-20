/* 
Write a Javascript function that will dynamiclly create a table
User should input the number of Columns and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
*/

const submit = document.getElementById('submit');
const table = document.getElementById('myTable');


submit.addEventListener('click', () => {
  let htmlToAdd = "";
  const row = document.getElementById('row');
  const column = document.getElementById('column');
  htmlToAdd += "<tbody>";
  for (i = 1; i <= row.value; i++) {
    htmlToAdd += `<tr>`;
    for (j = 1; j <= column.value; j++) {
      htmlToAdd += `<td>row ${i},column ${j}</td>`;
    }
    htmlToAdd += `</tr>`;

  }
  htmlToAdd += "</tbody>";
  table.innerHTML = htmlToAdd;

})




