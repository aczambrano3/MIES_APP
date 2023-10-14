export class Lawton {
    idEncabezado: string;
    lb_p1: string;
    lb_p2: string;
    lb_p3: string;
    lb_p4: string;
    lb_p5: string;
    lb_p6: string;
    lb_p7: string;
    lb_p8: string;
    tiempo_inicial: string;
    tiempo_final: string;
    tiempo_total: string;
    estado: string;
    puntaje_total: number;

    constructor(idEncabezado: string,
        lb_p1: string,
        lb_p2: string,
        lb_p3: string,
        lb_p4: string,
        lb_p5: string,
        lb_p6: string,
        lb_p7: string,
        lb_p8: string,
        tiempo_inicial: string,
        tiempo_final: string,
        tiempo_total: string,
        estado: string,
        puntaje_total: number) {
        this.idEncabezado = idEncabezado;
        this.lb_p1 = lb_p1;
        this.lb_p2 = lb_p2;
        this.lb_p3 = lb_p3;
        this.lb_p4 = lb_p4;
        this.lb_p5 = lb_p5;
        this.lb_p6 = lb_p6;
        this.lb_p7 = lb_p7;
        this.lb_p8 = lb_p8;
        this.tiempo_inicial = tiempo_inicial;
        this.tiempo_final = tiempo_final;
        this.tiempo_total = tiempo_total;
        this.estado = estado;
        this.puntaje_total = puntaje_total;

    }
}