export default class Cl_Empresa{
    constructor(){
        this.acumTotalObreros = 0;
        this.acumTotalAdmin = 0;
    }

    procesarTrabajadores(t){
    if(t.tipoP == 'obrero'){
        this.acumTotalObreros += t.paga;}
        else if(t.tipoP == 'administrativo'){
        this.acumTotalAdmin += t.paga;}
    }

    calcPromedioObrero(){
        return this.acumTotalObreros/3;}
    calcPromedioAdmin(){
        return this.acumTotalAdmin/2;}
}