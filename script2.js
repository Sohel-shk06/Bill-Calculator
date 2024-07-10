       const SName = localStorage.getItem('sname');
        document.getElementById('osname').textContent = SName;
        const address = localStorage.getItem('address');
        document.getElementById('oaddress').textContent = address;
        const Name = localStorage.getItem('name');
        document.getElementById('oname').textContent = Name;
        const no = localStorage.getItem('no');
        document.getElementById('ono').textContent = no;



    const tableField = document.getElementById('table_field');
    const overallTotal = document.getElementById('overall_total');
    const overallpieces = document.getElementById('overall_pieces');

    function calculateSum(row) {
        const piece = parseFloat(row.querySelector('.piece').value);
        const price = parseFloat(row.querySelector('.price').value);
        const sum = piece * price;
        row.querySelector('.result').textContent = sum;
        updateOverallTotal();
        updateOverallpiece();
    }

    function updateOverallTotal() {
        const allResults = document.querySelectorAll('.result');
        let total = 0;
        allResults.forEach(result => {
            total += parseFloat(result.textContent);
        });
        overallTotal.textContent = total;
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
            <td><input type="text" class="name"  required></td>
            <td><input type="number" class="piece" required></td>
            <td><input type="number" class="price" required></td>
            <td><span class="result">0</span></td>
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
    function resetTable() {
            tableField.innerHTML = '';
            overallTotal.textContent = '0';
            overallpieces.textContent = '0';
        }

    document.getElementById('add').addEventListener('click', addRow);
    document.getElementById('remove').addEventListener('click', () => {
        const rows = document.querySelectorAll('#table_field tr');
        if (rows.length > 0) {
            removeRow(rows[rows.length - 1]);
        }
    });
    document.getElementById('reset').addEventListener('click', resetTable);

    function hide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
   
        para.style.display = 'none';    
    
}
