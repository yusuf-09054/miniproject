function printBill() {
    let billWindow = window.open("", "", "width=800,height=600");

    let billContent = `
        <html>
        <head>
            <title>Customer Bill</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                h2 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #000; padding: 8px; text-align: center; }
                th { background-color: #f2f2f2; }
                .total-section { text-align: right; font-size: 18px; margin-top: 10px; font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Ocean Cafe</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price (Rs.)</th>
                        <th>Quantity</th>
                        <th>Total (Rs.)</th>
                    </tr>
                </thead>
                <tbody>`;

    let items = [
        { id: "coffee", name: "Coffee", price: 20 },
        { id: "tea", name: "Tea", price: 10 },
        { id: "sandwich", name: "Sandwich", price: 30 },
        { id: "teacake", name: "Tea Cake", price: 20 },
        { id: "puffs", name: "Puffs", price: 22 },
        { id: "pizza", name: "Pizza", price: 60 },
        { id: "bbj", name: "Bun Butter Jam", price: 30 },
        { id: "ccake", name: "Chocolate Cake", price: 45 },
        { id: "applepie", name: "Apple Pie", price: 75 }
    ];

    let grandTotal = 0;
    let itemsOrdered = 0;

    items.forEach(item => {
        let quantity = document.getElementById(`${item.id}-quantity`).value;
        let total = parseFloat(quantity * item.price).toFixed(2);

        if (quantity > 0) {  // Include only selected items
            billContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${quantity}</td>
                    <td>${total}</td>
                </tr>`;
            grandTotal += parseFloat(total);
            itemsOrdered++;
        }
    });

    if (itemsOrdered === 0) {
        alert("No items selected! Please add items before printing the bill.");
        return;
    }

    billContent += `
                </tbody>
            </table>
            <div class="total-section">
                <h3>Total: Rs. ${grandTotal.toFixed(2)}</h3>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    window.close();
                };
            </script>
        </body>
        </html>`;

    billWindow.document.write(billContent);
    billWindow.document.close();
}


