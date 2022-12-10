const express = require("express");
const app = express();
const PORT = 3000;
const randomstring = require("randomstring");

const server = app.listen(PORT, () => {
    console.log("Server started at " + PORT);
});

//SET doesn't see the same element more than 1 time
let keys = new Set([
    "HCNLVVJ1MW",
    "HCNLVVJ1MW",
    "E16ERWVKFD",
    "JUHVG1CNPV",
    "N4IWB8KWNJ",
    "LASXLFX82F",
    "MFP9XQC9Q4",
    "WUEPZOWPSA",
    "YOLQHUMHON",
]);
                                                                                                                                                                                                                 
let usedKeys = new Set([]);
const prizes = ["500MB Internet", "3TL Trendyol indirim çeki", "25.000 Tavla Çip"]

app.get("/:key", async (req, res) => {

    const userKey = req.params.key

    if (keys.has(userKey)) {

        console.log(true);
        let randomPrize = Math.floor(Math.random() * prizes.length);                                           
        let gift = prizes[randomPrize]
        keys.delete(userKey)
        usedKeys.add(userKey)
        console.log(usedKeys);

        res.status(200).json({
            isValid: true,
            code: userKey,
            prize: gift
        });

    } else {
        res.status(200).json({
            isValid: false,
            data: "Üzgünüz bu kod daha önce kullanılmış 😢"
        })
    }

});


const generateKeys = () => {
    for (let i = 0; i < 25; i++) {
        let key = randomstring.generate({ length: 10, capitalization: "uppercase", charset: "numeric" });
        console.log(`"${key}",`);
        key.add(keys);
    }
}