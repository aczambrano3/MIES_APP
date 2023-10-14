export class Barthel {
    idEncabezado: string;
    p1_comer: string;
    p2_retrasladarse: string;
    p3_aseo: string;
    p4_uso_retrete: string;
    p5_bañarse: string;
    p6_desplazarse: string;
    p7_escaleras: string;
    p8_vestirse: string;
    p9_control_heces: string;
    p10_control_orina: string;
    tiempo_inicial: string;
    tiempo_final: string;
    tiempo_total: string;
    estado: string;
    puntaje_total: number;

    constructor(idEncabezado: string,
        p1_comer: string,
        p2_retrasladarse: string,
        p3_aseo: string,
        p4_uso_retrete: string,
        p5_bañarse: string,
        p6_desplazarse: string,
        p7_escaleras: string,
        p8_vestirse: string,
        p9_control_heces: string,
        p10_control_orina: string,
        tiempo_inicial: string,
        tiempo_final: string,
        tiempo_total: string,
        estado: string,
        puntaje_total: number) {
        this.idEncabezado = idEncabezado;
        this.p1_comer = p1_comer;
        this.p2_retrasladarse = p2_retrasladarse;
        this.p3_aseo = p3_aseo;
        this.p4_uso_retrete = p4_uso_retrete;
        this.p5_bañarse = p5_bañarse;
        this.p6_desplazarse = p6_desplazarse;
        this.p7_escaleras = p7_escaleras;
        this.p8_vestirse = p8_vestirse;
        this.p9_control_heces = p9_control_heces;
        this.p10_control_orina = p10_control_orina;
        this.tiempo_inicial = tiempo_inicial;
        this.tiempo_final = tiempo_final;
        this.tiempo_total = tiempo_total;
        this.estado = estado;
        this.puntaje_total = puntaje_total;

    }
}