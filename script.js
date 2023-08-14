const WordText = document.getElementById("1"),
HintText = document.querySelector(".hint span"),
RefBtn = document.querySelector(".refresh-word"),
Timer = document.querySelector(".time b"),
cek = document.querySelector(".check-word"),
input = document.querySelector("input");
const words = [
    {
        word: "17 Agustus",
        hint: "Tanggal memperingati kemerdekaan indonesia",
    },
    {
        word: "1945",
        hint: "Indonesia Merdeka pada tahun?",
    },
        {
        word: "Soekarno",
        hint: "Bapak Proklamator Indonesia..",
    },
    {
        word: "Pancasila",
        hint: "Dasar Negara Indonesia...",
    },
    {
        word: "Garuda",
        hint: "Lambang Negara Indonesia...",
    },
    {
        word: "Jakarta",
        hint: "Nama Ibu Kota Indonesia...",
    },
    {
        word: "Rupiah",
        hint: "Mata Uang Indonesia...",
    },
    {
        word: "Moh Hatta",
        hint: "Wakil Presiden RI Pertama...",
    },
    {
        word: "17",
        hint: "Jumlah Bulu Sayap Burung Garuda...",
    },
    {
        word: "14 Agustus 1945",
        hint: "Jepang menyerah pada sekutu tanggal...",
    },
    {
        word: "7 Agustus 1945",
        hint: "BPUPKI dibubarkan pada tanggal...",
    },
    {
        word: "Demokratis",
        hint: "Sistem Poitik Negara Indonesia...",
    },
    {
        word: "21 Juli",
        hint: "Agresi Pertama Belanda...",
    },
    {
        word: "Sayuti Melik",
        hint: "Yang Mengetik Text Proklamsi...",
    },
    {
        word: "Laksamana Maeda",
        hint: "Perumusan pancasila dilakukan di rumah...",
    },
    {
        word: "350 tahun",
        hint: "Berapa lama belanda menjajah indonesia...",
    },
    {
        word: "1942",
        hint: "Jepang mulai menjajah indonesia pada tahun...",
    },
];
let koreksiWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if ( maxTime > 0) {
            maxTime--;
            return Timer.innerText = maxTime;
        }
        clearInterval(timer);
        alert('Waktu Habis! Jawaban : ' + koreksiWord.toUpperCase() + ' Semoga Beruntung Lain Kali!');
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    };
    WordText.innerText = wordArray.join("");
    HintText.innerText = randomObj.hint;
    koreksiWord = randomObj.word.toLowerCase();
    input.value = "";
    input.setAttribute("maxlength", koreksiWord.length);
    console.log(randomObj);
}
initGame();

const cekWord = () => {
    let kata = input.value.toLocaleLowerCase();
    if (!kata) return alert("Masukan Kata Dengan Benar!")
    if ( kata !== koreksiWord) return alert('Opsss! Jawaban: ' + kata + ' Salah!');
    alert('Selamat Jawaban: ' + kata.toUpperCase() + ' Benar!');
    initGame();
}

RefBtn.addEventListener("click", initGame);
cek.addEventListener("click", cekWord);

function drop() {
    console.log("hello world");
    document.querySelector(".dropdown").style.animation = "Masuk 1s ease";
    document.querySelector(".dropdown").style.opacity = "1";
    setTimeout(() => {
        document.querySelector(".dropdown").style.animation = "Keluar 1s ease";
        document.querySelector(".dropdown").style.opacity = "0";
    }, 10000);
}
function game() {
    document.querySelector(".container").style.animation = "Masuk 1s ease";
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".container-A").style.animation = "Keluar 1s ease";
    document.querySelector(".container-A").style.opacity = "0";
    document.querySelector(".container-A").style.display = "none";
    initTimer(30);
    initGame();
}
function About() {
    document.querySelector(".container").style.animation = "Keluar 1s ease";
    document.querySelector(".container").style.opacity = "0";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-A").style.animation = "Masuk 1s ease";
    document.querySelector(".container-A").style.opacity = "1";
    document.querySelector(".container-A").style.display = "block";
    initTimer(1000000);
}
