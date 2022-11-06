Crear un CRUD de productos simulando un e-commerce

Crear un sitio web donde el usuario pueda ver todos los productos en la página principal, en esta página deberá haber un botón en cada producto para añadirlos a un carrito (simulando que el usuario los va a comprar)

Para crear este sitio web se tiene que usar el siguiente Stack (IMPORTANTE):
-    React
-    Next
-    TypeScript
-    Tailwind CSS (Para estilizar el proyecto)
-    Prisma
-    TRPC (https://trpc.io/)

Para inicializar el proyecto se usa el siguiente comando: yarn create t3-app

Es importante que hagas commits a lo largo de todo el desarrollo del sitio, ya que yo analizare estos commits para ver como hiciste todo. Lo importante aquí es que seas proactivo.

Muchas de estas tecnologías podrías no saberlas, lo que voy a evaluar es que tan dedicado y decidido estas a aprender cosas nuevas y como te desarrollas en el caso de que no sepas hacer lo que se te pide. Estamos interesados en que puedas resolver lo que se te solicite.


Producto debe tener
-    Nombre
-    Slug (generado automáticamente del nombre)
-    Descripción
-    Inventario
-    Precio (en centavos)

Paginas necesarias:
-    Página principal - Lista de productos (donde se pueden ver todos los productos)
-    Crear producto (Un formulario que te permita crear nuevos productos)
-    Editar producto (Un formulario que te permita editar productos creados)
-     Ver producto (Una página que te permita ver los detalles del producto desde esta página será posible ir a editar o borrar el producto)

Carrito
El carrito debería incluir todos los productos añadidos al carrito, junto con la cantidad de cada producto, pero el usuario no debe poder añadir mas productos de los disponibles en el inventario de cada producto, finalmente este carrito deberá mostrar el total en pesos.
