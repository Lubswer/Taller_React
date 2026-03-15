# 1 — Describir la UI: El problema: "Mini catálogo de libros"

## ¿Qué se pidió?

Construir una pequeña interfaz de catálogo de libros usando **React puro**, sin ningún tipo de estado dinámico, eventos ni hooks. El objetivo es practicar exclusivamente la habilidad de **describir UI** mediante componentes, props, composición y renderizado de listas.

---

## Datos utilizados

Se trabajó con un arreglo fijo de 3 libros, cada uno con las propiedades:

| Campo | Tipo |
|---|---|
| `id` | number |
| `title` | string |
| `author` | string |
| `year` | number |
| `genres` | string[] |

---

## Árbol de componentes

```
App
 └ LibraryPage
      ├ PageTitle
      └ BookGrid
           ├ BookCard
           ├ BookCard
           └ BookCard
```

Cada componente tiene una responsabilidad clara y única:

- **`App`** — punto de entrada, solo renderiza `LibraryPage`
- **`LibraryPage`** — página principal, organiza `PageTitle` y `BookGrid`, pasa los datos
- **`PageTitle`** — recibe y muestra un título mediante props
- **`BookGrid`** — recibe el arreglo de libros, hace el `map` y renderiza un `BookCard` por cada libro
- **`BookCard`** — recibe un solo libro como prop y describe su tarjeta visual (título, autor, año y géneros)

---

## Lo que se construyó

| Archivo | Rol |
|---|---|
| `data.js` | Fuente de datos (arreglo de libros) |
| `App.jsx` | Componente raíz |
| `LibraryPage.jsx` | Página que ensambla los bloques |
| `PageTitle.jsx` | Componente de título reutilizable |
| `BookGrid.jsx` | Contenedor que itera la lista |
| `BookCard.jsx` | Tarjeta individual de cada libro |

---

## Conceptos aplicados

- ✅ Componentes separados en archivos con exportaciones correctas
- ✅ Paso de datos mediante `props`
- ✅ Renderizado de listas con `map`
- ✅ Uso correcto de `key` en listas
- ✅ Composición de componentes
- ✅ Géneros renderizados como lista dentro de `BookCard`
- ✅ Sin repetición de código innecesaria

---

## Restricciones aplicadas

- 🚫 No se usó `useState`
- 🚫 No se usó `useEffect`
- 🚫 No se usaron eventos
- 🚫 No se usaron condicionales complejos
- 🚫 No se colocó lógica de renderizado fuera de su lugar correcto

---

## Vista conceptual de cada tarjeta

```
┌─────────────────────────────┐
│  Dune                       │
│  Frank Herbert • 1965       │
│                             │
│  Géneros:                   │
│   - Science Fiction         │
│   - Adventure               │
└─────────────────────────────┘
```

---

## Decisión clave de diseño

> **¿Quién hace el `map`?** → `BookGrid`
> **¿Quién solo describe una tarjeta?** → `BookCard`
> **¿Quién recibe los datos originales?** → `LibraryPage`, que los pasa a `BookGrid`

Esta separación garantiza que cada componente tenga una sola responsabilidad, lo cual es el principio central del ejercicio.