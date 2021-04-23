# PRACTICA PARA REDIS EN NODE

Se debe de crear un registro de mascotas, este registro de mascotas llevara la siguiente información:
 - id (generar automaticamente)
 - Nombre de la mascota
 - Edad
 - Raza
 - Tipo

Crear una API REST para el CRUD de mascotas para usarlo en una interfaz html dentro del mismo proyecto de node.

Crear una authenticación que funcione de la siguiente manera:
 - Solo se tendran dos campos donde se podra escribir un usuario y una clave o contraseña para iniciar
 - Al momento de ingresar los datos, se verificara si existe el usuario, y si no se creara un valor en redis para identificar al usuario despues. Si el usuario existe, se verificara la contraseña
 - Se pueden usar los comandos de GET y SET para trabajar la authenticación.
