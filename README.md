"Aplicación realizada con React Native WebView"

1) Como primer paso importaremos el repositorio main dentro de una carpeta en nuestro sistema.
2) Ejecutamos npm install en CMD o Powershell para instalar las dependencias del proyecto. Asegurese de ejecutar el comando npm dentro de la carpeta del repositorio.

Una vez instalado ya podemos depurar la app en nuestro dispositivo móvil Android y emulando en Android Studio.
3) Asegurese de tener activado el modo desarrollador en su dispotivio móvil en conjuinto con el modo depuración por USB.
4) Ejecute el siguiente comando: 
npx react-native run-android
5) Se abrirá una terminal llamada metro, seleccione la opción a de Android para ejecutar la aplicación. Recuerde tener su dispositivo móvil conectado al sistema por USB.
6) Se instalará la aplicación en su dispotivo móvil y podrá hacer uso de ella.

*) En caso de que no se pueda instalar la aplicación y aparezca un mensaje que haga alución a Gradlew Deprecated, ejecute el siguiente comando en el primer CMD o Powershell:
1) cd android
2) ./gradlew clean
Esto limpiará archivos de caché de gradlew en el proyecto y luego podrá ejecutar nuevamente la aplicación desde el punto 4.
