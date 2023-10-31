# prueba-tecnica-lexgo
Prueba tecnica asignada por lexgo

# Instalacion backend
<p>Requisitos</p>
<p>nodejs version 19 en adelante</p>
una vez clonado el repositorio entrar desde consola de comandos a la carpeta backend<br>
ejecutar npm i<br>
copiar el archivo.env.example de la misma ruta, renombarlo por .env y llenar los valores dentro de este<br>
antes de ejecutar el frontend es preferible llenar la base de datos con al menos un departamento y un empleado empezando por el departamento<br>
para agregar un departamento enviar por post una consulta en formato raw - json con estructura <br>{<br>name : name<br>}<br>
para agregar un empleado enviar por post una consulta en formato raw - json un objeto con estructura <br>{<br>name : name,<br>departmentId : id_del_departamento_agregando_ateriormente<br>}<br>

# Instalacion frontend
<p>Requisitos</p>
<p>angular v15 en adelante</p>
una vez clonado el repositorio entrar desde consola de comandos a la carpeta frontend - lexgo<br>
ejecutar npm i<br>
en vscode o su editor preferido entrar en frontend - lexgo - src - app - services - database - database.service.ts y actualizar la variable UrlBackend por la Url en la que se encuentra ejecutandose el servidor, ejemplo "http://localhost:8000/"<br>
ejecutar ng serve -o<br>
