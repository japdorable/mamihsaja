const teks1 = document.getElementById('satu');
const teks2 = document.getElementById('dua');
const teks3 = document.getElementById('tiga');
const teks4 = document.getElementById('empat');
const happy = document.getElementById('happy');
const next = document.getElementById('next');
const text = document.getElementById('text');
const stars = document.getElementById('stars')




function teks(){
    teks1
    .velocity({
        opacity: 1,
    }, {
        delay: 25000,
        duration: 1500,
    })

    teks2
    .velocity({
        opacity: 1,
    }, {
        delay: 30000,
        duration: 1500,
    })

    teks3
    .velocity({
        opacity: 1,
    }, {
        delay: 40000,
        duration: 1500,
    })

    teks4
    .velocity({
        opacity: 1,
    }, {
        delay: 50000,
        duration: 1500,
    })

    happy
    .velocity({
        opacity: 1,
    }, {
        delay: 58000,
        duration: 1500,
    })

    next
    .velocity({
        opacity: 1,
    }, {
        delay: 61000,
        duration: 1500,
    })

    stars
    .velocity({
        opacity: 0.5,
    }, {
        delay: 24000,
        duration: 3000,
    })
}


teks()