# Guía de Estilo para Artículos del Blog

Para mantener la consistencia visual y de calidad en todos los artículos del blog, se deben seguir los siguientes estándares tipográficos y de estructura.

## Estructura General

### Títulos de Sección (H2)

Se usan para dividir las grandes secciones del artículo (ej: "Historia", "Conclusión").

- **Clases:** `text-3xl font-black text-ciber-verde tracking-wider`
- **Contenedor:** Div con borde inferior.
  ```html
  <div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-12">
    <h2 class="text-3xl font-black text-ciber-verde tracking-wider">
      TÍTULO SECCIÓN
    </h2>
  </div>
  ```

### Subtítulos Principales (H2/H3)

Para títulos dentro del contenido que no inician una nueva sección mayor.

- **Clases:** `text-2xl font-bold text-white mt-12 mb-4`

### Subtítulos Secundarios (H4)

Para apartados específicos dentro de un tema.

- **Clases:** `text-xl font-bold text-ciber-rosa mt-8 mb-2` (Puede variar el color a `text-ciber-verde` según contexto).

### Párrafos (De contenido general)

- **Clases:** `mb-4 text-gray-300`

### Párrafos Destacados (Conclusión y Videos)

Para secciones especiales como la introducción a un video o el párrafo final de conclusión.

- **Clases:** `mb-4 font-medium text-lg text-gray-300`

## Espaciado y Márgenes

### Divisores de Sección

El separador visual entre grandes bloques de contenido.

- **Clases:** `border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16`
- **Nota:** El primer divisor después de la introducción puede usar `mt-12`. Los subsiguientes deben usar `mt-16` para mayor aire.

### Subtítulos Interiores

Títulos H2 o H3 que no tienen divisor.

- **Clases:** `mt-12 mb-4`

### Elementos Multimedia (Imágenes/Videos)

- **Margen Vertical:** `my-8` o `mt-6` para consistencia.

### Resaltado de Texto

Para destacar palabras clave, conceptos importantes o términos técnicos relevantes dentro de un párrafo.

- **Clases:** `text-ciber-verde font-bold`
- **Uso:** `<span class="text-ciber-verde font-bold">Término Importante</span>`
- **Nota:** Evitar el uso de `<strong>` simple si se quiere destacar el concepto como parte de la identidad del blog. Usar `<strong>` solo para énfasis gramatical que no requiera color.

## Elementos Especiales

### Listas

- **Clases contenedor:** `list-none space-y-2` (o variantes según necesidad).
- **Items:** Usar puntos o iconos personalizados con colores del tema (`text-ciber-verde`).

### Citas o Notas

- Usar bloques con borde lateral y fondo semitransparente.
  ```html
  <div class="bg-gray-800/50 border-l-4 border-ciber-verde p-4 my-6">
    ...contenido...
  </div>
  ```
