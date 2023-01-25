# Internet

Internet es una red global de computadores conectados que permite la transferencia de información entre distintos usuarios.

## World Wide Web

Coleccion de sitios web interconectados entre si accesibles a traves de Internet.

## Navegadores y servidores

### Modelo cliente-servidor

- Cliente: Dispositivo que realiza la peticion de informacion, por ejemplo un navegador web.
- Servidor: Dispositivo encargado de recibir la peticion realizada por el cliente y posteriormente responder dicha peticion con una carga de datos utiles.

## HTTP

Hyper Text Transfer Protocol (Protocolo de Transferencia de Hipertexto), es el protocolo de intercambio de informacion utilizado en el modelo cliente-servidor. A traves de HTTP es posible detallar las peticiones y respuestas que son enviadas entre el cliente y el servidor cuando se inicia un proceso de conexion entre estos.

### Codigos de estado

Cuando el servidor le envia una respuesta al cliente, se especifica un codigo de estado como parte de dicha respuesta.
El codigo de estado de la respuesta es utilizado para indicar si esta fue exitosa o no.

- 200 OK: Peticion exitosa.
- 301 Moved Permanently: El recurso ha sido movido y el cliente sera redirigido.
- 400 Not Found: El recurso al que se trata de acceder no ha sido encontrado.
- 500 Internal Server Error: Error inesperado encontrado en el servidor.

## ¿Como trabaja el navegador web?

1. Cuando un usuario trata de acceder a un recurso desde el navegador, el servidor procesa la peticion y envia un archivo HTML de vuelta hacia el cliente. En los archivos HTML se estructura el contenido de un sitio web, asi como de los enlaces y recursos adicionales necesarios para su correcto despliegue en la interfaz del navegador.
2. A partir de la lectura del archivo HTML, el navegador empieza a realizar distintas peticiones HTTP a recursos externos usados por dicho archivo HTML, como por ejemplo archivos CSS, archivos estaticos como imagenes o videos y archivos que contenga codigo JavaScript.

En los navegadores web modernos las peticiones son realizadas de forma paralela, con lo cual no es necesario que el navegador deba esperar a recibir un recurso para solicitar el siguiente.