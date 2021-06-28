/**
 *  Contiene data armada sobre los items que usa la aplicacion junto con la localizacion de la imagen.
 */
export class DataSimulator {
    constructor(){
        this.itemsDataArray = [
            {
                id: 1,
                titulo: "Guantes Title",
                precio: 1500,
                stock: 10,
                categoria: "equipamiento",
                detalle: "Guantes de boxeo TITLE de 16 oz con ajuste de velcro.",
                imagenUrl: "/imagenes/guantes001.jpg"
            },
            {
                id: 4,
                titulo: "Short Venom",
                categoria: "indumentaria",
                precio: 4100,
                stock: 3,
                detalle: "Shorts deportivo VENOM talle S.",
                imagenUrl: "/imagenes/shorts001.jpg"
            },
            {
                id: 2,
                titulo: "Cabezal Casanova",
                categoria: "equipamiento",
                precio: 1600,
                stock: 6,
                detalle: "Protector de cabeza acolchado color celeste Casanova, con ajuste de cordón.",
                imagenUrl: "/imagenes/headset001.jpg"
            },
            {
                id: 3,
                titulo: "Tibiales KING",
                categoria: "equipamiento",
                precio: 2500,
                stock: 7,
                detalle: "Protector de tibia y empeine KING talla M, color negro.",
                imagenUrl: "/imagenes/shinGuard001.jpg"
            },
            
            {
                id: 5,
                titulo: "Remera Reebook UFC",
                categoria: "indumentaria",
                detalle: "Remera de manga corta, negra y dorada, Reebook Ultimate Fighter Championship, talle L.",
                precio: 3700,
                stock: 8,
                imagenUrl: "/imagenes/shirt001.jpg"
            },
            {
                id: 6,
                titulo: "Buzo TAPOUT",
                categoria: "indumentaria",
                detalle: "Buzo con capucha blanco TAPOUT talle L.",
                precio: 2900,
                stock: 2,
                imagenUrl: "/imagenes/hoodie001.jpg"
            }
        ];
    }
    
}