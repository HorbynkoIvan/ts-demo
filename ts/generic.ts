//generic - позволяют писать переиспользуемый код

function logTime<T>(num: T): T {
    console.log(num)
    return num;
}

logTime<number>(1)
logTime<string>('sadad')

function logTime1<T>(num: T): T {
    if (typeof num == 'string') {
        num.toLowerCase()
    }
    console.log(num)
    return num;
}

interface myInterface {
    transform: <T, F>(n: T) => F
}

//extend
interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num;
}