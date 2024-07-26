function createRow() {
  var numRows = document.getElementById("myTable").tBodies[0].rows.length;
  
  var newRow = document.createElement("TR");
  
  newRow.setAttribute("id", "row_" + numRows);
  
  var cell1 = document.createElement("TD");
  var cell2 = document.createElement("TD");
  var cell3 = document.createElement("TD");
  var cell4 = document.createElement("TD");

  cell1.innerHTML = "<input type='text'>";
  cell2.innerHTML = "<form><label for='type'></label><select required='' name='capability_commitments' id='capability_commitments_type_1'><option value='resource'>Resource</option><option value='competence'>Competence</option><option value='habit' selected=''>Habit</option></select></form>";
  cell3.innerHTML = "<input type='text'>";
  cell4.innerHTML = "<input type='date' id='start' name='trip-start' value='2024-07-26' min='2024-07-26' max='2025-07-26'>";

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  
  document.getElementById("myTable").tBodies[0].appendChild(newRow);
}