export interface Glifos {
  category: string;
  nombre: string;
};

export interface GlifosTP extends ItemConPrecios {
  icon?: string;
  nombre: string;
  description?: string;
  enlace?: string;
};

export interface Huerto extends ItemConPrecios {
  nombre: string;
  tengo: number;
  icon: string;
};

export interface ItemConPrecios {
  id: number;
  precioTpCompra?: number;
  precioTpCompraS?: string;
  precioTpCompraSF?: string;
  precioOrdenableTpCompra?: string;
  precioTpVenta?: number;
  precioTpVentaS?: string;
  precioTpVentaSF?: string;
  precioOrdenableTpVenta?: string;
}

export const glyphs: GlifosTP[] = [
  { nombre: 'Glifo de siega (sin usar)', id: 90726 },
  { nombre: 'Glifo de botín (sin usar)', id: 87385 },
  { nombre: 'Glifo de virtud (sin usar)', id: 92833 },
  { nombre: 'Glifo del crisol (sin usar)', id: 90538 },
  { nombre: 'Glifo de rapidez (sin usar)', id: 87434 },
  { nombre: 'Glifo del sastre (sin usar)', id: 87460 },
  { nombre: 'Glifo de alquimia (sin usar)', id: 90664 },
  { nombre: 'Glifo del buscador (sin usar)', id: 87515 },
  { nombre: 'Glifo del peletero (sin usar)', id: 87452 },
  { nombre: 'Glifo del liberado (sin usar)', id: 87410 },
  { nombre: 'Glifo de diligente (sin usar)', id: 87451 },
  { nombre: 'Glifo del forestal (sin usar)', id: 87559 },
  { nombre: 'Glifo de sobrecarga (sin usar)', id: 92915 },
  { nombre: 'Glifo de volatilidad (sin usar)', id: 88045 },
  { nombre: 'Glifo del carroñero (sin usar)', id: 87426 },
  { nombre: 'Glifo del herborista (sin usar)', id: 88298 },
  { nombre: 'Glifo del cronometrador (sin usar)', id: 92682 },
  { nombre: 'Glifo de la caballera mecánica (sin usar)', id: 87424 }
];

export const GLIFO: Glifos[] = [
  { category: "Harvesting", nombre: '-' },
  { category: "Logging", nombre: '-' },
  { category: "Mining", nombre: '-' },
];