//tuple - (кортеж) хранят значения разных типов в массиве

const v: [number, string, number] = [0, 'a', 0]

v.map(s => {
    switch (typeof s) {
        case "string":

            break;
    }
})

const [v1, v2, v3] = v; //destruction
const [v4, ...rest] = v; //rest