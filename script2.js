const tableField = document.getElementById('table_field');
const overallTotal = document.getElementById('overall_total');
const overallpieces = document.getElementById('overall_pieces');

const SName = localStorage.getItem('sname');
document.getElementById('osname').textContent = SName;
const address = localStorage.getItem('address');
document.getElementById('oaddress').textContent = address;
const Name = localStorage.getItem('name');
document.getElementById('oname').textContent = Name;
const no = localStorage.getItem('no');
document.getElementById('ono').textContent = no;

function calculateSum(row) {
    const piece = parseFloat(row.querySelector('.piece').value);
    const price = parseFloat(row.querySelector('.price').value);
    const sum = piece * price;
    row.querySelector('.result').textContent = sum.toFixed(2);
    updateOverallTotal();
    updateOverallpiece();
}

function updateOverallTotal() {
    const allResults = document.querySelectorAll('.result');
    let total = 0;
    allResults.forEach(result => {
        total += parseFloat(result.textContent);
    });
    overallTotal.textContent = total.toFixed(2);
}

function updateOverallpiece() {
    const allpieces = document.querySelectorAll('.piece');
    let pieces = 0;
    allpieces.forEach(piece => {
        pieces += parseFloat(piece.value);
    });
    overallpieces.textContent = pieces;
}

function addRow() {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><span class="item-number">${tableField.children.length + 1}</span></td>
        <td><input type="text" class="name" required></td>
        <td><input type="number" class="piece" step="0.01" required></td>
        <td><input type="number" class="price" step="0.01" required></td>
        <td><span class="result">0.00</span></td>
    `;
    tableField.appendChild(newRow);
    newRow.querySelector('.piece').addEventListener('input', () => calculateSum(newRow));
    newRow.querySelector('.price').addEventListener('input', () => calculateSum(newRow));
}

function removeRow(button) {
    const rowToRemove = button.closest('tr');
    rowToRemove.remove();
    updateOverallTotal();
    updateOverallpiece();
}

document.getElementById('add').addEventListener('click', addRow);
document.getElementById('remove').addEventListener('click', () => {
    const rows = document.querySelectorAll('#table_field tr');
    if (rows.length > 0) {
        removeRow(rows[rows.length - 1]);
    }
});

const customername = document.getElementById('cuname');
const customerno = document.getElementById('cuno');

// Save the form data to localStorage and redirect
document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const rows = Array.from(document.querySelectorAll('#table_field tr')).map(row => ({
        number: row.querySelector('.item-number').textContent,
        name: row.querySelector('.name').value,
        piece: row.querySelector('.piece').value,
        price: row.querySelector('.price').value,
        total: row.querySelector('.result').textContent
    }));
    const overallData = {
        overallTotal: overallTotal.textContent,
        overallPieces: overallpieces.textContent
    };
    const details = {
        SName: SName,
        address: address,
        Name: Name,
        no: no,
        customername: customername.value,
        customerno: customerno.value
    };
    localStorage.setItem('details', JSON.stringify(details));
    localStorage.setItem('itemData', JSON.stringify(rows));
    localStorage.setItem('overallData', JSON.stringify(overallData));
    window.location.href = 'output.html'; // Redirect to output.html
});
