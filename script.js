let toplamSaniye = 0
let saat = document.getElementById("saat")

let z, k, m, s



function zaman() {
    z = setInterval(function() {
        k = Math.floor(toplamSaniye / 3600) % 24;
        m = Math.floor(toplamSaniye / 60) % 60;
        s = toplamSaniye % 60;

        k = k < 10 ? `0${k}` : k
        m = m < 10 ? `0${m}` : m
        s = s < 10 ? `0${s}` : s
        saat.innerHTML = ` ${k}.${m}.${s}`
        toplamSaniye++
        if (k == 1) {
            document.getElementById("yazi").innerHTML = "1 saat oldu bile"
        }
        if (k == 2) {
            document.getElementById("yazi").innerHTML = "Şimdi değilse ne zaman"
        }
        if (k == 5) {
            document.getElementById("yazi").innerHTML = "Pes etme "
        }
        if (k == 7) {
            document.getElementById("yazi").innerHTML = "Maşallah,çalışmaya devamm"
        }
    }, 1000)
}



function stop() {
    clearInterval(z)
}