import { CATEGORIAS } from '../../contextos/CategoriaContexto';

export const evolucionInformatica = {
  id: 'evolucionInformatica',
  titulo: 'Evolución histórica de la informática',
  resumen: 'La historia de la informática explicada como nunca te la contaron. Descubre las grandes ideas y los avances tecnológicos que dieron forma a nuestro mundo digital.',
  contenido: `Antes de proceder a hablar de la evolución de la informática, debemos entender que es la informática. Para comprender la magnitud de esta disciplina, primero debemos desglosar el concepto fundamental. La <span class="text-ciber-verde font-bold">Informática</span> es la ciencia que estudia los métodos, procesos y técnicas para procesar, almacenar y transmitir <span class="text-ciber-verde font-bold">datos digitales</span>.

Su estructura se sostiene sobre tres pilares esenciales:
• <span class="text-ciber-verde font-bold">Métodos</span>: La parte lógica y abstracta, donde reina la algoritmia.
• <span class="text-ciber-verde font-bold">Procesos</span>: El flujo vital de la información (Entrada → Procesamiento → Salida → Almacenamiento).
• <span class="text-ciber-verde font-bold">Técnicas</span>: La implementación práctica y tangible, conocida como codificación.

La palabra <span class="text-ciber-verde font-bold">Informática</span> hace referencia al <span class="text-ciber-verde font-bold">procesamiento automático de información</span> mediante sistemas computacionales.

En conclusión, la <span class="text-ciber-verde font-bold">Informática</span> es la ciencia que estudia el análisis y resolución de problemas utilizando <span class="text-ciber-verde font-bold">computadoras</span>.

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-12">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">ERA PRE-MECÁNICA</h2>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">El Abuelo de las Computadoras: El Ábaco</h2>

Las computadoras de hoy tienen una familia muy antigua. Uno de sus primeros antepasados fue el <span class="text-ciber-verde font-bold">Ábaco</span> (origen en Mesopotamia aprox. 2700-2300 a.C., popularizado en China).
La historia nos dice que nació en la antigua <span class="text-ciber-verde font-bold">China</span>, aunque griegos y romanos también lo usaban.

Es una máquina muy simple pero ingeniosa: un marco con varillas y bolitas (cuentas) que se deslizan.
Al mover estas cuentas de un lado a otro, podemos representar números y valores.

<img src="/imagenes/evolucionInformatica/abaco.png" alt="Fotografía antigua de un ábaco de madera" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">ERA MECÁNICA</h2>
</div>

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Inicio de los Engranajes: La Pascalina (1642)</h2>

Siglos después, en 1642, un joven genio francés llamado <span class="text-ciber-verde font-bold">Blaise Pascal</span> dio el siguiente gran salto. Para ayudar a su padre (que era recaudador de impuestos y tenía mucho trabajo), inventó la <span class="text-ciber-verde font-bold">Pascalina</span>.

A diferencia del ábaco, esta máquina funcionaba con <span class="text-ciber-verde font-bold">engranajes</span> y ruedas, muy parecido a un reloj antiguo. Fue la primera calculadora mecánica capaz de sumar y restar de forma casi automática.

<img src="/imagenes/evolucionInformatica/pascalina.webp" alt="Fotografía de una Pascalina original" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Upgrade de la Pascalina: La Máquina de Leibniz (1694)</h2>

Pocos años después (diseñada en 1671, construida en 1694), el matemático alemán <span class="text-ciber-verde font-bold">Gottfried Wilhelm Leibniz</span> decidió mejorar el diseño de Pascal. Pensó: "¿y si en lugar de solo sumar o restar, pudiéramos multiplicar o dividir?"

Inventó la <span class="text-ciber-verde font-bold">Stepped Reckoner</span> (Calculadora Escalonada), utilizando un cilindro con dientes de diferentes longitudes llamado el "Cilindro de Leibniz".
Esta máquina era capaz de realizar las cuatro operaciones básicas: suma, resta, <span class="text-ciber-verde font-bold">multiplicación</span> y <span class="text-ciber-verde font-bold">división</span>. Leibniz soñaba con liberar a los humanos del "trabajo tedioso" del cálculo para que pudieran dedicarse a pensar.

<img src="/imagenes/evolucionInformatica/maquina-leibniz.png" alt="Replica de la máquina de cálculo de Leibniz" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h2 class="text-2xl font-bold text-white mt-12 mb-4">Primer Algoritmo: Máquina Analítica (1837)</h2>

Saltamos al siglo XIX (1837) para conocer a dos visionarios. <span class="text-ciber-verde font-bold">Charles Babbage</span> diseñó (aunque no pudo terminar de construir) la <span class="text-ciber-verde font-bold">Máquina Analítica</span>.
Era una máquina mecánica de vapor y engranajes, pero tenía algo revolucionario: podía ser programada para resolver *cualquier* problema matemático, no solo sumar y restar. Fue el primer concepto de una computadora de <span class="text-ciber-verde font-bold">propósito general</span> (lo que hoy llamamos Hardware).

Pero una máquina necesita instrucciones. Ahí entra <span class="text-ciber-verde font-bold">Ada Lovelace</span>.
Ella entendió que esa máquina podía manipular símbolos, no solo números. Escribió una serie de instrucciones para calcular los números de Bernoulli con la máquina de Babbage.
Ese conjunto de instrucciones es considerado el primer <span class="text-ciber-verde font-bold">algoritmo</span> de la historia. Por eso, Ada es reconocida como la primera programadora de la humanidad.

> [!NOTE]
> **El Papel de las Tarjetas Perforadas**
> Para introducir estas instrucciones, Babbage adaptó una tecnología de la industria textil: las **tarjetas perforadas** del telar de Jacquard. Fue la primera vez que se propuso usar este medio para "programar" una máquina de cálculo, un estándar que dominaría la informática durante el siglo siguiente.
>
> <img src="/imagenes/evolucionInformatica/tarjetas-perforadas.webp" alt="Montón de tarjetas perforadas" class="w-full max-w-xs mx-auto rounded-lg border border-gray-700 shadow-lg mt-4 hover:border-ciber-verde transition-all duration-300" />
> <p class="text-center text-sm text-gray-400 mt-2 italic">Ejemplo de tarjetas perforadas utilizadas para almacenamiento de datos y programación.</p>

<img src="/imagenes/evolucionInformatica/maquina-analitica.webp" alt="Ilustración de la Máquina Analítica de Babbage" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">ERA ELECTRÓNICA</h2>
</div>

<h3 class="text-2xl font-bold text-white mt-12 mb-4">1ª Generación: Tubos de Vacío y Relés (1940-1956)</h3>

Aquí comienza la verdadera revolución. Las máquinas dejaron de usar engranajes físicos y pasaron a usar electricidad.

<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">IBM Harvard Mark I (1944)</h4>
El primer paso fue híbrido: la <span class="text-ciber-verde font-bold">IBM Harvard Mark I</span>. Era enorme, lenta y ruidosa, usando relés electromecánicos.
<img src="/imagenes/evolucionInformatica/markI.webp" alt="La masiva computadora electromecánica Harvard Mark I" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Pero el verdadero salto llegó con el <span class="text-ciber-verde font-bold">Tubo de Vacío</span>.

<div class="my-6">
  <img src="/imagenes/evolucionInformatica/tubo-de-vacio.webp" alt="Primer plano de un tubo de vacío" class="w-full max-w-xs mx-auto rounded-lg border border-gray-700 shadow-lg hover:border-ciber-verde transition-all duration-300" />
  <p class="text-center text-sm text-gray-400 mt-2 italic">
    Un tubo de vacío (o válvula) funcionaba como un interruptor electrónico sin partes móviles, similar a una bombilla, permitiendo velocidades de "computación" inalcanzables para la mecánica.
  </p>
</div>


<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">ENIAC (1945-1946)</h4>
La estrella de esta generación fue la <span class="text-ciber-verde font-bold">ENIAC</span> (Electronic Numerical Integrator and Computer). Era monstruosa: ocupaba todo un sótano u 167 m², pesaba 27 toneladas y tenía 17.468 tubos de vacío.
Cuando la encendían, existía la leyenda urbana de que bajaba la tensión eléctrica de toda la ciudad de Filadelfia (aunque en realidad tenía su propia línea de alimentación). Pero era increíblemente rápida para la época: podía calcular trayectorias de misiles en segundos.

<img src="/imagenes/evolucionInformatica/ENIAC.webp" alt="Sala de computación de la ENIAC con técnicos operando cables" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

> [!TIP]
> **Curiosidad: El origen del "Bug"**
> Aunque las máquinas de esta generación usaban válvulas, los relés seguían presentes. En 1947, **Grace Hopper** y su equipo encontraron una polilla atrapada en un relé de la Mark II. La pegaron en el registro con la frase "First actual case of bug being found" (Primer caso real de bug encontrado). De ahí nacen los términos **"bug"** y **"debugging"**.
>
> <img src="/imagenes/evolucionInformatica/rele.webp" alt="Fotografía de un relé antiguo" class="w-full max-w-xs mx-auto rounded-lg border border-gray-700 shadow-lg mt-4 hover:border-ciber-verde transition-all duration-300" />
> <p class="text-center text-sm text-gray-400 mt-2 italic">Un relé electromecánico, tener en cuenta que este relé es un dispositivo mas moderno pero es similar a donde se encontró el primer "bug".</p>


> [!IMPORTANT]
> **La Arquitectura de Von Neumann**
> En 1945, **John von Neumann** propuso el concepto de "programa almacenado": datos e instrucciones comparten la misma memoria. La **UNIVAC** y sus sucesoras adoptaron este diseño lógico.

<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">UNIVAC I (1951)</h4>
Poco después llegó la <span class="text-ciber-verde font-bold">UNIVAC I</span>, diseñada por los mismos creadores de la ENIAC.
Fue la primera computadora comercial de la historia (es decir, la primera que una empresa podía comprar). Se hizo famosa por predecir correctamente la victoria presidencial de Eisenhower en 1952, cuando nadie le creía a "la máquina".

<img src="/imagenes/evolucionInformatica/UNIVACI.webp" alt="Consola futurista de la computadora UNIVAC I" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h3 class="text-2xl font-bold text-white mt-12 mb-4">2ª Generación: Transistores (1956-1963)</h3>
El gran cambio llegó con el <span class="text-ciber-verde font-bold">Transistor</span> (inventado en 1947 en Bell Labs). Este pequeño componente reemplazó a los voluminosos tubos de vacío.
Las computadoras se hicieron más pequeñas, rápidas, fiables y eficientes energéticamente. Ya no necesitaban sótanos enteros.

<div class="my-6">
  <img src="/imagenes/evolucionInformatica/transistores.webp" alt="Comparación de transistores antiguos" class="w-full max-w-xs mx-auto rounded-lg border border-gray-700 shadow-lg hover:border-ciber-verde transition-all duration-300" />
  <p class="text-center text-sm text-gray-400 mt-2 italic">
    El transistor revolucionó la electrónica al permitir miniaturizar los circuitos y reducir drásticamente el consumo de energía.
  </p>
</div>
Aparecieron los primeros lenguajes de alto nivel como <span class="text-ciber-verde font-bold">FORTRAN</span> (1957) y <span class="text-ciber-verde font-bold">COBOL</span> (1959), permitiendo a los programadores escribir instrucciones en un lenguaje más humano.
<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">IBM 1401 y DEC PDP-1 (1959)</h4>
Modelos icónicos como la IBM 1401 dominaron el mercado empresarial, mientras que la DEC PDP-1 inició la era de las minicomputadoras (y donde se jugó el primer videojuego: <em>Spacewar!</em>).
<img src="/imagenes/evolucionInformatica/IBM1401.webp" alt="Computadora IBM 1401 en un centro de datos de los años 60" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />
<img src="/imagenes/evolucionInformatica/DEC PDP-1.webp" alt="Minicomputadora DEC PDP-1 con su característica pantalla circular" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h3 class="text-2xl font-bold text-white mt-12 mb-4">3ª Generación: Circuitos Integrados (1964-1971)</h3>
La miniaturización dio otro salto gigante con el <span class="text-ciber-verde font-bold">Circuito Integrado (Chip)</span>. Jack Kilby y Robert Noyce hallaron la manera de integrar componentes electrónicos en una única pieza de material semiconductor (silicio), abriendo las puertas a una era de miniaturización sin precedentes.

<img src="/imagenes/evolucionInformatica/circuitos-integrados.webp" alt="Primer plano de un circuito integrado antiguo" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />


En esta época (1965), <span class="text-ciber-verde font-bold">Gordon Moore</span> formuló la ley que lleva su nombre, prediciendo la duplicación exponencial de transistores.
Además, en 1969 se activó <span class="text-ciber-verde font-bold">ARPANET</span>, la red precursora de Internet.

Las computadoras ahora tenían <span class="text-ciber-verde font-bold">Sistemas Operativos</span>, permitiendo ejecutar múltiples programas a la vez.
<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">IBM System/360 (1964)</h4>
Fue la primera familia de computadoras diseñada para cubrir tanto aplicaciones científicas como comerciales, estandarizando la arquitectura de hardware.
<img src="/imagenes/evolucionInformatica/IBMSYSTEM-360.webp" alt="Mainframe IBM System/360, la primera familia de computadoras compatible" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h3 class="text-2xl font-bold text-white mt-12 mb-4">4ª Generación: Microprocesadores (1971-1982)</h3>
El nacimiento de la "Computadora Personal" (PC). Todos los componentes de la CPU se condensaron en un solo chip: el <span class="text-ciber-verde font-bold">Microprocesador</span>.
<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">Intel 4004 (1971)</h4>
Este microprocesador abrió la puerta a todo lo que vendría después.
<img src="/imagenes/evolucionInformatica/Intel_4004.webp" alt="Intel 4004: El primer microprocesador de la historia" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">Altair 8800 (1975)</h4>
Luego vinieron máquinas legendarias como esta, que encendió la chispa de la revolución de las PCs personal.
<img src="/imagenes/evolucionInformatica/ALTAIR-8800.webp" alt="Altair 8800, la chispa de la revolución de las PCs" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">Apple II (1977)</h4>
Una de las primeras computadoras hogareñas exitosas y masivamente popular.
<img src="/imagenes/evolucionInformatica/appleII.webp" alt="Apple II, una de las primeras computadoras hogareñas exitosas" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<h4 class="text-xl font-bold text-ciber-rosa mt-8 mb-2">IBM PC (1981)</h4>
El modelo que estableció el estándar moderno de la computación personal.
<img src="/imagenes/evolucionInformatica/IBMPC.webp" alt="La IBM PC 5150, definiendo el estándar de la industria" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

La informática llegó a los hogares, escuelas y oficinas.



<h3 class="text-2xl font-bold text-white mt-12 mb-4">5ª Generación: Hiperconectividad e Inteligencia Artificial (1982-Presente)</h3>
Estamos viviéndola. Se caracteriza por la <span class="text-ciber-verde font-bold">Inteligencia Artificial</span>, el procesamiento en paralelo y la conectividad total.

Con la adopción de TCP/IP en 1983, <span class="text-ciber-verde font-bold">Internet</span> nació y conectó al mundo, transformando la sociedad para siempre:
<img src="/imagenes/evolucionInformatica/internet.webp" alt="Representación conceptual del nacimiento de Internet" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Esta era también destaca por la <span class="text-ciber-verde font-bold">omnipresencia de los dispositivos móviles</span>, que han puesto el poder de una computadora en nuestros bolsillos:
<img src="/imagenes/evolucionInformatica/dispositivos-mobiles.webp" alt="Evolución de los dispositivos móviles inteligentes" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Y por las <span class="text-ciber-verde font-bold">redes informáticas</span> globales que permiten esta interconexión instantánea:
<img src="/imagenes/evolucionInformatica/redes-informaticas.webp" alt="Redes informáticas conectando el mundo" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

El poder de cómputo personal ha alcanzado niveles increíbles, visible en el auge del <span class="text-ciber-verde font-bold">PC Gaming</span> de alto rendimiento:
<img src="/imagenes/evolucionInformatica/pc-gamer.webp" alt="Setup de PC Gamer de alto rendimiento" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Como ejemplo de la potencia actual, tenemos procesadores como el <span class="text-ciber-verde font-bold">AMD Ryzen 7 9800X3D</span>, que utiliza tecnología de apilamiento 3D (3D V-Cache) para maximizar el rendimiento en juegos y tareas complejas.
<img src="/imagenes/evolucionInformatica/ryzen7-9800x3d.webp" alt="AMD Ryzen 7 9800X3D: La cúspide del rendimiento moderno con tecnología 3D V-Cache" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Todo esto respaldado por la infraestructura de la <span class="text-ciber-verde font-bold">Nube (Cloud Computing)</span>, donde residen nuestros datos y servicios:
<img src="/imagenes/evolucionInformatica/nube.webp" alt="Infraestructura de computación en la nube" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

El objetivo ya no es solo procesar datos, sino <em>aprender</em> de ellos. Sistemas LLM como <span class="text-ciber-verde font-bold">Gemini</span>, <span class="text-ciber-verde font-bold">Copilot</span>, <span class="text-ciber-verde font-bold">DeepSeek</span> y <span class="text-ciber-verde font-bold">Grok</span> definen esta era.
<img src="/imagenes/evolucionInformatica/LLM.webp" alt="Representación de un Gran Modelo de Lenguaje (LLM)" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

Además, la <span class="text-ciber-verde font-bold">Computación Cuántica</span> promete resolver problemas imposibles para las computadoras clásicas.
<img src="/imagenes/evolucionInformatica/computadora-cuantica.webp" alt="Chip de computación cuántica" class="w-full max-w-lg mx-auto rounded-lg border border-gray-700 shadow-lg mt-6 hover:border-ciber-verde transition-all duration-300" />

<div class="border-b-2 border-ciber-verde/50 pb-2 mb-8 mt-16">
  <h2 class="text-3xl font-black text-ciber-verde tracking-wider">CONCLUSIÓN: EL FUTURO ES AHORA</h2>
</div>

<p class="mb-4 text-gray-300 font-medium text-lg">
  La evolución de la informática nos ha llevado a un punto donde la tecnología se define por características clave que moldean nuestro presente y futuro:
</p>

<ul class="list-none space-y-3 mb-8">
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Menor tamaño (Micro):</strong> La tecnología se ha vuelto tan compacta que ahora llevamos computadoras potentes en nuestros bolsillos o relojes.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Menor costo:</strong> A medida que ha pasado el tiempo, la tecnología ha vuelto más accesible para todos.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Mayor capacidad de procesamiento:</strong> Gracias a los avances tecnologicos, los procesadores pueden realizar cálculos increíbles en menos tiempo.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Interoperabilidad:</strong> Todos nuestros dispositivos (teléfonos, tablets, relojes) se conectan entre sí para funcionar como un solo sistema.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Software independiente:</strong> Los programas y aplicaciones ahora funcionan en diferenes tipos de dispositivos sin problemas de compatibilidad.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Cloud Computing:</strong> Acceso a programas y almacenamiento en internet, permitiendo trabajar sin depender de la potencia de nuestro propio equipo.</span>
  </li>
  <li class="flex items-start">
    <span class="text-ciber-verde mr-2 font-bold">•</span>
    <span><strong class="text-white">Movilidad:</strong> La tecnología ya no nos ata a un escritorio; nos permite trabajar, jugar y comunicarnos desde cualquier lugar.</span>
  </li>
</ul>

<div class="mt-8 text-right">
  <span class="text-ciber-verde font-mono text-sm tracking-widest">by Luciano Cirvini</span>
</div>

`,
  fecha: '2026-01-13',
  categoria: CATEGORIAS.INFORMATICA,
  tags: ['historia-informatica', 'generaciones', 'informacion-automatica', 'procesamiento', 'evolucion', 'inventos']
};
