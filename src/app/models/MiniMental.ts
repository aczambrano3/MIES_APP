export class MiniMental {
    idEncabezado: string;
    orientacion_tiempo: object;
    orientacion_en_el_espacio: object;
    memoria: object;
    atencion_y_calculo: object;
    memoria_diferida: object;
    denominacion: object;
    repeticion_de_una_frase: string;
    comprension_ejecucion_de_orden: object;
    lectura: string;
    escritura: string;
    copia_de_un_dibujo: string;
    tiempo_inicial: string;
    tiempo_final: string;
    tiempo_total: string;
    puntaje_total: number;
    constructor( idEncabezado: string,
        orientacion_tiempo: object,
        orientacion_en_el_espacio: object,
        memoria: object,
        atencion_y_calculo: object,
        memoria_diferida: object,
        denominacion: object,
        repeticion_de_una_frase: string,
        comprension_ejecucion_de_orden: object,
        lectura: string,
        escritura: string,
        copia_de_un_dibujo: string,
        tiempo_inicial: string,
        tiempo_final: string,
        tiempo_total: string,
        puntaje_total: number) {
        this.idEncabezado = idEncabezado;
        this.orientacion_tiempo = orientacion_tiempo;
        this.orientacion_en_el_espacio = orientacion_en_el_espacio;
        this.memoria = memoria;
        this.atencion_y_calculo = atencion_y_calculo;
        this.memoria_diferida = memoria_diferida;
        this.denominacion = denominacion;
        this.repeticion_de_una_frase = repeticion_de_una_frase;
        this.comprension_ejecucion_de_orden = comprension_ejecucion_de_orden;
        this.lectura = lectura;
        this.escritura = escritura;
        this.copia_de_un_dibujo = copia_de_un_dibujo;
        this.tiempo_inicial = tiempo_inicial;
        this.tiempo_final = tiempo_final;
        this.tiempo_total = tiempo_total;
        this.puntaje_total = puntaje_total;
    }
}