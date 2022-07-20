function convert (hours,minutes){
    return (hours * 3600) + (minutes * 60);
}

const hh = 1;
const mm = 3;


console.log(`Your time is ${convert(hh,mm)} Seconds in total`);