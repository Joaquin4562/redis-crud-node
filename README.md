# PRACTICA PARA REDIS EN NODE

Se debe de crear un registro de encuestas para alumnos donde primero se tiene que registrar un alumno con la siguiente información:
 - id (generar automaticamente) este sera el hash del hmap.
 - Nombre del alumno
 - Matricula
 - Edad
 - Fecha de nacimiento
 - Sexo
 - Especialidad
 - Institución
 - Lugar de nacimiento

Crear una API en node usando como base de datos redis para hacer el registro de el alumnado.

Una vez que se hayan registrado los alumnos tendran que contestar dos encuestas:

 - Encuesta personal
   - Lugar de recidencia
   - Tipo de sangre
   - Religión
   - Estado civil
   - CURP (texto)
   - NSS (texto)
   - Número telefonico
   - Preferencias sexuales
   - Lengua nativa
   - decendencia (decendencias indigenas o ninguna)
   - Materias
     - Nombre
     - Dias
     - Claves

 - Encuesta socioeconomica
   - Tipo de hogar
   - Material del hogar
   - Cuantos focos tienes en tu hogar
   - Cuantas personas habitan en tu hogar
   - Ingreso mensual
   - Gasto mensual
   - Trabajas (si o no)
   - Grado maximo de estudios de el padre (primaria, secundaria, preparatoria, universidad)
   - Grado maximo de estudios de la madre (primaria, secundaria, preparatoria, universidad)
   - Lista de electrodomesticos (Labadora, secadora, estufa, microhondas, refigerador) multiselect
   - Becado (si o no)
   - Tipo de beca (si tiene)

Crear una API en node usando como base de datoa redis para hacer el registro de las encuestas, se tiene que pedir el identificador del alumno registrado anteriormente para contestar una encuesta.

Crear una API para traer todos los alumnos registrados y ver cuantas encuestas tienen.

## NOTA: Todas las API deben de tener su interfaz para consumirse, se puede crear la propia interfaz en el mismo proyecto o en un poryecto externo con alguna otra tecnología.
