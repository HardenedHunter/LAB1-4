'use strict';

const tableId = 'employeeTable';
const formId = 'tableRowForm';

let table = document.getElementById(tableId);
let form = document.getElementById(formId);

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const columnIndex = e.target.cellIndex;
    sortTable(columnIndex);
  }

  if (e.target.tagName === 'I') {
    const rowIndex = e.target.closest('TR').rowIndex;
    table.deleteRow(rowIndex);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  appendRow();
});

const sortTable = (columnIndex) => {
  let switching = true;
  let shouldSwitch = false;
  let i = 1;

  while (switching) {
    switching = false;
    let rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      let x = rows[i].getElementsByTagName('TD')[columnIndex];
      let y = rows[i + 1].getElementsByTagName('TD')[columnIndex];
      if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};

const appendRow = () => {
  const age = document.getElementById('ageInput');
  const salary = document.getElementById('salaryInput');
  const experience = document.getElementById('experienceInput');
  const projects = document.getElementById('projectsInput');

  if (
    parseInt(age.value) &&
    parseInt(salary.value) &&
    parseInt(experience.value) &&
    parseInt(projects.value)
  ) {
    let row = table.getElementsByTagName('TBODY')[0].insertRow(-1);

    appendCell(row, age.value);
    appendCell(row, salary.value);
    appendCell(row, experience.value);
    appendCell(row, projects.value);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
    row.insertCell(-1).appendChild(deleteButton);

    age.value = '';
    salary.value = '';
    experience.value = '';
    projects.value = '';
  } else {
    alert('Введите корректные значения.');
  }
};

const appendCell = (row, value) => {
  row.insertCell(-1).appendChild(document.createTextNode(value));
};
