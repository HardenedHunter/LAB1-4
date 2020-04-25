'use strict';

const tableId = 'employeeTable';

let table = document.getElementById(tableId);

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
