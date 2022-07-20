const sia = ["abc", "d", "efghi", "j", "klmnop", "qr","st","uv","wxyz"];

function arrName(){
   let arr1 = sia[6][1];
   let arr2 = sia[2][0];
   let concatName = arr1.concat(arr2);
   
    let arr3 = sia[4][0];
    let arr4 = sia[0][0];
    let arr5 = sia[7][1];
    let concatSurname = arr3.concat(arr4,arr5);

    let joined = concatName + concatSurname;

   let reallyJoined =  sia.push(joined);
   return sia;
}

console.log(arrName());