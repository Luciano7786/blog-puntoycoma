import { CATEGORIAS } from '../../contextos/CategoriaContexto';

export const hardwareSoftware = {
  id: 'hardwareSoftware',
  titulo: 'Hardware y Software: Lo Tangible y Lo Intangible',
  resumen: 'Habrás escuchado hablar de hardware y software, pero ¿sabes realmente qué son? En este articulo te lo explicamos de manera sencilla.',
  contenido: `
  
<p class="mb-6">
  Para empezar, vamos a distinguir dos nociones: el <span class="text-ciber-verde font-bold">software</span>, que es la parte lógica o intangible de una computadora, como los sistemas operativos y las aplicaciones, y el <span class="text-ciber-verde font-bold">hardware</span>, que es la parte tangible de la PC, aquello que se puede ver y tocar, tanto sus componentes internos —que están dentro del gabinete— como sus dispositivos externos (periféricos) —que se encuentran fuera del gabinete—. Ahora bien, el software y el hardware se complementan, ya que la ausencia de alguno de ellos hace imposible el funcionamiento de la PC.
</p>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-12">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">LO TANGIBLE VS LO INTANGIBLE</h2>
</div>

<p class="mb-6">
  Para entenderlo de manera sencilla, podemos dividir todo en dos grandes partes: <span class="text-ciber-verde font-bold">lo que puedes tocar</span> y <span class="text-ciber-verde font-bold">lo que no puedes tocar pero es funcional</span>.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
  <div class="bg-gray-900/50 p-6 rounded-xl border border-ciber-verde/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">
    <h3 class="text-2xl font-bold text-ciber-verde mb-4 text-center">HARDWARE <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-2 mb-1"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg></h3>
    <img src="/imagenes/hardwareSoftware/hardware.png" alt="Hardware" class="w-full h-auto rounded-lg mb-4 border border-ciber-verde/20" />
    <p class="text-center italic text-gray-400 mb-4">"Lo TANGIBLE"</p>
    <p>Son los componentes físicos de la computadora: todo lo que puedes ver y tocar, como el monitor, el teclado, la placa madre, la RAM, el disco de estado sólido, etc.</p>
    <p class="mt-4 font-bold text-white text-center">LO QUE TOCAS</p>
  </div>

  <div class="bg-gray-900/50 p-6 rounded-xl border border-ciber-rosa/30 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all">
    <h3 class="text-2xl font-bold text-ciber-rosa mb-4 text-center">SOFTWARE <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-2 mb-1"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg></h3>
    <img src="/imagenes/hardwareSoftware/software.png" alt="Software" class="w-full h-auto rounded-lg mb-4 border border-ciber-rosa/20" />
    <p class="text-center italic text-gray-400 mb-4">"Lo INTANGIBLE"</p>
    <p>Es la parte lógica de la computadora: todo lo que no puedes tocar físicamente, como las aplicaciones, los videojuegos o los sistemas operativos.</p>
    <p class="mt-4 font-bold text-white text-center">LO QUE USAS</p>
  </div>
</div>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">HARDWARE</h2>
</div>

<p class="mb-6">
  Podemos clasificar el hardware en dos grandes grupos según su ubicación y función:
</p>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">1. Componentes Internos</h3>
<p class="mb-4">
  Son los órganos vitales que viven <span class="text-ciber-verde font-bold">dentro del gabinete</span>. Sin ellos, la computadora no podría ni encender.
</p>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  <!-- Placa Madre -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/placa-madre.webp" alt="Placa Madre" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Placa Madre</h4>
    <p class="text-sm text-gray-300">Placa base en donde se conectan todos los demas componentes, existen diferentes tamaños.</p>
  </div>

  <!-- CPU -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/procesador.webp" alt="Procesador CPU" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">CPU (Procesador)</h4>
    <p class="text-sm text-gray-300">Es el "cerebro". Se encarga de interpretar y ejecutar el software procesando los datos, ademas de controlar y dar ordenes a los demas componentes .</p>
  </div>

  <!-- RAM -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/ram.webp" alt="Memoria RAM" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Memoria RAM</h4>
    <p class="text-sm text-gray-300">Almacena temporalmente los datos de las aplicaciones que estás usando en ese preciso momento. Es volátil, lo que significa que cuando apagas la PC, esta información se borra.</p>
  </div>

  <!-- Almacenamiento -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/disco-ssd.webp" alt="Disco SSD" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Almacenamiento</h4>
    <p class="text-sm text-gray-300">Almacena los datos, aplicaciones y el sistema operativo del usuario y es no volátil, porque mantiene la información almacenada cuando la PC esta apagada.</p>
  </div>

  <!-- Fuente -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/fuente.webp" alt="Fuente de Alimentación" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Fuente de Poder</h4>
    <p class="text-sm text-gray-300">Encargada de transformar la corriente alterna de 220 voltios en corriente continua a los componentes de la PC.</p>
  </div>

  <!-- GPU -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/gpu.webp" alt="Tarjeta Gráfica GPU" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Tarjeta Gráfica</h4>
    <p class="text-sm text-gray-300">La encargada de todo lo visual. Procesa las imágenes y videos que ves en el monitor.</p>
  </div>

  <!-- Gabinete -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/gabinete.webp" alt="Gabinete PC" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Gabinete</h4>
    <p class="text-sm text-gray-300">Es la estructura que protege y sostiene a todos los componentes internos de la computadora.</p>
  </div>

  <!-- Disipador -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/disipador.webp" alt="Disipador CPU" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Disipador</h4>
    <p class="text-sm text-gray-300">Se encarga de mantener fresco el procesador, absorbiendo el calor que genera al trabajar.</p>
  </div>

  <!-- Ventiladores -->
  <div class="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-ciber-verde transition-colors group">
    <div class="relative overflow-hidden rounded-lg mb-3 h-80 bg-gray-900/50 p-4">
      <img src="/imagenes/hardwareSoftware/ventiladores.webp" alt="Ventiladores PC" class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" />
    </div>
    <h4 class="text-xl font-bold text-ciber-verde mb-2">Ventiladores (Coolers)</h4>
    <p class="text-sm text-gray-300">Generan flujo de aire dentro del gabinete para expulsar el aire caliente y meter aire fresco.</p>
  </div>
</div>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">2. Componentes Externos o Periféricos</h3>
<p class="mb-4">
  Son los dispositivos que conectamos <span class="text-ciber-verde font-bold">fuera del gabinete</span> para comunicarnos con la PC.
</p>
<ul class="list-disc list-inside space-y-2 ml-4 text-gray-300">
  <li><strong>De Entrada</strong>: Teclado, Mouse, Micrófono, Cámara Web. (Envían datos a la PC).</li>
  <li><strong>De Salida</strong>: Monitor, Impresora, Parlantes, Auriculares. (Reciben datos de la PC).</li>
  <li><strong>De Entrada y Salida</strong>: Pantallas táctiles, Módems. (Hacen ambas cosas).</li>
  <li><strong>De Almacenamiento</strong>: Pendrives, Discos Externos, Tarjetas SD.</li>
</ul>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">SOFTWARE</h2>
</div>

<p class="mb-6">
  Es nuestro sistema operativo que controla todo el hardware y gestiona las aplicaciones que usamos diariamente.
</p>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">1. Software de Sistema</h3>
<p class="mb-4">
  Es la base fundamental. Su funcion es administrar los recursos del hardware y servir de puente entre la PC y el usuario. Sin él, la computadora no "despertaría".
  <br>Ejemplos: <span class="text-ciber-verde font-bold">Windows, macOS, Linux, Android</span>.
</p>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">2. Software Utilitario</h3>
<p class="mb-4">
  Son herramientas diseñadas para el mantenimiento, soporte y optimización del sistema. Ayudan a que todo funcione correctamente.
  <br>Ejemplos: <span class="text-ciber-verde font-bold">WinRAR (compresor), Antivirus, Limpiadores de disco</span>.
</p>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">3. Software de Aplicación</h3>
<p class="mb-4">
  Son los programas que usamos para realizar tareas especificas, ya sea trabajo u ocio. Son la "razón" por la que usamos la PC.
  <br>Ejemplos: <span class="text-ciber-verde font-bold">Navegadores (Chrome, Firefox), Procesadores de texto (LibreOffice, Word), Videojuegos</span>.
</p>



<div class="mb-8 mt-16">
  <h2 class="text-3xl font-black text-white tracking-wider">Video Complementario</h2>
</div>

<div class="mb-12">
  <p class="mb-6 text-lg">
    Si quieres profundizar más sobre el tema, te recomiendo ver este excelente video explicativo:
  </p>
  <div class="relative w-full overflow-hidden rounded-xl border border-ciber-verde/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]" style="padding-top: 56.25%;">
    <iframe 
      class="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/19Xwz3dO9qQ" 
      title="Hardware y Software" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  </div>
</div>

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">CONCLUSIÓN</h2>
</div>

<p class="mb-8 font-medium text-lg">
  Finalmente concluyendo recordemos que el hardware es la parte física de la computadora y el software es el que le da vida a la misma.
  <br>Espero que esta nota te haya sido útil y que puedas continuar con tu aprendizaje en el mundo de la informática.
  <br>¡Hasta la próxima!
</p>

<div class="mt-8 text-right">
  <span class="text-ciber-verde font-mono text-sm tracking-widest">by Luciano Cirvini</span>
</div>
  `,
  fecha: '2026-01-15',
  categoria: CATEGORIAS.INFORMATICA,
  tags: ['hardware', 'software', 'componentes', 'perifericos', 'sistemas-operativos', 'aplicaciones', 'tangible', 'intangible']
};
