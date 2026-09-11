const fs = require('fs').promises;
const path = require('path');

async function loadJSON() {
    try {
        const filePath = path.join(__dirname, 'data.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(jsonData);
        
        for (let i = 0; i < data.orders.length; i++){
            console.log("Name:", data. orders[i].name);
            for (let num = 0; num < data.products.length; num++){
                console.log(data.products[num].item, "x", data.orders[i].qty[num]); 
            }
            console.log("-----------------------")
        }
        
    } catch (err) {
        console.error('Error reading JSON file:', err.message);
    }
}

loadJSON();
