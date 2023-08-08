function LinkedList() {
    this.head = null;
    this._lengthlength = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;

}

let miLista = new LinkedList();

LinkedList.prototype.add = function (value) {
    let nuevoNodo = new Node(value);
    let current = this.head; //current, párate en el primer elemento 

    if (current === null) { // Antes de empezar a agregar tengo que verificar si current esta vacio o no preguntando si current en null
        this.head = nuevoNodo; //si la lista esta vacia quiero que el nuevo nodo se ubique en head
        this._length = 1;
    }else{
        while(current.next){//Mientras que el valor current tenga un valor... 
            current = current.next; //avanza un paso al siguiente  .next 
        } 

        current.next = nuevoNodo; // y si no, agrega a current.next el nuevo nodo.
        this._length++;
        return value
    }


}

miLista.add("Mojito");
miLista.add("Zeus");
miLista.add("Piolin");

console.log(miLista._length)