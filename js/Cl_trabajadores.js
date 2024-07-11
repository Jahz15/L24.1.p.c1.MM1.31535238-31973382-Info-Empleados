export default class Cl_trabajadores {
    constructor(nombre ,tipoP, paga){
        this.nombre = nombre;
        this.tipoP = tipoP;
        this.paga = paga;
    }

    set nombre(nombre){
        this._nombre = nombre}
    get nombre(){
        return this._nombre}

    set tipoP(tipoP){
        this._tipoP = tipoP}
    get tipoP(){
        return this._tipoP}

    set paga(paga){
        this._paga = paga}
    get paga(){
        return this._paga}     
}         