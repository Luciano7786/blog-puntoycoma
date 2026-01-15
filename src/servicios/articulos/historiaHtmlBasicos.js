import { CATEGORIAS } from '../../contextos/CategoriaContexto';

export const historiaHtmlBasicos = {
  id: 'historiaHtmlBasicos',
  titulo: 'Introducción a HTML: Historia y Fundamentos',
  resumen: 'Descubre qué es HTML, su historia y cómo funciona la estructura básica de una página web. Ideal para principiantes.',
  contenido: `
<h2 class="text-2xl font-bold text-white mt-8 mb-4">Introducción: El Esqueleto de la Web</h2>

<p class="mb-4 text-gray-300">
  Imagina que vas a construir una casa. Antes de pintar las paredes (CSS) o instalar alarmas, calefacción, etc. (JavaScript), necesitas los cimientos, las vigas y las paredes. Eso es <strong>HTML</strong> en el mundo web.
</p>

<p class="mb-4 text-gray-300">
  Si comparamos una página web con el cuerpo humano:
</p>

<ul class="list-none space-y-2 mb-8 ml-4">
  <li class="flex items-center">
    <span class="text-ciber-verde mr-2 font-bold">1.</span>
    <span><strong class="text-white">HTML (HyperText Markup Language):</strong> Es el <strong>esqueleto</strong>. Define dónde va la cabeza, los brazos, las piernas. Da la estructura.</span>
  </li>
  <li class="flex items-center">
    <span class="text-ciber-verde mr-2 font-bold">2.</span>
    <span><strong class="text-white">CSS (Cascading Style Sheets):</strong> Es la <strong>piel, ropa, el pelo, etc.</strong>. Define si somos altos, morenos, o si llevamos una remera azul. Da el estilo y la belleza.</span>
  </li>
  <li class="flex items-center">
    <span class="text-ciber-verde mr-2 font-bold">3.</span>
    <span><strong class="text-white">JavaScript:</strong> Son los <strong>músculos y el cerebro</strong>. Nos permite movernos, saltar y reaccionar. Da la funcionalidad y el movimiento.</span>
  </li>
</ul>

<div class="bg-gray-800/50 border-l-4 border-ciber-rosa p-4 my-6">
  <p class="text-gray-300">
    <strong class="text-ciber-rosa">¡Importante!</strong> Mucha gente confunde esto, pero <strong>HTML NO es un lenguaje de programación</strong>.
    Es un lenguaje de <strong>marcado</strong> (markup). No sirve para hacer cálculos ni lógica (como sumar 2+2 o tomar decisiones), solo sirve para <strong>estructurar</strong> y <strong>organizar</strong> el contenido.
  </p>
</div>

<p class="mb-4 text-gray-300 mt-6">
  Piensa en HTML como el <strong>idioma que utilizan los navegadores</strong> para interpretar el código de una página web. 
  El navegador lee este código y lo <strong>renderiza</strong> (lo procesa visualmente); es decir, transforma esas instrucciones de texto en la página web atractiva que ves en tu pantalla.
</p>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-12">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">UN POCO DE HISTORIA</h2>
</div>

<div class="flex justify-center my-8">
  <img src="/imagenes/historiaHtmlBasicos/html_5.webp" alt="Logotipo de HTML5" class="w-32 md:w-48 drop-shadow-[0_0_15px_rgba(227,79,38,0.5)] animate-pulse" />
</div>

<p class="mb-4 text-gray-300">
  Todo comenzó en <strong>1989</strong> en el CERN (Organización Europea para la Investigación Nuclear). Un físico británico llamado <span class="text-ciber-verde font-bold">Tim Berners-Lee</span> tenía un problema: los científicos de todo el mundo necesitaban compartir información de forma rápida y sencilla.
</p>

<p class="mb-4 text-gray-300">
  Tim inventó el HTML no para crear webs bonitas como las de hoy, sino para organizar documentos científicos con <strong>enlaces</strong> (hypertext) que permitieran saltar de una investigación a otra con un clic.
</p>

<div class="bg-gray-800/50 border-l-4 border-ciber-verde p-4 my-6">
  <p class="italic text-gray-400">"El poder de la Web está en su universalidad. El acceso por cualquier persona, independientemente de la tecnología que utilice, es un aspecto esencial."</p>
  <p class="text-right text-sm text-ciber-verde mt-2">- Sir Tim Berners-Lee</p>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">¿Cómo funciona? Etiquetas y Elementos</h2>

<p class="mb-4 text-gray-300">
  HTML funciona mediante <strong>etiquetas</strong> (tags). Piensa en las etiquetas como "cajas" invisibles que le dicen al navegador qué hay dentro.
</p>

<p class="mb-4 text-gray-300">
  La mayoría de las etiquetas tienen una apertura y un cierre:
</p>

<div class="relative group">
  <pre class="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 mb-6 border border-gray-700 overflow-x-auto">
<code class="language-html">
&lt;etiqueta&gt;
Aquí va el contenido
&lt;/etiqueta&gt;
</code>
  </pre>
  <button 
    class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100"
    title="Copiar código"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</div>

<p class="mb-4 text-gray-300">
  Observa la barra inclinada <code>/</code> en la segunda etiqueta. Eso indica que la "caja" se cierra ahí. Todo lo que esté dentro se verá afectado por esa etiqueta.
</p>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">¿Qué necesito para escribir HTML?</h2>

<p class="mb-4 text-gray-300">
  Para escribir código necesitamos herramientas adecuadas. Los desarrolladores usamos entornos de desarrollo (IDE) o editores de código modernos.
</p>
<p class="mb-4 text-gray-300">
  El estándar absoluto de la industria hoy en día es Visual Studio Code (VS Code). Es gratuito, potente y nos ayuda coloreando el código y autocompletando las etiquetas.
</p>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">¡Manos a la Obra! Tu Primer Archivo</h2>

<p class="mb-4 text-gray-300">
  La teoría está muy bien, pero la programación se aprende haciendo. Sigue estos pasos ahora mismo:
</p>

<ol class="list-decimal ml-6 mb-8 text-gray-300 space-y-2">
  <li>Descarga e instala <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="text-ciber-verde font-bold hover:underline">Visual Studio Code</a>.</li>
  <li>Crea una carpeta en tu escritorio (ej: "MiPrimeraWeb") y ábrela con VS Code (Archivo > Abrir Carpeta).</li>
  <div class="my-4 space-y-4">
    <img src="/imagenes/historiaHtmlBasicos/abrir-carpeta-vscode.png" alt="Guía para abrir carpeta en VS Code" class="rounded-lg border border-gray-700 w-full max-w-md mx-auto shadow-lg" />
    <img src="/imagenes/historiaHtmlBasicos/img-abrir-carpeta.png" alt="Carpeta abierta en VS Code" class="rounded-lg border border-gray-700 w-full max-w-md mx-auto shadow-lg" />
  </div>
  <li>Dentro de esa carpeta, crea un archivo nuevo llamado <code class="text-ciber-verde font-bold">index.html</code>.</li>
  <div class="my-4">
    <img src="/imagenes/historiaHtmlBasicos/img-crear-index.png" alt="Creando archivo index.html" class="rounded-lg border border-gray-700 w-full max-w-md mx-auto shadow-lg" />
  </div>
  <li>Copia y pega el siguiente código dentro:</li>
</ol>

<div class="relative group">
  <pre class="bg-black rounded-lg p-4 overflow-x-auto border border-gray-700 mb-8">
<code class="language-html text-sm">
<span class="text-blue-400">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html&gt;</span>

  <span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Mi Primera Página<span class="text-blue-400">&lt;/title&gt;</span>
  <span class="text-blue-400">&lt;/head&gt;</span>

  <span class="text-blue-400">&lt;body&gt;</span>
    <span class="text-blue-400">&lt;h1&gt;</span>¡Hola Mundo!<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;p&gt;</span>Este es mi primer párrafo.<span class="text-blue-400">&lt;/p&gt;</span>
  <span class="text-blue-400">&lt;/body&gt;</span>

<span class="text-blue-400">&lt;/html&gt;</span>
</code>
  </pre>
  <button 
    class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100"
    title="Copiar código"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</div>

<ol class="list-decimal ml-6 mb-8 text-gray-300 space-y-2 start-4">
  <li value="5">Guarda el archivo (Ctrl + S).</li>
  <li>Ve a la carpeta donde lo guardaste y haz <strong>doble clic</strong> en el archivo. ¡Se abrirá en tu navegador y verás tu creación!</li>
  <div class="my-4 space-y-4">
    <img src="/imagenes/historiaHtmlBasicos/abrir-index.png" alt="Abriendo el archivo index.html" class="rounded-lg border border-gray-700 w-full max-w-md mx-auto shadow-lg" />
    <img src="/imagenes/historiaHtmlBasicos/mi-primer-index.png" alt="Resultado final en el navegador" class="rounded-lg border border-gray-700 w-full max-w-md mx-auto shadow-lg" />
  </div>
</ol>
<div class="relative group">
  <button 
    class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100"
    title="Copiar código"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</div>

<div class="bg-gray-800/50 border-l-4 border-yellow-500 p-4 my-6">
  <h4 class="font-bold text-yellow-500 mb-2">💡 Pro Tip: Live Server</h4>
  <p class="text-gray-300 text-sm">
    Si usas VS Code, busca la extensión <strong>"Live Server"</strong>. Te permitirá ver los cambios automáticamente cada vez que guardes, ¡sin tener que recargar la página manualmente!
  </p>
  <div class="mt-4 space-y-4">
    <img src="/imagenes/historiaHtmlBasicos/extension.png" alt="Extensión Live Server en VS Code" class="rounded-lg border border-yellow-500/30 w-full max-w-sm mx-auto shadow-lg" />
    <div>
      <img src="/imagenes/historiaHtmlBasicos/open-with-live-server.png" alt="Abrir con Live Server" class="rounded-lg border border-yellow-500/30 w-full max-w-sm mx-auto shadow-lg" />
      <p class="text-gray-400 text-xs text-center mt-2">
        Al hacer click ahí se nos abrirá una pestaña en el navegador y podremos ver el proyecto en tiempo real.
      </p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Tu Primera Estructura Web</h2>

<p class="mb-4 text-gray-300">
  Una página web básica siempre tiene la misma estructura mínima. Es como una receta que siempre debes seguir:
</p>

<div class="relative group">
<pre class="bg-black rounded-lg p-4 overflow-x-auto border border-gray-700 mb-8">
<code class="language-html text-sm">
<span class="text-gray-500">&lt;!-- Le dice al navegador que esto es HTML5 moderno --&gt;</span>
<span class="text-blue-400">&lt;!DOCTYPE html&gt;</span>

<span class="text-gray-500">&lt;!-- La caja principal que envuelve todo --&gt;</span>
<span class="text-blue-400">&lt;html&gt;</span>

  <span class="text-gray-500">&lt;!-- HEAD: Información para el navegador (no se ve en la página) --&gt;</span>
  <span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Mi Primera Página<span class="text-blue-400">&lt;/title&gt;</span>
  <span class="text-blue-400">&lt;/head&gt;</span>

  <span class="text-gray-500">&lt;!-- BODY: Todo lo que el usuario ve en la pantalla --&gt;</span>
  <span class="text-blue-400">&lt;body&gt;</span>
    <span class="text-blue-400">&lt;h1&gt;</span>¡Hola Mundo!<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;p&gt;</span>Este es mi primer párrafo.<span class="text-blue-400">&lt;/p&gt;</span>
  <span class="text-blue-400">&lt;/body&gt;</span>

<span class="text-blue-400">&lt;/html&gt;</span>
</code>
</pre>
  <button 
    class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100"
    title="Copiar código"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</div>

<h3 class="text-xl font-bold text-ciber-rosa mt-4 mb-2 !my-2">Elementos Básicos para Empezar</h3>

<div class="space-y-0 not-prose">
  <!-- Encabezados -->
    <p class="text-gray-300 !my-0 !mb-1 text-sm">
      <strong class="text-ciber-verde">&lt;h1&gt; a &lt;h6&gt;:</strong> Son los encabezados o títulos.
    </p>
    <div class="relative group !mt-0 !mb-2">
      <pre class="bg-black rounded-lg p-1 overflow-x-auto border border-gray-700 !mt-0 !mb-0">
<code class="language-html text-sm">
<span class="text-blue-400">&lt;h1&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h1&gt;</span>
<span class="text-blue-400">&lt;h2&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h2&gt;</span>
<span class="text-blue-400">&lt;h3&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h3&gt;</span>
<span class="text-blue-400">&lt;h4&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h4&gt;</span>
<span class="text-blue-400">&lt;h5&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h5&gt;</span>
<span class="text-blue-400">&lt;h6&gt;</span>Hola Mundo!<span class="text-blue-400">&lt;/h6&gt;</span>
</code>
      </pre>
      <button class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100" title="Copiar código">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
    </div>
    <div class="mb-4">
      <img src="/imagenes/historiaHtmlBasicos/resultado-encabezados.png" alt="Resultado de los encabezados h1 a h6" class="rounded-lg border border-gray-700 w-full max-w-sm" />
    </div>

  <!-- Párrafos -->
  <div>
    <p class="text-gray-300 !my-0 !mb-1 text-sm">
      <strong class="text-ciber-verde">&lt;p&gt;:</strong> Párrafos de texto.
    </p>
    <div class="relative group !mt-0 !mb-2">
      <pre class="bg-black rounded-lg p-1 overflow-x-auto border border-gray-700 !mt-0 !mb-0">
<code class="language-html text-sm">
<span class="text-blue-400">&lt;p&gt;</span>Esto es un párrafo de texto.<span class="text-blue-400">&lt;/p&gt;</span>
</code>
      </pre>
      <button class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100" title="Copiar código">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
    </div>
    <div class="mb-4">
      <img src="/imagenes/historiaHtmlBasicos/resultado-parrafo.png" alt="Resultado de la etiqueta p" class="rounded-lg border border-gray-700 w-full max-w-sm" />
    </div>
  </div>

  <!-- Imágenes -->
  <div>
    <p class="text-gray-300 !my-0 !mb-1 text-sm">
      <strong class="text-ciber-verde">&lt;img&gt;:</strong> Muestra imágenes.
    </p>
    <div class="relative group !mt-0 !mb-2">
      <pre class="bg-black rounded-lg p-1 overflow-x-auto border border-gray-700 !mt-0 !mb-0">
<code class="language-html text-sm">
<span class="text-blue-400">&lt;img</span> <span class="text-ciber-rosa">src</span>=<span class="text-yellow-300">"foto.jpg"</span> <span class="text-ciber-rosa">alt</span>=<span class="text-yellow-300">"..."</span> <span class="text-blue-400">/&gt;</span>
</code>
      </pre>
      <button class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100" title="Copiar código">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
    </div>
    <div class="mb-4">
      <img src="/imagenes/historiaHtmlBasicos/resultado-imagen.png" alt="Ejemplo de imagen insertada" class="rounded-lg border border-gray-700 w-full max-w-sm" />
    </div>
  </div>

  <!-- Enlaces -->
  <div>
    <p class="text-gray-300 !my-0 !mb-1 text-sm">
      <strong class="text-ciber-verde">&lt;a&gt;:</strong> Enlaces a otras webs.
    </p>
    <div class="relative group !mt-0 !mb-2">
      <pre class="bg-black rounded-lg p-1 overflow-x-auto border border-gray-700 !mt-0 !mb-0">
<code class="language-html text-sm">
<span class="text-blue-400">&lt;a</span> <span class="text-ciber-rosa">href</span>=<span class="text-yellow-300">"https://google.com"</span><span class="text-blue-400">&gt;</span>Enlace<span class="text-blue-400">&lt;/a&gt;</span>
</code>
      </pre>
      <button class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100" title="Copiar código">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
    </div>
    <div>
      <img src="/imagenes/historiaHtmlBasicos/resultado-enlace.png" alt="Ejemplo de un enlace" class="rounded-lg border border-gray-700 w-full max-w-sm" />
    </div>
  </div>
</div>

<p class="mt-6 text-gray-300 bg-ciber-verde/10 p-4 rounded-lg border border-ciber-verde/20">
  <strong class="text-ciber-verde">Nota sobre Accesibilidad:</strong> Usar las etiquetas correctas es vital. Por ejemplo, el <code>&lt;h1&gt;</code> debe usarse <strong>solo una vez por página</strong> para el título principal, no para textos grandes. Esto ayuda a que Google entienda tu página.
</p>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Atributos: Dando Superpoderes a las Etiquetas</h2>

<p class="mb-4 text-gray-300">
  Mencionamos la etiqueta <code>&lt;img&gt;</code>, pero... ¿cómo sabe qué foto mostrar? Aquí entran los <strong>Atributos</strong>.
</p>

<p class="mb-4 text-gray-300">
  Son como "apellidos" o configuraciones que ponemos <strong>dentro</strong> de la etiqueta de apertura.
</p>

<div class="relative group">
<pre class="bg-black rounded-lg p-4 overflow-x-auto border border-gray-700 mb-6">
<code class="language-html text-sm">
<span class="text-gray-500">&lt;!-- src = source (fuente), alt = texto alternativo --&gt;</span>
<span class="text-blue-400">&lt;img</span> <span class="text-ciber-rosa">src</span>=<span class="text-yellow-300">"foto-gato.jpg"</span> <span class="text-ciber-rosa">alt</span>=<span class="text-yellow-300">"Un gato muy lindo"</span> <span class="text-blue-400">/&gt;</span>

<span class="text-gray-500">&lt;!-- href = referencia hipertexto (destino) --&gt;</span>
<span class="text-blue-400">&lt;a</span> <span class="text-ciber-rosa">href</span>=<span class="text-yellow-300">"https://google.com"</span><span class="text-blue-400">&gt;</span>Ir a Google<span class="text-blue-400">&lt;/a&gt;</span>
</code>
</pre>
  <button 
    class="btn-copiar absolute top-2 right-2 p-2 text-gray-400 hover:text-green-400 bg-gray-800/50 hover:bg-gray-700/80 rounded-md transition-all border border-transparent hover:border-green-500/30 opacity-0 group-hover:opacity-100"
    title="Copiar código"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Video Complementario</h2>

<p class="mb-4 text-gray-300">
  Si prefieres aprender viendo, te recomiendo este video que explica los conceptos básicos de forma muy clara:
</p>

<div class="my-8 relative w-full" style="padding-bottom: 56.25%">
  <iframe class="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-700 shadow-lg" src="https://www.youtube.com/embed/vKi9XI3Ya7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">CONCLUSIÓN</h2>
</div>

<p class="mb-4 text-gray-300">
  HTML es un lenguaje de marcado de etiquetas que permite crear la estructura de una página web. 
</p>

<p class="mb-8 text-gray-300">
  ¡Esto es solo el comienzo! En futuras notas nos sumergiremos de a poco en el mundo de HTML y aprenderemos mas cosas.
</p>

<div class="mt-8 text-right">
  <span class="text-ciber-verde font-mono text-sm tracking-widest">by Luciano Cirvini</span>
</div>

`,
  fecha: '2026-01-14',
  categoria: CATEGORIAS.FRONTEND,
  tags: ['html', 'frontend', 'web', 'historia', 'principiantes', 'desarrollo']
};
