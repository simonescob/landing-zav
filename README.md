# Landing ZaV

Esto es una prueba para entregar a ZaV que consiste en crear una landing page para agendar citas de odontologia.

Creado por Simón Escobar.

<hr/>

## Prerrequisitos

Para usar esta landing tienes que tener instalado:

- Yarn o Npm => para manejar los paquetes
- Xampp  => para usar un formulario que almacena información
- Node o Nodemon => para enceder el servidor de la **API**
- Composer => el formulario necesita mandar un correo y para eso utilizo **PHPMailer** 

<hr/>

Pasos para usarlo:

Copiar el repositorio usando:
```
git clone https://github.com/simonescob/landing-zav.git
```
 para descargarlo en local.
 
 <hr/>
 
 ### React.JS
 
 Una vez descargado el repositorio instalamos las dependencias necesarias usando:
```
 yarn install
```
o si usas npm:

```
 npm install
```
<hr/>

### PHP

Hay un formulario que envia información y la almacena en una base de datos usando xampp.

El archivo **action.php** y la carpeta **composer** que están en la carpeta **php** dentro del repositorio, se deben copiar a la carpeta **htdocs** en **xampp** o **lampp** dependiendo del sistema operativo que uses.

Creas una carpeta llamada "**landing-zav**" por ejemplo, en **htdocs**, inicias el servidor y la base de datos de **xampp** para que el formulario funcione.

Por último enciende el servidor de Xampp para que el archivo php haga su mágia. 

<hr/>

### Node.JS

Existe un Carousel y una sección abajo de puro texto que estan consumiendo ese texto a travéz de una "**API**", esa API funciona con **node.js** y **express.js**, para que esa API funcione hay que encender un servidor usando:

```
node api/api.js
```

O si prefieres usar **nodemon** escribe esto:

```
nodemon api/api.js
```
Una vez encendido el servidor ya la **API** debería estar funcionando. 
