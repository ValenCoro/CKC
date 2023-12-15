import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Camisetas',
    id: 250,
    imgUrl: 'https://i.pinimg.com/564x/b8/6b/a3/b86ba3403f4b2bac85d8cd9bb7c9cbe4.jpg',
    productos: [
      {
        id: 1,
        nombre: 'Milan 1998',
        precio: 24500,
        detalles: ['Camiseta vintage del AC Milan: un tributo a la rica historia y estilo icónico del club rossonero'],
        imagen:
          'https://i.pinimg.com/564x/94/b3/2e/94b32ecb7efd1ed65034d16c7d1cd9d7.jpg',
        tieneStock: true,
      },
      {
        id: 2,
        nombre: 'Barcelona 2002',
        precio: 26000,
        detalles: ['Revive la gloria y el legado azulgrana con un toque retro inigualable'],
        imagen:
          'https://i.pinimg.com/564x/99/3e/6a/993e6aa954a6de9277875d47b7a0e4a4.jpg',
          tieneStock: false,
      },
      {
        id: 3,
        nombre: 'Boca Juniors 2001',
        precio: 23800,
        detalles: ['Un guiño elegante a la tradición y pasión única del club xeneize'],
        imagen:
          'https://i.pinimg.com/564x/00/ac/0b/00ac0b53e44b1b06cb422a63606b3635.jpg',
          tieneStock: true,
      },
    ],
  },
  {
    nombre: 'Pantalones',
    id: 1,
    imgUrl:
      'https://i.pinimg.com/564x/5d/8e/00/5d8e00cfb39319a83fb959a745ebe8eb.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Short Denim',
        precio: 25000,
        detalles: ['"Short de jean oversize: un toque de estilo relajado y urbano para destacar tu individualidad con comodidad'],
        imagen:
          'https://i.pinimg.com/564x/fc/ec/e7/fcece7ba28d3fcf20d27cd99e24ef4a0.jpg',
          tieneStock: true,
      },
      {
        id: 5,
        nombre: 'Classy Pants',
        precio: 35500,
        detalles: ['Perfectos para darle un estilo sofisticado a tus outfits'],
        imagen:
          'https://i.pinimg.com/564x/af/a8/5b/afa85bdbac6ae4fd1b11859a9aec5f65.jpg',
          tieneStock: true,
      },
      {
        id: 6,
        nombre: 'Cargo Pants',
        precio: 36000,
       detalles: ['Pantalones beige cargo oversized, el complemento perfecto para nuestras remeras'],
        imagen:
          'https://i.pinimg.com/564x/a3/03/c8/a303c80f8d64007fa23aec9a075aa7eb.jpg',
          tieneStock: false,
      },
    ],
  },
  {
    nombre: 'Accesorios',
    id: 2,
    imgUrl:'https://i.pinimg.com/564x/c9/61/36/c9613601d6f894e3774a6b4441fba87b.jpg',
    productos: [
      {
        id: 7,
        nombre: 'Piluso',
        precio: 12000,
        detalles: ['Gorro piluso en colores beige, blanco y negro. Ideal para darle un toque street a tus looks'],
        imagen: 'https://i.pinimg.com/564x/c1/6b/92/c16b92990593e8b53aaa988e4d815ed7.jpg',
        tieneStock: true,
      },
      {
        id: 8,
        nombre: 'Bolso de mano',
        precio: 13000,
        detalles: ['Bolsito pequeño combinable con tus prendas favoritas'],
        imagen:
          'https://i.pinimg.com/564x/2b/17/ae/2b17aec01ea8a012ec1b1e5bf7370050.jpg',
          tieneStock: true,
      },
      {
        id: 9,
        nombre: 'Gafas de sol',
        precio: 12500,
       detalles: ['Las mejores gafas de sol del mercado'],
        imagen:
          'https://i.pinimg.com/564x/12/fa/55/12fa55dff530005b0b5e4f6d7c42bacd.jpg',
          tieneStock: true,
      },
    ],
  },
  
];
