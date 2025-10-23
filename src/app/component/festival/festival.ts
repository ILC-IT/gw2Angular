export interface FestivalDivisas {
    id: number;
    nombre: string;
    tengo?: number;
    icon: string;
    precioTpCompra: number;
    precioTpCompraS: string;
    precioTpVenta: number;
    precioTpVentaS: string;
    isBarataCompra?: boolean;
    isBarataVenta?: boolean;
};

export interface FestivalMonedas {
    id: number;
    nombre: string;
    tengo?: number;
    icon: string;
};