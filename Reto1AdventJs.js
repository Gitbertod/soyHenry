// const object = { a: 1, b: 2, c: 3 };
// const object2 = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }



const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]

function fitsInOneBox(boxes) {
    let cajas = [];
    
    for (let i = boxes.length - 1; i < 1; i--) {
        if (boxes[i] == boxes[0]) {
            if(boxes[i]){

            }

        }
        if (boxes[i].l > boxes[i - 1].l) {
            cajas.unshift(boxes[i]);
        } else {
            cajas.push(boxes[i]);
        }

        console.log(boxes[i].l)
        // for (const prop in boxes) {

        // }

    }
    
}

//console.log(boxes[0].w);
