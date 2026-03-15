# El problema: "Mini catálogo de libros"

Vas a construir una pequeña interfaz de catálogo. No hay estado dinámico, no hay eventos, no hay hooks. Solo describir la UI correctamente usando componentes y datos.

El resultado visual debería representar un catálogo de libros con tarjetas.

---

## Estructura de cada libro

Cada libro tiene:

- `id`
- `título`
- `autor`
- `año`
- `géneros` (array de strings)

---

## Datos que debes usar

Usa exactamente estos datos:

```js
export const books = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genres: ["Science Fiction", "Adventure"]
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genres: ["Fantasy", "Adventure"]
  },
  {
    id: 3,
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    genres: ["Science Fiction"]
  }
];
```

---

## Lo que debes construir

Tu aplicación debe tener este árbol de componentes conceptual:

```
App
 └ LibraryPage
      ├ PageTitle
      └ BookGrid
           ├ BookCard
           ├ BookCard
           └ BookCard
```

---

## Requisitos

> Todos salen del bloque **"Describing the UI"**

Tu solución debe incluir:

1. **Componentes separados en archivos**
   - `App`
   - `LibraryPage`
   - `BookGrid`
   - `BookCard`
   - `PageTitle`
2. Importaciones y exportaciones correctas
3. Pasar datos mediante **props**
4. Renderizar listas con **`map`**
5. Usar **`key`** correctamente
6. Usar **composición de componentes**
7. Mostrar listas dentro de componentes — cada libro debe mostrar sus géneros como lista
8. No repetir código innecesario

---

## Prohibido usar

- `useState`
- `useEffect`
- eventos
- condicionales complejos
- lógica fuera de lo necesario

> Solo describir UI.

---

## Cómo debería verse la UI conceptualmente

Cada libro debería renderizar algo parecido a:

```
Dune
Frank Herbert • 1965

Genres:
- Science Fiction
- Adventure
```

Y todo debe estar dentro de una especie de grid o contenedor.