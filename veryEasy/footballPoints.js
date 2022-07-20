function footballPoints(wins,loses,draw){
    return (wins * 3) + (loses * 1) + (draw * 0);
}

console.log(`Your Team has ${footballPoints(5,0,2)} points`);