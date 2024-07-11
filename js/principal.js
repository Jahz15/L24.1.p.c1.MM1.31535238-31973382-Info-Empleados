/**En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es el monto promedio que paga por cada tipo de personal. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150 */
import Cl_trabajadores from "./Cl_trabajadores.js";
import Cl_Empresa from "./Cl_empresa.js";

let emp = new Cl_Empresa();

let t1 = new Cl_trabajadores("Juan", "obrero", 100);
let t2 = new Cl_trabajadores("Ana", "obrero", 120);
let t3 = new Cl_trabajadores("Lin", "administrativo", 200);
let t4 = new Cl_trabajadores("Mary", "obrero", 50);
let t5 = new Cl_trabajadores("Carlos", "administrativo", 150);

emp.procesarTrabajadores(t1);
emp.procesarTrabajadores(t2);
emp.procesarTrabajadores(t3);
emp.procesarTrabajadores(t4);
emp.procesarTrabajadores(t5);

let salida = document.getElementById("salida");

salida.innerHTML = `
Monto total pagado a obreros: ${emp.acumTotalObreros}$
<br>Promedio pagado a obreros: ${emp.calcPromedioObrero()}$<br>
<br>Monto total pagado a administrativos: ${emp.acumTotalAdmin}$
<br>Promedio pagado a administrativos: ${emp.calcPromedioAdmin()}$<br>`