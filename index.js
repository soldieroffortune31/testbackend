const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3000; 
const fungsiBilangan = require('./controller/fungsiBilangan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.post('/jumlahanggota', fungsiBilangan.jumlahAnggota)
app.post('/anggotaterkecil', fungsiBilangan.anggotaTekecil)
app.post('/anggotaterbesar', fungsiBilangan.anggotaTerbesar)
app.post('/carianggota', fungsiBilangan.cariAnggota)
app.post('/urutananggota', fungsiBilangan.findIndex)
app.post('/totalganjilgenap', fungsiBilangan.totalGanjilGenap)
app.post('/ganjilgenap', fungsiBilangan.bilanganGanjilGenap)

app.use((req, res) => {
    res.status('404').json({code : 400, message : "API Not Found"});
})

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});