# Practica00-Consumo-de-APIs-en-la-nube
Autor: Isaac Chavez
<h2>Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.</h2>
<p>Arquitectura Web: Cliente-Servidor</p>
<img src="https://i.imgur.com/muRqIP7.png" style="width: 1000px; height: 1000px;">
<p>Patrón 3 Capas</p>
<img src="https://i.imgur.com/pY0MhJa.png" style="width: 1000px; height: 1000px;">


<h2>Desarrollar una aplicación web usando una de las API gratuitas de API List Fun. Tener en cuenta que se deben a 
    plicar buenas prácticas para el desarrollo de la interfaz gráfica de usuario, para la cuál se permite utilizar plantilla de Bootstrap.</h2>
    <p>1.Api a emplear:</p>
    <p>Open Libra. </p> 
    <img src="https://i.imgur.com/mrMcMM0.png" style="width: 1000px; height: 1000px;">
    <p>OpenLibra dispone de un ligero servicio web con el que es posible acceder de forma remota a la mayoría de los datos de su catálogo bibliográfico. Mediante una petición AJAX (Javascript),
        se puede establecer una conexión directa con el sistema y obtener resultados en tiempo real sobre la consulta. El sistema devuelve un objeto JSON con el que es sencillo trabajar directamente en
        avascript o en otros lenguajes de servidor como PHP o Java. Esta primera versión del API facilita la creación de clientes independientes para OpenLibra, como por ejemplo de escritorio, 
        que permitan rastrear el catálogo en tiempo real en busca de novedades,
        crear notificaciones con las actualizaciones, clasificar y buscar libros según un criterio concreto o facilitar la lectura de documentos directamente online sin navegador.
    </p>
    <p>Para poder acceder a esta api se puede emplear el siguiente código
   
   <img src="https://i.imgur.com/S8bBN87.png" style="width: 1000px; height: 1000px;">
    </p>
    <p>De acuerdo a los requerimientos se emplearon dos tipos de consultas a las Apis. Para buscar una cantidad especifica de libros y otra para buscar un libro en especifico.
        Para el caso de búsqueda por nombre se empleo el siguiente código :

   </p>2.Botstrap</p>
 
 
 
   <h2>Estructura de la pagina</h2>
   <img src="https://i.imgur.com/rm0WKN8.png" style="width: 500px; height: 500px;">
    <p>La pagina web esta desarrollada con la finalidad de atender la demanda de una biblioteca virtual. La pagina consta de tres partes principales:
    </p>
    <p>1.	El header en el que se encuentran ubicada la sección de un buscador y el respectivo logo.
    </p>
    <p>2.	Posteriormente se encuentra un slider el cual expone diferentes imágenes referente a los libros.
    </p>
    <p>3.	Luego Tenemos la parte de los resultados de la búsqueda, dichos resultados están agrupados y ordenados en una tabla.
    </p>

   <h2>1.La aplicación Web debe permitir buscar la información a través de un nombre.Interfaz Grafica
    </h2>
    <p>La interfaz grafica es sencilla e intuituva primero se debe llenar el campo “Search” y lueglo aplastar buscar, esto llamara a que aparezca la tabla de datos.
    </p>
    <p>Explicación Codigo HTML</p>
    <img src="https://i.imgur.com/emqxKw5.png" style="width: 500px; height: 500px;">
    
   <p>La parte del buscador se encuentra ubicado en la sección del header, su código esta basado en el método de matriz que nos ofrece Bootstrap por lo que es mucho más
         fácil ubicar las diferentes partes. El header se divide en una
         fila (row), posteriormente se procede a dividir esta fila, la 6ta parte corresponderá al logo, uta parte corresponderá al input y lo restante al botón de buscar.
    </p>
   <img src="https://i.imgur.com/pMfgCZX.png" style="width: 500px; height: 500px;"> 
   <p>Explicaion Codigo JS
    </p>
    <p>Función llamar()
    </p>
    <p>Esta función valida que el campo del input de la búsqueda no este vacío, si esta vacío nos da un mensaje de error, si esta algún dato procede a llamar al método PaginarMas.
    </p>
    <p>Función PaginarMas()
    </p>
    <p>Función que es llamada una vez que se valido que el input no este vacío, su función es llamar a la función obtenerDatos() y de llevar un conteo de la paginación, ya 
        que esta es llamada para pedir datos, ella es la encargada de sumar 10 a la variable limite. Esto nos permite avanzar en la lista de resultados.
    </p>
    <p>Función PaginarMenos()
    </p>
    <p>Esta función es parecida a la anterior solo que con un mecanismo contrario, este método es llamado cuando se necesita retroceder en la tabla de resultados, por lo que 
        la variable limite va a ser restada o mermada en 10.
    </p>

    

   <h2>2. Además, se deberá visualizar toda la información disponible de la base de datos.</h2>
    <p>La primera forma de visualizar los datos es a un nivel muy general a través de una tabla la cual se encuentra después del slider, La tabla recopila los 
        datos que nos ofrece y las plasma en una tabla que esta compuesta por los campos:
        ID que hace referencia al código único del libro, la sección Nombre del Libro hace referencia al titulo otorgado a un libro y la sección autor hace referencia, valga la redundancia, al autor.

   </p>
    <p>Explicación Codigo HTML
    </p>
    <p> A través del id del segundo <div> de la imagen expuesta se podrá acceder a su ubicación mediante JS y así podrá ser sobrescrito a través de JS.
    </p>
    <p>Explicaion Codigo JS 
    </p>
    <p>Funcion ObtenerDatos()
        <img src="https://i.imgur.com/uU2EqUr.png" style="width: 500px; height: 500px;">
   </p>
    <p>Es la función mas importante ya que de acuerdo a su lógica están basadas las demás peticiones de datos, Esta basada en sesiones asíncronas por lo que empleamos la herramienta 
        de AJAX para su cometido, a continuación voy a detallar el código implementado para dicha tarea:
        La función recibe como parámetro el nombre del libro ya que de acuerdo a los requerimientos debe ser por su nombre, posteriormente procedemos a hacer la petición a la API a emplear, 
        de acuerdo a la documentación proporcionada por la API la consulta debe ser de la siguiente manera
        URL+nombreLibro+RangoResultados
        Para más información en la parte del inicio se proporciona información de la API.
        Posteriormente se procede a hacer la solicitud. Aquí es donde ya comenzamos a implementar AJAX no entraremos a detalle en explicar en como consiste ya que se entiende que ya dominamos 
        esta herramienta, los recursos resultantes de la búsqueda son almacenados en la variable datos, y a través de la variable resultado podemos acceder al div que plasmara nuestra tabla.
        Para poder recorrer los recursos resultantes es necesario emplear un bucle for para poder accesar a los datos proporcionados por la API y para poder recorrer la lista de elementos. 
        Ya que vamos a acceder a un div es necesario pasarle el código html por ende en una variable vamos a almacenar todos los datos en una tabla. Para poder acceder a un libro en 
        especifico vamos a crear un enlace en las datos de ID. Cabe destacar que además de plasmar el id este también 
        os servirá de conducto para acceder a un libro en especifico por eso en su html esta llamado el método onclick que llamara a la funcion nuevo() explicada a continuación.
    </p>

   <h2>3. También, la aplicación deberá aplicar paginación en caso de la búsqueda del primer requerimiento. Es decir, si la búsqueda retorna más de 5 resultados se deberá paginar 
        los mismos según el total de resultados obtenidos.
    </h2>
    <p>
        La paginación se esta llevando acabo por medio la tabla de los datos, en caso de querer ver mas datos o regresar la pestana simplemente se debe utilizar los botones ubicados en la parte inferior izquierda de la imagen expuesta. La paginación se lleva a cabo en el método buscarDatos(), mediante el uso de la variable limite se puede obtener un rango de libros en este caso de 10 en 10, al momento de aplastar los botones se llaman a los 
        metpdps paginarMas() y paginarMenos() los cuales son los encargados de llamar a imprimir los resultados y mas que nada editar la variable limite.
    </p>

   <h2>Resultados Obtenidos</h2>
   <ol>
    <ul>•	Los estudiantes son capaces de emplear APIs con la finalidad de obtener algún tipo de información de un servidor externo.</ul>
    <ul>•	Los estudiantes son capaces de entender y manipular archivos JSON</ul>
    <ul>•	Los estudiantes son capaces de integrar frameworks como Bootstrap para la optimización en diseño de una página web</ul>
    <ul>•	Los estudiantes son capaces de interpretar información en formato  JSON para posteriormente plasmarla en alguna plataforma.</ul>
    <ul>•	Los estudiantes comprenden los diferentes tipos de arquitecturas en las plataformas web</ul>
    <ul>•	Los estudiantes comprenden los diferentes tipos de patrones en las plataformas web</ul>
   </ol>

   <h2>Concluciones</h2>
   <ol>
    <ul>•	Los estudiantes comprenden el potencial que tienen las herramientas que proveen recursos de información, así como a identificar los diferentes tipos de arquitecturas       y patrones en las plataformas web.</ul>
    <ul>•	Los estudiantes son capaces de diseñar aplicaciones en la web con la finalidad de consumir algún recurso en este caso una API, los estudiantes serán capaces de             manipular esa información con la finalidad de que sea legible.</ul>
    <ul>•	Los estudiantes son capaces de manejar frameworks como Bootstrap para un mejor rendimiento en el diseño de la plataforma web.</ul>
   </ol>
   
   <h2>Recomendaciones</h2>
    <ol>
        <ul>•	Asistir a las sesiones de clase y revisar el material facilitado por el docente. </ul>
        <ul>•	En el caso de que no carguen los archivos .php no emplear la ruta absoluta en el url si no la que comienza con localhost.</ul>
        <ul>•	Emplear el navegador de preferencia en modo incognito</ul>
        <ul>•	Si los cambios no se cargar en los estilos ir a reiniciar el servidor xammp</ul>
    </ol>
