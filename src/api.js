export default function(callback) {
    setTimeout(() => {
        callback([
            {
                name: "Poniedziałek",
                date: "01.01",
                temp: "-4º C"
            },
            {
                name: "Wtorek",
                date: "02.01",
                temp: "-8º C"
            },
            {
                name: "Środa",
                date: "03.01",
                temp: "-1º C"
            },
            {
                name: "Czwarte",
                date: "04.01",
                temp: "2º C"
            },
            {
                name: "Piątek",
                date: "05.01",
                temp: "0º C"
            },
        ])
    }, 500);
}