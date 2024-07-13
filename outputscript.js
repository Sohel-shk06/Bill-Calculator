window.onload = function() {
    const tableField = document.getElementById('table_field');
    const itemData = JSON.parse(localStorage.getItem('itemData'));
    const overallData = JSON.parse(localStorage.getItem('overallData'));
    const details = JSON.parse(localStorage.getItem('details'));

    if (itemData && itemData.length > 0) {
        itemData.forEach(row => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${row.number}</td>
                <td>${row.name}</td>
                <td>${row.piece}</td>
                <td>${row.price}</td>
                <td>${row.total}</td>
            `;
            tableField.appendChild(newRow);
        });
    }

    if (overallData) {
        document.getElementById('overall_pieces').textContent = overallData.overallPieces;
        document.getElementById('overall_total').textContent = overallData.overallTotal;
    }

    if (details) {
        document.getElementById('osname').textContent = details.SName;
        document.getElementById('oaddress').textContent = details.address;
        document.getElementById('oname').textContent = details.Name;
        document.getElementById('ono').textContent = details.no;
        document.getElementById('cuname').textContent = details.customername;
        document.getElementById('cuno').textContent = details.customerno;
    }
}
