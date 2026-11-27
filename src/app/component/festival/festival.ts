export interface FestivalDivisas {
    id: number;
    nombre: string;
    tengo?: number;
    icon: string;
    gw2bltc: string;
    precioTpCompra: number;
    precioTpCompraS: string;
    precioTpCompraSF?: string;
    precioTpVenta: number;
    precioTpVentaS: string;
    precioTpVentaSF?: string;
    isBarataCompra?: boolean;
    isBarataVenta?: boolean;
    skinTengo?: number;
    skinFaltan?: number;
    skinsFaltantes?: skinInfo[];
};

export interface FestivalMonedas {
    id: number;
    nombre: string;
    tengo?: number;
    icon: string;
};

export interface skinInfo {
    nombre: string;
    arma: string;
    id: number;
    idSkin: number;
};

export const lunarGiftBoxSkinIds: skinInfo[] = [
    {
        nombre: "Hacha de fuegos artificiales",
        arma: "Hacha",
        id: 99345,
        idSkin: 11208
    },
    {
        nombre: "Daga de fuegos artificiales",
        arma: "Daga",
        id: 99332,
        idSkin: 11217
    },
    {
        nombre: "Maza de fuegos artificiales",
        arma: "Maza",
        id: 99334,
        idSkin: 11201
    },
    {
        nombre: "Pistola de fuegos artificiales",
        arma: "Pistola",
        id: 99347,
        idSkin: 11230
    },
    {
        nombre: "Cetro de fuegos artificiales",
        arma: "Cetro",
        id: 99316,
        idSkin: 11219
    },
    {
        nombre: "Espada de fuegos artificiales",
        arma: "Espada",
        id: 99311,
        idSkin: 11220
    },
    {
        nombre: "Foco de fuegos artificiales",
        arma: "Foco",
        id: 99317,
        idSkin: 11211
    },
    {
        nombre: "Escudo de fuegos artificiales",
        arma: "Escudo",
        id: 99325,
        idSkin: 11215
    },
    {
        nombre: "Antorcha de fuegos artificiales",
        arma: "Antorcha",
        id: 99346,
        idSkin: 11232
    },
    {
        nombre: "Cuerno de guerra de fuegos artificiales",
        arma: "Cuerno de guerra",
        id: 99314,
        idSkin: 11207
    },
    {
        nombre: "Mandoble de fuegos artificiales",
        arma: "Mandoble",
        id: 99339,
        idSkin: 11213
    },
    {
        nombre: "Martillo de fuegos artificiales",
        arma: "Martillo",
        id: 99338,
        idSkin: 11218
    },
    {
        nombre: "Arco largo de fuegos artificiales",
        arma: "Arco largo",
        id: 99335,
        idSkin: 11203
    },
    {
        nombre: "Rifle de fuegos artificiales",
        arma: "Rifle",
        id: 99336,
        idSkin: 11214
    },
    {
        nombre: "Arco corto de fuegos artificiales",
        arma: "Arco corto",
        id: 99337,
        idSkin: 11202
    },
    {
        nombre: "Báculo de fuegos artificiales",
        arma: "Báculo",
        id: 99324,
        idSkin: 11225
    },
    {
        nombre: "Lanza de fuegos artificiales",
        arma: "Lanza",
        id: 106987,
        idSkin: 13766
    }
];

export const supersacoDeBotinSkinIds: skinInfo[] = [
    {
        nombre: "Hacha láser",
        arma: "Hacha",
        id: 97961,
        idSkin: 10774
    },
    {
        nombre: "Daga láser",
        arma: "Daga",
        id: 97940,
        idSkin: 10772
    },
    {
        nombre: "Maza láser",
        arma: "Maza",
        id: 97946,
        idSkin: 10776
    },
    {
        nombre: "Pistola láser",
        arma: "Pistola",
        id: 97937,
        idSkin: 10767
    },
    {
        nombre: "Cetro láser",
        arma: "Cetro",
        id: 97911,
        idSkin: 10783
    },
    {
        nombre: "Espada láser",
        arma: "Espada",
        id: 97942,
        idSkin: 10799
    },
    {
        nombre: "Foco láser",
        arma: "Foco",
        id: 97921,
        idSkin: 10775
    },
    {
        nombre: "Escudo láser",
        arma: "Escudo",
        id: 97931,
        idSkin: 10794
    },
    {
        nombre: "Antorcha láser",
        arma: "Antorcha",
        id: 97976,
        idSkin: 10785
    },
    {
        nombre: "Cuerno de guerra láser",
        arma: "Cuerno de guerra",
        id: 97986,
        idSkin: 10788
    },
    {
        nombre: "Mandoble láser",
        arma: "Mandoble",
        id: 97957,
        idSkin: 10768
    },
    {
        nombre: "Martillo láser",
        arma: "Martillo",
        id: 97955,
        idSkin: 10798
    },
    {
        nombre: "Arco largo láser",
        arma: "Arco largo",
        id: 97924,
        idSkin: 10787
    },
    {
        nombre: "Rifle láser",
        arma: "Rifle",
        id: 97932,
        idSkin: 10771
    },
    {
        nombre: "Arco corto láser",
        arma: "Arco corto",
        id: 97964,
        idSkin: 10773
    },
    {
        nombre: "Báculo láser",
        arma: "Báculo",
        id: 97919,
        idSkin: 10796
    },
    {
        nombre: "Lanza láser",
        arma: "Lanza",
        id: 108841,
        idSkin: 13831
    }
];

export const dragonBashPrizeCofferSkinIds: skinInfo[] = [
    {
        nombre: "Hacha de hueso de dragón",
        arma: "Hacha",
        id: 98170,
        idSkin: 10850
    },
    {
        nombre: "Daga de hueso de dragón",
        arma: "Daga",
        id: 98165,
        idSkin: 10871
    },
    {
        nombre: "Maza de hueso de dragón",
        arma: "Maza",
        id: 98167,
        idSkin: 10873
    },
    {
        nombre: "Pistola de hueso de dragón",
        arma: "Pistola",
        id: 98184,
        idSkin: 10861
    },
    {
        nombre: "Cetro de hueso de dragón",
        arma: "Cetro",
        id: 98204,
        idSkin: 10859
    },
    {
        nombre: "Espada de hueso de dragón",
        arma: "Espada",
        id: 98212,
        idSkin: 10848
    },
    {
        nombre: "Foco de hueso de dragón",
        arma: "Foco",
        id: 98211,
        idSkin: 10863
    },
    {
        nombre: "Escudo de hueso de dragón",
        arma: "Escudo",
        id: 98199,
        idSkin: 10860
    },
    {
        nombre: "Antorcha de hueso de dragón",
        arma: "Antorcha",
        id: 98201,
        idSkin: 10872
    },
    {
        nombre: "Cuerno de guerra de hueso de dragón",
        arma: "Cuerno de guerra",
        id: 98169,
        idSkin: 10868
    },
    {
        nombre: "Mandoble de hueso de dragón",
        arma: "Mandoble",
        id: 98171,
        idSkin: 10874
    },
    {
        nombre: "Martillo de hueso de dragón",
        arma: "Martillo",
        id: 98207,
        idSkin: 10864
    },
    {
        nombre: "Arco largo de hueso de dragón",
        arma: "Arco largo",
        id: 98195,
        idSkin: 10844
    },
    {
        nombre: "Trabuco de hueso de dragón",
        arma: "Rifle",
        id: 98176,
        idSkin: 10845
    },
    {
        nombre: "Arco corto de hueso de dragón",
        arma: "Arco corto",
        id: 98178,
        idSkin: 10869
    },
    {
        nombre: "Báculo de hueso de dragón",
        arma: "Báculo",
        id: 98205,
        idSkin: 10855
    },
    {
        nombre: "Lanza de hueso de dragón",
        arma: "Lanza",
        id: 109806,
        idSkin: 14026
    }
];

export const fourWindsPrizeBagSkinIds: skinInfo[] = [
    {
        nombre: "Hacha mecánica",
        arma: "Hacha",
        id: 98809,
        idSkin: 10931
    },
    {
        nombre: "Daga mecánica",
        arma: "Daga",
        id: 98569,
        idSkin: 10913
    },
    {
        nombre: "Maza mecánica",
        arma: "Maza",
        id: 98427,
        idSkin: 10948
    },
    {
        nombre: "Pistola mecánica",
        arma: "Pistola",
        id: 98521,
        idSkin: 10963
    },
    {
        nombre: "Cetro mecánico",
        arma: "Cetro",
        id: 98843,
        idSkin: 10958
    },
    {
        nombre: "Espada mecánica",
        arma: "Espada",
        id: 98775,
        idSkin: 10937
    },
    {
        nombre: "Foco mecánico",
        arma: "Foco",
        id: 98578,
        idSkin: 10926
    },
    {
        nombre: "Escudo mecánico",
        arma: "Escudo",
        id: 98755,
        idSkin: 10938
    },
    {
        nombre: "Antorcha mecánica",
        arma: "Antorcha",
        id: 98826,
        idSkin: 10910
    },
    {
        nombre: "Cuerno de guerra mecánico",
        arma: "Cuerno",
        id: 98492,
        idSkin: 10945
    },
    {
        nombre: "Mandoble mecánico",
        arma: "Mandoble",
        id: 98632,
        idSkin: 10955
    },
    {
        nombre: "Martillo mecánico",
        arma: "Martillo",
        id: 98784,
        idSkin: 10917
    },
    {
        nombre: "Arco largo mecánico",
        arma: "Arco largo",
        id: 98445,
        idSkin: 10919
    },
    {
        nombre: "Rifle mecánico",
        arma: "Rifle",
        id: 98506,
        idSkin: 10954
    },
    {
        nombre: "Arco corto mecánico",
        arma: "Arco corto",
        id: 98432,
        idSkin: 10915
    },
    {
        nombre: "Báculo mecánico",
        arma: "Báculo",
        id: 98452,
        idSkin: 10921
    },
    {
        nombre: "Lanza mecánica",
        arma: "Lanza",
        id: 109915,
        idSkin: 14128
    }
];

export const halloweenPrizeBagSkinIds: skinInfo[] = [
    {
        nombre: "Hacha encadenada",
        arma: "Hacha",
        id: 99061,
        idSkin: 11082
    },
    {
        nombre: "Daga encadenada",
        arma: "Daga",
        id: 99068,
        idSkin: 11064
    },
    {
        nombre: "Maza encadenada",
        arma: "Maza",
        id: 99071,
        idSkin: 11088
    },
    {
        nombre: "Pistola encadenada",
        arma: "Pistola",
        id: 99114,
        idSkin: 11085
    },
    {
        nombre: "Cetro encadenado",
        arma: "Cetro",
        id: 99051,
        idSkin: 11054
    },
    {
        nombre: "Espada encadenada",
        arma: "Espada",
        id: 99110,
        idSkin: 11098
    },
    {
        nombre: "Foco encadenado",
        arma: "Foco",
        id: 99075,
        idSkin: 11084
    },
    {
        nombre: "Escudo encadenado",
        arma: "Escudo",
        id: 99091,
        idSkin: 11094
    },
    {
        nombre: "Antorcha encadenada",
        arma: "Antorcha",
        id: 99092,
        idSkin: 11093
    },
    {
        nombre: "Cuerno de guerra encadenado",
        arma: "Cuerno de guerra",
        id: 99108,
        idSkin: 11076
    },
    {
        nombre: "Mandoble encadenado",
        arma: "Mandoble",
        id: 99049,
        idSkin: 11067
    },
    {
        nombre: "Martillo encadenado",
        arma: "Martillo",
        id: 99098,
        idSkin: 11061
    },
    {
        nombre: "Arco largo encadenado",
        arma: "Arco largo",
        id: 99062,
        idSkin: 11079
    },
    {
        nombre: "Rifle encadenado",
        arma: "Rifle",
        id: 99095,
        idSkin: 11089
    },
    {
        nombre: "Arco corto encadenado",
        arma: "Arco corto",
        id: 99096,
        idSkin: 11090
    },
    {
        nombre: "Báculo encadenado",
        arma: "Báculo",
        id: 99083,
        idSkin: 11073
    },
    {
        nombre: "Lanza encadenada",
        arma: "Lanza",
        id: 105362,
        idSkin: 13256
    }
];

export const jollyWintersdayGiftSkinIds: skinInfo[] = [
    {
        nombre: "Hacha de Cumulonieve",
        arma: "Hacha",
        id: 99268,
        idSkin: 11195
    },
    {
        nombre: "Daga de Cumulonieve",
        arma: "Daga",
        id: 99296,
        idSkin: 11174
    },
    {
        nombre: "Maza de Cumulonieve",
        arma: "Maza",
        id: 99278,
        idSkin: 11197
    },
    {
        nombre: "Pistola de Cumulonieve",
        arma: "Pistola",
        id: 99297,
        idSkin: 11193
    },
    {
        nombre: "Cetro de Cumulonieve",
        arma: "Cetro",
        id: 99300,
        idSkin: 11185
    },
    {
        nombre: "Espada de Cumulonieve",
        arma: "Espada",
        id: 99286,
        idSkin: 11180
    },
    {
        nombre: "Foco de Cumulonieve",
        arma: "Foco",
        id: 99283,
        idSkin: 11198
    },
    {
        nombre: "Escudo de Cumulonieve",
        arma: "Escudo",
        id: 99274,
        idSkin: 11191
    },
    {
        nombre: "Antorcha de Cumulonieve",
        arma: "Antorcha",
        id: 99303,
        idSkin: 11194
    },
    {
        nombre: "Cuerno de guerra de Cumulonieve",
        arma: "Cuerno de guerra",
        id: 99289,
        idSkin: 11178
    },
    {
        nombre: "Mandoble de Cumulonieve",
        arma: "Mandoble",
        id: 99294,
        idSkin: 11196
    },
    {
        nombre: "Martillo de Cumulonieve",
        arma: "Martillo",
        id: 99301,
        idSkin: 11175
    },

    {
        nombre: "Arco largo de Cumulonieve",
        arma: "Arco largo",
        id: 99298,
        idSkin: 11173
    },
    {
        nombre: "Rifle de Cumulonieve",
        arma: "Rifle",
        id: 99277,
        idSkin: 11183
    },
    {
        nombre: "Arco corto de Cumulonieve",
        arma: "Arco corto",
        id: 99302,
        idSkin: 11186
    },
    {
        nombre: "Báculo de Cumulonieve",
        arma: "Báculo",
        id: 99272,
        idSkin: 11172
    },
    {
        nombre: "Lanza de Cumulonieve",
        arma: "Lanza",
        id: 106884,
        idSkin: 13667
    }
];

export const farolDelComercianteSkinIds: skinInfo[] = [
    {
        "nombre": "Hacha de farol",
        "arma": "Hacha",
        "id": 104163,
        "idSkin": 12823
    },
    {
        "nombre": "Daga de farol",
        "arma": "Daga",
        "id": 104152,
        "idSkin": 12818
    },
    {
        "nombre": "Maza de farol",
        "arma": "Maza",
        "id": 104157,
        "idSkin": 12832
    },
    {
        "nombre": "Pistola de farol",
        "arma": "Pistola",
        "id": 104188,
        "idSkin": 12825
    },
    {
        "nombre": "Espada de farol",
        "arma": "Espada",
        "id": 104162,
        "idSkin": 12822
    },
    {
        "nombre": "Cetro de farol",
        "arma": "Cetro",
        "id": 104190,
        "idSkin": 12815
    },
    {
        "nombre": "Foco de farol",
        "arma": "Foco",
        "id": 104176,
        "idSkin": 12813
    },
    {
        "nombre": "Escudo de farol",
        "arma": "Escudo",
        "id": 104187,
        "idSkin": 12817
    },
    {
        "nombre": "Antorcha de farol",
        "arma": "Antorcha",
        "id": 104153,
        "idSkin": 12811
    },
    {
        "nombre": "Cuerno de guerra de farol",
        "arma": "Cuerno de guerra",
        "id": 104196,
        "idSkin": 12812
    },
    {
        "nombre": "Mandoble de farol",
        "arma": "Mandoble",
        "id": 104166,
        "idSkin": 12809
    },
    {
        "nombre": "Martillo de farol",
        "arma": "Martillo",
        "id": 104182,
        "idSkin": 12829
    },
    {
        "nombre": "Rifle de farol",
        "arma": "Rifle",
        "id": 104173,
        "idSkin": 12833
    },
    {
        "nombre": "Báculo de farol",
        "arma": "Báculo",
        "id": 104192,
        "idSkin": 12830
    },
    {
        "nombre": "Lanza de farol",
        "arma": "Lanza",
        "id": 104189,
        "idSkin": 12826
    },
    {
        "nombre": "Arco largo de farol",
        "arma": "Arco largo",
        "id": 104183,
        "idSkin": 12816
    },
    {
        "nombre": "Arco corto de farol",
        "arma": "Arco corto",
        "id": 104151,
        "idSkin": 12810
    }
];

export const afortunadoDelComercianteSkinIds: skinInfo[] = [
    {
        "nombre": "Hacha afortunada",
        "arma": "Hacha",
        "id": 101432,
        "idSkin": 11997
    },
    {
        "nombre": "Daga afortunada",
        "arma": "Daga",
        "id": 101402,
        "idSkin": 12005
    },
    {
        "nombre": "Maza afortunada",
        "arma": "Maza",
        "id": 101410,
        "idSkin": 12010
    },
    {
        "nombre": "Pistola afortunada",
        "arma": "Pistola",
        "id": 101426,
        "idSkin": 12004
    },
    {
        "nombre": "Espada afortunada",
        "arma": "Espada",
        "id": 101403,
        "idSkin": 12009
    },
    {
        "nombre": "Cetro afortunado",
        "arma": "Cetro",
        "id": 101421,
        "idSkin": 12001
    },
    {
        "nombre": "Foco afortunado",
        "arma": "Foco",
        "id": 101406,
        "idSkin": 12000
    },
    {
        "nombre": "Escudo afortunado",
        "arma": "Escudo",
        "id": 101418,
        "idSkin": 11989
    },
    {
        "nombre": "Antorcha afortunada",
        "arma": "Antorcha",
        "id": 101409,
        "idSkin": 11986
    },
    {
        "nombre": "Cuerno de guerra afortunado",
        "arma": "Cuerno de guerra",
        "id": 101422,
        "idSkin": 11985
    },
    {
        "nombre": "Mandoble afortunado",
        "arma": "Mandoble",
        "id": 101417,
        "idSkin": 11999
    },
    {
        "nombre": "Martillo afortunado",
        "arma": "Martillo",
        "id": 101412,
        "idSkin": 11987
    },
    {
        "nombre": "Rifle afortunado",
        "arma": "Rifle",
        "id": 101420,
        "idSkin": 12008
    },
    {
        "nombre": "Báculo afortunado",
        "arma": "Báculo",
        "id": 101414,
        "idSkin": 11998
    },
    {
        "nombre": "Arco largo afortunado",
        "arma": "Arco largo",
        "id": 101413,
        "idSkin": 11984
    },
    {
        "nombre": "Arco corto afortunado",
        "arma": "Arco corto",
        "id": 101411,
        "idSkin": 12002
    }
];

export const superarcoirisSkinIds: skinInfo[] = [
    {
        "nombre": "Hacha de nube del superarcoíris",
        "arma": "Hacha",
        "id": 104609,
        "idSkin": 12986
    },
    {
        "nombre": "Daga de nube del superarcoíris",
        "arma": "Daga",
        "id": 104607,
        "idSkin": 12987
    },
    {
        "nombre": "Maza de nube del superarcoíris",
        "arma": "Maza",
        "id": 104597,
        "idSkin": 12989
    },
    {
        "nombre": "Pistola de nube del superarcoíris",
        "arma": "Pistola",
        "id": 104636,
        "idSkin": 12990
    },
    {
        "nombre": "Espada de nube del superarcoíris",
        "arma": "Espada",
        "id": 104600,
        "idSkin": 12976
    },
    {
        "nombre": "Cetro de nube del superarcoíris",
        "arma": "Cetro",
        "id": 104596,
        "idSkin": 12984
    },
    {
        "nombre": "Foco de nube del superarcoíris",
        "arma": "Foco",
        "id": 104623,
        "idSkin": 12999
    },
    {
        "nombre": "Escudo de nube del superarcoíris",
        "arma": "Escudo",
        "id": 104614,
        "idSkin": 12995
    },
    {
        "nombre": "Antorcha de nube del superarcoíris",
        "arma": "Antorcha",
        "id": 104589,
        "idSkin": 12997
    },
    {
        "nombre": "Cuerno de guerra de nube del superarcoíris",
        "arma": "Cuerno de guerra",
        "id": 104608,
        "idSkin": 12977
    },
    {
        "nombre": "Mandoble de nube del superarcoíris",
        "arma": "Mandoble",
        "id": 104650,
        "idSkin": 12998
    },
    {
        "nombre": "Martillo de nube del superarcoíris",
        "arma": "Martillo",
        "id": 104602,
        "idSkin": 12983
    },
    {
        "nombre": "Rifle de nube del superarcoíris",
        "arma": "Rifle",
        "id": 104621,
        "idSkin": 13000
    },
    {
        "nombre": "Báculo de nube del superarcoíris",
        "arma": "Báculo",
        "id": 104618,
        "idSkin": 12992
    },
    {
        "nombre": "Lanza de nube del superarcoíris",
        "arma": "Lanza",
        "id": 104604,
        "idSkin": 12979
    },
    {
        "nombre": "Arco largo de nube del superarcoíris",
        "arma": "Arco largo",
        "id": 104592,
        "idSkin": 12994
    },
    {
        "nombre": "Arco corto de nube del superarcoíris",
        "arma": "Arco corto",
        "id": 104634,
        "idSkin": 12980
    }
];

export const fulminagolemsDeComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha fulminagólems",
        "arma": "Hacha",
        "id": 101690,
        "idSkin": 12123
    },
    {
        "nombre": "Daga fulminagólems",
        "arma": "Daga",
        "id": 101672,
        "idSkin": 12125
    },
    {
        "nombre": "Maza fulminagólems",
        "arma": "Maza",
        "id": 101706,
        "idSkin": 12111
    },
    {
        "nombre": "Pistola fulminagólems",
        "arma": "Pistola",
        "id": 101704,
        "idSkin": 12121
    },
    {
        "nombre": "Espada fulminagólems",
        "arma": "Espada",
        "id": 101691,
        "idSkin": 12122
    },
    {
        "nombre": "Cetro fulminagólems",
        "arma": "Cetro",
        "id": 101683,
        "idSkin": 12108
    },
    {
        "nombre": "Foco fulminagólems",
        "arma": "Foco",
        "id": 101700,
        "idSkin": 12131
    },
    {
        "nombre": "Escudo fulminagólems",
        "arma": "Escudo",
        "id": 101695,
        "idSkin": 12120
    },
    {
        "nombre": "Antorcha fulminagólems",
        "arma": "Antorcha",
        "id": 101693,
        "idSkin": 12114
    },
    {
        "nombre": "Cuerno de guerra fulminagólems",
        "arma": "Cuerno de guerra",
        "id": 101709,
        "idSkin": 12112
    },
    {
        "nombre": "Mandoble fulminagólems",
        "arma": "Mandoble",
        "id": 101686,
        "idSkin": 12110
    },
    {
        "nombre": "Martillo fulminagólems",
        "arma": "Martillo",
        "id": 101703,
        "idSkin": 12109
    },
    {
        "nombre": "Rifle fulminagólems",
        "arma": "Rifle",
        "id": 101682,
        "idSkin": 12115
    },
    {
        "nombre": "Báculo fulminagólems",
        "arma": "Báculo",
        "id": 101696,
        "idSkin": 12124
    },
    {
        "nombre": "Arco largo fulminagólems",
        "arma": "Arco largo",
        "id": 101692,
        "idSkin": 12126
    },
    {
        "nombre": "Arco corto fulminagólems",
        "arma": "Arco corto",
        "id": 101680,
        "idSkin": 12128
    }
];

export const generacionDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de primera generación",
        "arma": "Hacha",
        "id": 99580,
        "idSkin": 11377
    },
    {
        "nombre": "Daga de primera generación",
        "arma": "Daga",
        "id": 99619,
        "idSkin": 11396
    },
    {
        "nombre": "Maza de primera generación",
        "arma": "Maza",
        "id": 99573,
        "idSkin": 11378
    },
    {
        "nombre": "Pistola de primera generación",
        "arma": "Pistola",
        "id": 99589,
        "idSkin": 11364
    },
    {
        "nombre": "Espada de primera generación",
        "arma": "Espada",
        "id": 99584,
        "idSkin": 11372
    },
    {
        "nombre": "Cetro de primera generación",
        "arma": "Cetro",
        "id": 99593,
        "idSkin": 11388
    },
    {
        "nombre": "Foco de primera generación",
        "arma": "Foco",
        "id": 99615,
        "idSkin": 11394
    },
    {
        "nombre": "Escudo de primera generación",
        "arma": "Escudo",
        "id": 99600,
        "idSkin": 11368
    },
    {
        "nombre": "Antorcha de primera generación",
        "arma": "Antorcha",
        "id": 99616,
        "idSkin": 11401
    },
    {
        "nombre": "Cuerno de guerra de primera generación",
        "arma": "Cuerno de guerra",
        "id": 99585,
        "idSkin": 11402
    },
    {
        "nombre": "Mandoble de primera generación",
        "arma": "Mandoble",
        "id": 99608,
        "idSkin": 11383
    },
    {
        "nombre": "Martillo de primera generación",
        "arma": "Martillo",
        "id": 99621,
        "idSkin": 11386
    },
    {
        "nombre": "Rifle de primera generación",
        "arma": "Rifle",
        "id": 99607,
        "idSkin": 11387
    },
    {
        "nombre": "Báculo de primera generación",
        "arma": "Báculo",
        "id": 99583,
        "idSkin": 11385
    },
    {
        "nombre": "Arco largo de primera generación",
        "arma": "Arco largo",
        "id": 99602,
        "idSkin": 11366
    },
    {
        "nombre": "Arco corto de primera generación",
        "arma": "Arco corto",
        "id": 99618,
        "idSkin": 11375
    }
];

export const cuervoDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha del cuervo sagrado",
        "arma": "Hacha",
        "id": 104914,
        "idSkin": 13053
    },
    {
        "nombre": "Daga del cuervo sagrado",
        "arma": "Daga",
        "id": 104995,
        "idSkin": 13084
    },
    {
        "nombre": "Maza del cuervo sagrado",
        "arma": "Maza",
        "id": 104684,
        "idSkin": 13028
    },
    {
        "nombre": "Pistola del cuervo sagrado",
        "arma": "Pistola",
        "id": 104806,
        "idSkin": 13024
    },
    {
        "nombre": "Espada del cuervo sagrado",
        "arma": "Espada",
        "id": 104822,
        "idSkin": 13047
    },
    {
        "nombre": "Cetro del cuervo sagrado",
        "arma": "Cetro",
        "id": 104808,
        "idSkin": 13061
    },
    {
        "nombre": "Foco del cuervo sagrado",
        "arma": "Foco",
        "id": 104904,
        "idSkin": 13043
    },
    {
        "nombre": "Escudo del cuervo sagrado",
        "arma": "Escudo",
        "id": 104837,
        "idSkin": 13049
    },
    {
        "nombre": "Antorcha del cuervo sagrado",
        "arma": "Antorcha",
        "id": 104893,
        "idSkin": 13066
    },
    {
        "nombre": "Cuerno de guerra del cuervo sagrado",
        "arma": "Cuerno de guerra",
        "id": 104847,
        "idSkin": 13088
    },
    {
        "nombre": "Mandoble del cuervo sagrado",
        "arma": "Mandoble",
        "id": 104925,
        "idSkin": 13018
    },
    {
        "nombre": "Martillo del cuervo sagrado",
        "arma": "Martillo",
        "id": 104968,
        "idSkin": 13058
    },
    {
        "nombre": "Rifle del cuervo sagrado",
        "arma": "Rifle",
        "id": 104708,
        "idSkin": 13055
    },
    {
        "nombre": "Báculo del cuervo sagrado",
        "arma": "Báculo",
        "id": 104991,
        "idSkin": 13097
    },
    {
        "nombre": "Lanza del cuervo sagrado",
        "arma": "Lanza",
        "id": 104953,
        "idSkin": 13037
    },
    {
        "nombre": "Arco largo del cuervo sagrado",
        "arma": "Arco largo",
        "id": 104841,
        "idSkin": 13085
    },
    {
        "nombre": "Arco corto del cuervo sagrado",
        "arma": "Arco corto",
        "id": 105005,
        "idSkin": 13086
    }
];

export const cristalDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de cristal sagrado",
        "arma": "Hacha",
        "id": 102067,
        "idSkin": 12239
    },
    {
        "nombre": "Daga de cristal sagrado",
        "arma": "Daga",
        "id": 102063,
        "idSkin": 12248
    },
    {
        "nombre": "Maza de cristal sagrado",
        "arma": "Maza",
        "id": 102068,
        "idSkin": 12269
    },
    {
        "nombre": "Pistola de cristal sagrado",
        "arma": "Pistola",
        "id": 102022,
        "idSkin": 12220
    },
    {
        "nombre": "Espada de cristal sagrado",
        "arma": "Espada",
        "id": 101974,
        "idSkin": 12271
    },
    {
        "nombre": "Cetro de cristal sagrado",
        "arma": "Cetro",
        "id": 102012,
        "idSkin": 12272
    },
    {
        "nombre": "Foco de cristal sagrado",
        "arma": "Foco",
        "id": 102057,
        "idSkin": 12243
    },
    {
        "nombre": "Escudo de cristal sagrado",
        "arma": "Escudo",
        "id": 102048,
        "idSkin": 12263
    },
    {
        "nombre": "Antorcha de cristal sagrado",
        "arma": "Antorcha",
        "id": 101971,
        "idSkin": 12267
    },
    {
        "nombre": "Cuerno de guerra de cristal sagrado",
        "arma": "Cuerno de guerra",
        "id": 101969,
        "idSkin": 12274
    },
    {
        "nombre": "Mandoble de cristal sagrado",
        "arma": "Mandoble",
        "id": 102052,
        "idSkin": 12268
    },
    {
        "nombre": "Martillo de cristal sagrado",
        "arma": "Martillo",
        "id": 102043,
        "idSkin": 12224
    },
    {
        "nombre": "Rifle de cristal sagrado",
        "arma": "Rifle",
        "id": 101991,
        "idSkin": 12277
    },
    {
        "nombre": "Báculo de cristal sagrado",
        "arma": "Báculo",
        "id": 102069,
        "idSkin": 12244
    },
    {
        "nombre": "Lanza de cristal sagrado",
        "arma": "Lanza",
        "id": 101982,
        "idSkin": 12258
    },
    {
        "nombre": "Arco largo de cristal sagrado",
        "arma": "Arco largo",
        "id": 102058,
        "idSkin": 12225
    },
    {
        "nombre": "Arco corto de cristal sagrado",
        "arma": "Arco corto",
        "id": 101977,
        "idSkin": 12280
    }
];

export const destrozadragonesDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha del Destrozadragones",
        "arma": "Hacha",
        "id": 99807,
        "idSkin": 11474
    },
    {
        "nombre": "Daga del Destrozadragones",
        "arma": "Daga",
        "id": 99823,
        "idSkin": 11496
    },
    {
        "nombre": "Maza del Destrozadragones",
        "arma": "Maza",
        "id": 99846,
        "idSkin": 11482
    },
    {
        "nombre": "Pistola del Destrozadragones",
        "arma": "Pistola",
        "id": 99851,
        "idSkin": 11508
    },
    {
        "nombre": "Espada del Destrozadragones",
        "arma": "Espada",
        "id": 99834,
        "idSkin": 11494
    },
    {
        "nombre": "Cetro del Destrozadragones",
        "arma": "Cetro",
        "id": 99822,
        "idSkin": 11487
    },
    {
        "nombre": "Foco del Destrozadragones",
        "arma": "Foco",
        "id": 99810,
        "idSkin": 11507
    },
    {
        "nombre": "Escudo del Destrozadragones",
        "arma": "Escudo",
        "id": 99853,
        "idSkin": 11504
    },
    {
        "nombre": "Antorcha del Destrozadragones",
        "arma": "Antorcha",
        "id": 99821,
        "idSkin": 11475
    },
    {
        "nombre": "Cuerno de guerra del Destrozadragones",
        "arma": "Cuerno de guerra",
        "id": 99798,
        "idSkin": 11483
    },
    {
        "nombre": "Mandoble del Destrozadragones",
        "arma": "Mandoble",
        "id": 99801,
        "idSkin": 11476
    },
    {
        "nombre": "Martillo del Destrozadragones",
        "arma": "Martillo",
        "id": 99813,
        "idSkin": 11493
    },
    {
        "nombre": "Trabuco del Destrozadragones",
        "arma": "Rifle",
        "id": 99832,
        "idSkin": 11498
    },
    {
        "nombre": "Báculo del Destrozadragones",
        "arma": "Báculo",
        "id": 99777,
        "idSkin": 11500
    },
    {
        "nombre": "Arco largo del Destrozadragones",
        "arma": "Arco largo",
        "id": 99833,
        "idSkin": 11503
    },
    {
        "nombre": "Arco corto del Destrozadragones",
        "arma": "Arco corto",
        "id": 99774,
        "idSkin": 11488
    }
];

export const huesoLeviatanDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de hueso de Leviatán",
        "arma": "Hacha",
        "id": 105076,
        "idSkin": 13189
    },
    {
        "nombre": "Daga de hueso de Leviatán",
        "arma": "Daga",
        "id": 105067,
        "idSkin": 13135
    },
    {
        "nombre": "Maza de hueso de Leviatán",
        "arma": "Maza",
        "id": 105090,
        "idSkin": 13167
    },
    {
        "nombre": "Pistola de hueso de Leviatán",
        "arma": "Pistola",
        "id": 105129,
        "idSkin": 13190
    },
    {
        "nombre": "Espada de hueso de Leviatán",
        "arma": "Espada",
        "id": 105069,
        "idSkin": 13178
    },
    {
        "nombre": "Cetro de hueso de Leviatán",
        "arma": "Cetro",
        "id": 105037,
        "idSkin": 13153
    },
    {
        "nombre": "Foco de hueso de Leviatán",
        "arma": "Foco",
        "id": 105121,
        "idSkin": 13174
    },
    {
        "nombre": "Escudo de hueso de Leviatán",
        "arma": "Escudo",
        "id": 105058,
        "idSkin": 13172
    },
    {
        "nombre": "Antorcha de hueso de Leviatán",
        "arma": "Antorcha",
        "id": 105038,
        "idSkin": 13191
    },
    {
        "nombre": "Cuerno de guerra de hueso de Leviatán",
        "arma": "Cuerno de guerra",
        "id": 105066,
        "idSkin": 13152
    },
    {
        "nombre": "Mandoble de hueso de Leviatán",
        "arma": "Mandoble",
        "id": 105135,
        "idSkin": 13159
    },
    {
        "nombre": "Martillo de hueso de Leviatán",
        "arma": "Martillo",
        "id": 105044,
        "idSkin": 13140
    },
    {
        "nombre": "Rifle de hueso de Leviatán",
        "arma": "Rifle",
        "id": 105084,
        "idSkin": 13181
    },
    {
        "nombre": "Báculo de hueso de Leviatán",
        "arma": "Báculo",
        "id": 105119,
        "idSkin": 13192
    },
    {
        "nombre": "Lanza de hueso de Leviatán",
        "arma": "Lanza",
        "id": 105074,
        "idSkin": 13165
    },
    {
        "nombre": "Arco largo de hueso de Leviatán",
        "arma": "Arco largo",
        "id": 105093,
        "idSkin": 13145
    },
    {
        "nombre": "Arco corto de hueso de Leviatán",
        "arma": "Arco corto",
        "id": 105120,
        "idSkin": 13147
    }
];

export const arenosoDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha arenosa",
        "arma": "Hacha",
        "id": 102158,
        "idSkin": 12320
    },
    {
        "nombre": "Daga arenosa",
        "arma": "Daga",
        "id": 102134,
        "idSkin": 12336
    },
    {
        "nombre": "Maza arenosa",
        "arma": "Maza",
        "id": 102167,
        "idSkin": 12343
    },
    {
        "nombre": "Pistola arenosa",
        "arma": "Pistola",
        "id": 102183,
        "idSkin": 12318
    },
    {
        "nombre": "Espada arenosa",
        "arma": "Espada",
        "id": 102098,
        "idSkin": 12345
    },
    {
        "nombre": "Cetro arenoso",
        "arma": "Cetro",
        "id": 102110,
        "idSkin": 12351
    },
    {
        "nombre": "Foco arenoso",
        "arma": "Foco",
        "id": 102127,
        "idSkin": 12312
    },
    {
        "nombre": "Escudo arenoso",
        "arma": "Escudo",
        "id": 102115,
        "idSkin": 12348
    },
    {
        "nombre": "Antorcha arenosa",
        "arma": "Antorcha",
        "id": 102116,
        "idSkin": 12327
    },
    {
        "nombre": "Cuerno de guerra arenoso",
        "arma": "Cuerno de guerra",
        "id": 102114,
        "idSkin": 12349
    },
    {
        "nombre": "Mandoble arenoso",
        "arma": "Mandoble",
        "id": 102102,
        "idSkin": 12333
    },
    {
        "nombre": "Martillo arenoso",
        "arma": "Martillo",
        "id": 102119,
        "idSkin": 12316
    },
    {
        "nombre": "Rifle arenoso",
        "arma": "Rifle",
        "id": 102168,
        "idSkin": 12319
    },
    {
        "nombre": "Báculo arenoso",
        "arma": "Báculo",
        "id": 102120,
        "idSkin": 12339
    },
    {
        "nombre": "Lanza arenosa",
        "arma": "Lanza",
        "id": 102179,
        "idSkin": 12323
    },
    {
        "nombre": "Arco largo arenoso",
        "arma": "Arco largo",
        "id": 102149,
        "idSkin": 12309
    },
    {
        "nombre": "Arco corto arenoso",
        "arma": "Arco corto",
        "id": 102145,
        "idSkin": 12335
    }
];

export const creadoAlSolDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha creada al sol",
        "arma": "Hacha",
        "id": 99933,
        "idSkin": 11545
    },
    {
        "nombre": "Daga creada al sol",
        "arma": "Daga",
        "id": 99915,
        "idSkin": 11566
    },
    {
        "nombre": "Maza creada al sol",
        "arma": "Maza",
        "id": 99935,
        "idSkin": 11551
    },
    {
        "nombre": "Pistola creada al sol",
        "arma": "Pistola",
        "id": 99912,
        "idSkin": 11555
    },
    {
        "nombre": "Espada creada al sol",
        "arma": "Espada",
        "id": 99934,
        "idSkin": 11544
    },
    {
        "nombre": "Cetro creado al sol",
        "arma": "Cetro",
        "id": 99925,
        "idSkin": 11547
    },
    {
        "nombre": "Foco creado al sol",
        "arma": "Foco",
        "id": 99957,
        "idSkin": 11550
    },
    {
        "nombre": "Escudo creado al sol",
        "arma": "Escudo",
        "id": 99924,
        "idSkin": 11556
    },
    {
        "nombre": "Antorcha creada al sol",
        "arma": "Antorcha",
        "id": 99906,
        "idSkin": 11553
    },
    {
        "nombre": "Cuerno de guerra creado al sol",
        "arma": "Cuerno de guerra",
        "id": 99943,
        "idSkin": 11563
    },
    {
        "nombre": "Mandoble creado al sol",
        "arma": "Mandoble",
        "id": 99938,
        "idSkin": 11548
    },
    {
        "nombre": "Martillo creado al sol",
        "arma": "Martillo",
        "id": 99919,
        "idSkin": 11565
    },
    {
        "nombre": "Rifle creado al sol",
        "arma": "Rifle",
        "id": 99913,
        "idSkin": 11557
    },
    {
        "nombre": "Báculo creado al sol",
        "arma": "Báculo",
        "id": 99923,
        "idSkin": 11549
    },
    {
        "nombre": "Arco largo creado al sol",
        "arma": "Arco largo",
        "id": 99922,
        "idSkin": 11552
    },
    {
        "nombre": "Arco corto creado al sol",
        "arma": "Arco corto",
        "id": 99904,
        "idSkin": 11558
    }
];

export const carameloDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de caramelo",
        "arma": "Hacha",
        "id": 103637,
        "idSkin": 12605
    },
    {
        "nombre": "Daga de caramelo",
        "arma": "Daga",
        "id": 103649,
        "idSkin": 12643
    },
    {
        "nombre": "Maza de caramelo",
        "arma": "Maza",
        "id": 103624,
        "idSkin": 12606
    },
    {
        "nombre": "Pistola de caramelo",
        "arma": "Pistola",
        "id": 103698,
        "idSkin": 12640
    },
    {
        "nombre": "Espada de caramelo",
        "arma": "Espada",
        "id": 103661,
        "idSkin": 12641
    },
    {
        "nombre": "Cetro de caramelo",
        "arma": "Cetro",
        "id": 103710,
        "idSkin": 12609
    },
    {
        "nombre": "Foco de caramelo",
        "arma": "Foco",
        "id": 103709,
        "idSkin": 12610
    },
    {
        "nombre": "Escudo de caramelo",
        "arma": "Escudo",
        "id": 103682,
        "idSkin": 12622
    },
    {
        "nombre": "Antorcha de caramelo",
        "arma": "Antorcha",
        "id": 103652,
        "idSkin": 12608
    },
    {
        "nombre": "Cuerno de guerra de caramelo",
        "arma": "Cuerno de guerra",
        "id": 103690,
        "idSkin": 12621
    },
    {
        "nombre": "Mandoble de caramelo",
        "arma": "Mandoble",
        "id": 103712,
        "idSkin": 12624
    },
    {
        "nombre": "Martillo de caramelo",
        "arma": "Martillo",
        "id": 103631,
        "idSkin": 12633
    },
    {
        "nombre": "Rifle de caramelo",
        "arma": "Rifle",
        "id": 103706,
        "idSkin": 12638
    },
    {
        "nombre": "Báculo de caramelo",
        "arma": "Báculo",
        "id": 103667,
        "idSkin": 12619
    },
    {
        "nombre": "Lanza de caramelo",
        "arma": "Lanza",
        "id": 103701,
        "idSkin": 12607
    },
    {
        "nombre": "Arco largo de caramelo",
        "arma": "Arco largo",
        "id": 103630,
        "idSkin": 12634
    },
    {
        "nombre": "Arco corto de caramelo",
        "arma": "Arco corto",
        "id": 103640,
        "idSkin": 12635
    }
];

export const maquinaMacabraDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de máquina macabra",
        "arma": "Hacha",
        "id": 101086,
        "idSkin": 11853
    },
    {
        "nombre": "Daga de máquina macabra",
        "arma": "Daga",
        "id": 101098,
        "idSkin": 11851
    },
    {
        "nombre": "Maza de máquina macabra",
        "arma": "Maza",
        "id": 101112,
        "idSkin": 11856
    },
    {
        "nombre": "Pistola de máquina macabra",
        "arma": "Pistola",
        "id": 101075,
        "idSkin": 11872
    },
    {
        "nombre": "Espada de máquina macabra",
        "arma": "Espada",
        "id": 101115,
        "idSkin": 11861
    },
    {
        "nombre": "Cetro de máquina macabra",
        "arma": "Cetro",
        "id": 101091,
        "idSkin": 11870
    },
    {
        "nombre": "Foco de máquina macabra",
        "arma": "Foco",
        "id": 101109,
        "idSkin": 11854
    },
    {
        "nombre": "Escudo de máquina macabra",
        "arma": "Escudo",
        "id": 101108,
        "idSkin": 11866
    },
    {
        "nombre": "Antorcha de máquina macabra",
        "arma": "Antorcha",
        "id": 101089,
        "idSkin": 11868
    },
    {
        "nombre": "Cuerno de guerra de máquina macabra",
        "arma": "Cuerno de guerra",
        "id": 101092,
        "idSkin": 11859
    },
    {
        "nombre": "Mandoble de máquina macabra",
        "arma": "Mandoble",
        "id": 101082,
        "idSkin": 11848
    },
    {
        "nombre": "Martillo de máquina macabra",
        "arma": "Martillo",
        "id": 101102,
        "idSkin": 11852
    },
    {
        "nombre": "Rifle de máquina macabra",
        "arma": "Rifle",
        "id": 101114,
        "idSkin": 11860
    },
    {
        "nombre": "Báculo de máquina macabra",
        "arma": "Báculo",
        "id": 101107,
        "idSkin": 11847
    },
    {
        "nombre": "Lanza de máquina macabra",
        "arma": "Lanza",
        "id": 110320,
        "idSkin": 14300
    },
    {
        "nombre": "Arco largo de máquina macabra",
        "arma": "Arco largo",
        "id": 101097,
        "idSkin": 11855
    },
    {
        "nombre": "Arco corto de máquina macabra",
        "arma": "Arco corto",
        "id": 101079,
        "idSkin": 11869
    }
];

export const desencadenadoDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha desencadenada",
        "arma": "Hacha",
        "id": 105364,
        "idSkin": 13235
    },
    {
        "nombre": "Daga desencadenada",
        "arma": "Daga",
        "id": 105360,
        "idSkin": 13236
    },
    {
        "nombre": "Maza desencadenada",
        "arma": "Maza",
        "id": 105388,
        "idSkin": 13263
    },
    {
        "nombre": "Pistola desencadenada",
        "arma": "Pistola",
        "id": 105401,
        "idSkin": 13262
    },
    {
        "nombre": "Espada desencadenada",
        "arma": "Espada",
        "id": 105350,
        "idSkin": 13248
    },
    {
        "nombre": "Cetro desencadenado",
        "arma": "Cetro",
        "id": 105368,
        "idSkin": 13240
    },
    {
        "nombre": "Foco desencadenado",
        "arma": "Foco",
        "id": 105348,
        "idSkin": 13252
    },
    {
        "nombre": "Escudo desencadenado",
        "arma": "Escudo",
        "id": 105380,
        "idSkin": 13249
    },
    {
        "nombre": "Antorcha desencadenada",
        "arma": "Antorcha",
        "id": 105357,
        "idSkin": 13251
    },
    {
        "nombre": "Cuerno de guerra desencadenado",
        "arma": "Cuerno de guerra",
        "id": 105403,
        "idSkin": 13246
    },
    {
        "nombre": "Mandoble desencadenado",
        "arma": "Mandoble",
        "id": 105382,
        "idSkin": 13245
    },
    {
        "nombre": "Martillo desencadenado",
        "arma": "Martillo",
        "id": 105372,
        "idSkin": 13253
    },
    {
        "nombre": "Rifle desencadenado",
        "arma": "Rifle",
        "id": 105390,
        "idSkin": 13238
    },
    {
        "nombre": "Báculo desencadenado",
        "arma": "Báculo",
        "id": 105374,
        "idSkin": 13239
    },
    {
        "nombre": "Lanza desencadenada",
        "arma": "Lanza",
        "id": 105411,
        "idSkin": 13237
    },
    {
        "nombre": "Arco largo desencadenado",
        "arma": "Arco largo",
        "id": 105345,
        "idSkin": 13258
    },
    {
        "nombre": "Arco corto desencadenado",
        "arma": "Arco corto",
        "id": 105361,
        "idSkin": 13259
    }
];

export const pelucheDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de peluche",
        "arma": "Hacha",
        "id": 104100,
        "idSkin": 12773
    },
    {
        "nombre": "Daga de peluche",
        "arma": "Daga",
        "id": 104135,
        "idSkin": 12762
    },
    {
        "nombre": "Maza de peluche",
        "arma": "Maza",
        "id": 104071,
        "idSkin": 12763
    },
    {
        "nombre": "Pistola de peluche",
        "arma": "Pistola",
        "id": 104080,
        "idSkin": 12772
    },
    {
        "nombre": "Espada de peluche",
        "arma": "Espada",
        "id": 104101,
        "idSkin": 12770
    },
    {
        "nombre": "Cetro de peluche",
        "arma": "Cetro",
        "id": 104081,
        "idSkin": 12774
    },
    {
        "nombre": "Foco de peluche",
        "arma": "Foco",
        "id": 104129,
        "idSkin": 12782
    },
    {
        "nombre": "Escudo de peluche",
        "arma": "Escudo",
        "id": 104077,
        "idSkin": 12778
    },
    {
        "nombre": "Antorcha de peluche",
        "arma": "Antorcha",
        "id": 104096,
        "idSkin": 12780
    },
    {
        "nombre": "Cuerno de guerra de peluche",
        "arma": "Cuerno de guerra",
        "id": 104118,
        "idSkin": 12764
    },
    {
        "nombre": "Mandoble de peluche",
        "arma": "Mandoble",
        "id": 104092,
        "idSkin": 12758
    },
    {
        "nombre": "Martillo de peluche",
        "arma": "Martillo",
        "id": 104072,
        "idSkin": 12790
    },
    {
        "nombre": "Rifle de peluche",
        "arma": "Rifle",
        "id": 104084,
        "idSkin": 12767
    },
    {
        "nombre": "Báculo de peluche",
        "arma": "Báculo",
        "id": 104094,
        "idSkin": 12794
    },
    {
        "nombre": "Lanza de peluche",
        "arma": "Lanza",
        "id": 104076,
        "idSkin": 12776
    },
    {
        "nombre": "Arco largo de peluche",
        "arma": "Arco largo",
        "id": 104064,
        "idSkin": 12769
    },
    {
        "nombre": "Arco corto de peluche",
        "arma": "Arco corto",
        "id": 104108,
        "idSkin": 12779
    }
];

export const solsticioSagradoDelComercianteSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de solsticio sagrado",
        "arma": "Hacha",
        "id": 101352,
        "idSkin": 11958
    },
    {
        "nombre": "Daga de solsticio sagrado",
        "arma": "Daga",
        "id": 101375,
        "idSkin": 11945
    },
    {
        "nombre": "Maza de solsticio sagrado",
        "arma": "Maza",
        "id": 101382,
        "idSkin": 11964
    },
    {
        "nombre": "Pistola de solsticio sagrado",
        "arma": "Pistola",
        "id": 101385,
        "idSkin": 11965
    },
    {
        "nombre": "Espada de solsticio sagrado",
        "arma": "Espada",
        "id": 101355,
        "idSkin": 11942
    },
    {
        "nombre": "Cetro de solsticio sagrado",
        "arma": "Cetro",
        "id": 101376,
        "idSkin": 11976
    },
    {
        "nombre": "Foco de solsticio sagrado",
        "arma": "Foco",
        "id": 101337,
        "idSkin": 11969
    },
    {
        "nombre": "Escudo de solsticio sagrado",
        "arma": "Escudo",
        "id": 101346,
        "idSkin": 11938
    },
    {
        "nombre": "Antorcha de solsticio sagrado",
        "arma": "Antorcha",
        "id": 101369,
        "idSkin": 11967
    },
    {
        "nombre": "Cuerno de guerra de solsticio sagrado",
        "arma": "Cuerno de guerra",
        "id": 101336,
        "idSkin": 11954
    },
    {
        "nombre": "Mandoble de solsticio sagrado",
        "arma": "Mandoble",
        "id": 101342,
        "idSkin": 11944
    },
    {
        "nombre": "Martillo de solsticio sagrado",
        "arma": "Martillo",
        "id": 101357,
        "idSkin": 11940
    },
    {
        "nombre": "Rifle de solsticio sagrado",
        "arma": "Rifle",
        "id": 101345,
        "idSkin": 11953
    },
    {
        "nombre": "Báculo de solsticio sagrado",
        "arma": "Báculo",
        "id": 101338,
        "idSkin": 11975
    },
    {
        "nombre": "Arco largo de solsticio sagrado",
        "arma": "Arco largo",
        "id": 101373,
        "idSkin": 11973
    },
    {
        "nombre": "Arco corto de solsticio sagrado",
        "arma": "Arco corto",
        "id": 101367,
        "idSkin": 11937
    }
];

export const maquinaHumoSkinsIds: skinInfo[] = [
    {
        "nombre": "Hacha de máquina de humo",
        "arma": "Hacha",
        "id": 110344,
        "idSkin": 14268
    },
    {
        "nombre": "Daga de máquina de humo",
        "arma": "Daga",
        "id": 110322,
        "idSkin": 14286
    },
    {
        "nombre": "Maza de máquina de humo",
        "arma": "Maza",
        "id": 110342,
        "idSkin": 14297
    },
    {
        "nombre": "Pistola de máquina de humo",
        "arma": "Pistola",
        "id": 110301,
        "idSkin": 14264
    },
    {
        "nombre": "Espada de máquina de humo",
        "arma": "Espada",
        "id": 110267,
        "idSkin": 14277
    },
    {
        "nombre": "Cetro de máquina de humo",
        "arma": "Cetro",
        "id": 110356,
        "idSkin": 14271
    },
    {
        "nombre": "Foco de máquina de humo",
        "arma": "Foco",
        "id": 110349,
        "idSkin": 14280
    },
    {
        "nombre": "Escudo de máquina de humo",
        "arma": "Escudo",
        "id": 110256,
        "idSkin": 14292
    },
    {
        "nombre": "Antorcha de máquina de humo",
        "arma": "Antorcha",
        "id": 110305,
        "idSkin": 14274
    },
    {
        "nombre": "Cuerno de guerra de máquina de humo",
        "arma": "Cuerno de guerra",
        "id": 110276,
        "idSkin": 14283
    },
    {
        "nombre": "Mandoble de máquina de humo",
        "arma": "Mandoble",
        "id": 110263,
        "idSkin": 14291
    },
    {
        "nombre": "Martillo de máquina de humo",
        "arma": "Martillo",
        "id": 110287,
        "idSkin": 14272
    },
    {
        "nombre": "Rifle de máquina de humo",
        "arma": "Rifle",
        "id": 110299,
        "idSkin": 14273
    },
    {
        "nombre": "Báculo de máquina de humo",
        "arma": "Báculo",
        "id": 110337,
        "idSkin": 14281
    },
    {
        "nombre": "Lanza de máquina de humo",
        "arma": "Lanza",
        "id": 110310,
        "idSkin": 14299
    },
    {
        "nombre": "Arco largo de máquina de humo",
        "arma": "Arco largo",
        "id": 110285,
        "idSkin": 14293
    },
    {
        "nombre": "Arco corto de máquina de humo",
        "arma": "Arco corto",
        "id": 110377,
        "idSkin": 14287
    }
];

export const skinGroups = {
    lunarGiftBoxSkins: lunarGiftBoxSkinIds,
    supersacoDeBotinSkins: supersacoDeBotinSkinIds,
    dragonBashPrizeCofferSkins: dragonBashPrizeCofferSkinIds,
    fourWindsPrizeBagSkin: fourWindsPrizeBagSkinIds,
    halloweenPrizeBagSkin: halloweenPrizeBagSkinIds,
    jollyWintersdayGiftSkin: jollyWintersdayGiftSkinIds,

    farolDelComercianteSkin: farolDelComercianteSkinIds,
    afortunadoDelComercianteSkin: afortunadoDelComercianteSkinIds,
    superarcoirisSkin: superarcoirisSkinIds,
    fulminagolemsDeComercianteSkins: fulminagolemsDeComercianteSkinsIds,
    generacionDelComercianteSkins: generacionDelComercianteSkinsIds,
    cuervoDelComercianteSkins: cuervoDelComercianteSkinsIds,
    cristalDelComercianteSkins: cristalDelComercianteSkinsIds,
    destrozadragonesDelComercianteSkins: destrozadragonesDelComercianteSkinsIds,
    huesoLeviatanDelComercianteSkins: huesoLeviatanDelComercianteSkinsIds,
    arenosoDelComercianteSkins: arenosoDelComercianteSkinsIds,
    creadoAlSolDelComercianteSkins: creadoAlSolDelComercianteSkinsIds,
    carameloDelComercianteSkins: carameloDelComercianteSkinsIds,
    maquinaMacabraDelComercianteSkins: maquinaMacabraDelComercianteSkinsIds,
    desencadenadoDelComercianteSkins: desencadenadoDelComercianteSkinsIds,
    maquinaHumoSkins: maquinaHumoSkinsIds,
    pelucheDelComercianteSkins: pelucheDelComercianteSkinsIds,
    solsticioSagradoDelComercianteSkins: solsticioSagradoDelComercianteSkinsIds
};