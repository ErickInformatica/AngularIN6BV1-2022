export class Productos {
  constructor(
    public _id: String,
    public nombre: String,
    public sabores: [],
    public provedores: [{
      idProveedor: String
    }],
    public cantidad: Number,
    public precio: Number
  ){}


}
