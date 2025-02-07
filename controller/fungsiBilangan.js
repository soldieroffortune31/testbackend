const jumlahAnggota = (req, res) => {
    const arr = req.body.data
    let jumlah = arr.length
    res.status(200).json({jumlahAnggota : jumlah})
}

const anggotaTekecil = (req, res) => {
    const arr = req.body.data
    const min = Math.min(...arr);
    res.status(200).json({anggotaTekecil : min})
}

const anggotaTerbesar = (req, res) => {
    const arr = req.body.data
    const max = Math.max(...arr);
    res.status(200).json({anggotaTerbesar : max})
}

const cariAnggota = (req, res) => {
    const arr = req.body.data
    const nilaiInput = req.body.nilaiInput
    const newArray = arr.find(el => el == nilaiInput && el > 1)
    if(!newArray){
        return res.status(404).json({message : "Data Tidak Ditemuakn"})
    }
    res.status(200).json({data : newArray})
}

const findIndex = (req, res) => {
    const arr = req.body.data
    const nilaiInput = req.body.nilaiInput
    arr.sort((a,b) => a - b)

    const find = arr.find(el => el == nilaiInput && el > 1)
    if(!find){
        return res.status(400).json({message : 'Data tidak ditemukan'})
    }

    let index = arr.findIndex(el => el == nilaiInput) + 1
    res.status(200).json({urutanKe : index})
}

const totalGanjilGenap = (req, res) =>{
    const arr = req.body.data

    let bilanganGanjil = 0
    let bilanganGenap = 0
    arr.forEach(element => {
        if(element % 2 === 0){
            bilanganGenap = bilanganGenap + 1
        } 

        if(element % 2 != 0){
            bilanganGanjil = bilanganGanjil + 1
        }
    });

    res.status(200).json({bilanganGanjil : bilanganGanjil, bilanganGenap : bilanganGenap})

}

const bilanganGanjilGenap = (req, res) => {

    const arr = req.body.data

    const bilanganGanjil = []
    const bilanganGenap = []

    arr.forEach(element => {
        if(element % 2 === 0){
            bilanganGenap.push(element)
        } 

        if(element % 2 != 0){
            bilanganGanjil.push(element)
        }
    });

    res.status(200).json({bilanganGanjil : bilanganGanjil, bilanganGenap, bilanganGenap})
}

module.exports = {
    jumlahAnggota,
    anggotaTekecil,
    anggotaTerbesar,
    cariAnggota,
    findIndex,
    totalGanjilGenap,
    bilanganGanjilGenap
}