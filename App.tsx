import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, BackHandler, Alert} from 'react-native';
import {WebView, WebViewNavigation} from 'react-native-webview';

export default function App() {
  const webViewRef = useRef<WebView | null>(null);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    const botonAtras = BackHandler.addEventListener(
      'hardwareBackPress',
      irAtras,
    );

    return () => {
      botonAtras.remove();
    };
  }, [currentUrl]);

  const irAtras = () => {
    if (webViewRef.current) {
      if (
        currentUrl === 'https://iiwork.netlify.app/PerfilProfesional' ||
        currentUrl === 'https://iiwork.netlify.app/PerfilCliente'
      ) {
        Alert.alert(
          'Cerrar Sesión',
          'Estás a punto de cerrar sesión, ¿seguro que quieres salir?',
          [
            {
              text: 'No',
              style: 'cancel',
            },
            {
              text: 'Cerrar Sesión',
              onPress: () => {
                if (webViewRef.current) {
                  webViewRef.current.injectJavaScript(
                    `window.location.href = 'https://iiwork.netlify.app/'`,
                  );
                }
              },
            },
          ],
          {cancelable: false},
        );
        return true;
      } else if (currentUrl === 'https://iiwork.netlify.app/') {
        Alert.alert(
          'Cerrar Aplicación',
          'Estás a punto de cerrar la aplicación, ¿seguro que quieres salir de iWork?',
          [
            {
              text: 'No',
              style: 'cancel',
            },
            {text: 'Salir', onPress: () => BackHandler.exitApp()},
          ],
          {cancelable: false},
        );
        return true;
      } else {
        webViewRef.current.goBack();
        return true;
      }
    }
    return false;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://iiwork.netlify.app/',
        }}
        showsVerticalScrollIndicator={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        setBuiltInZoomControls={false}
        scalesPageToFit={true}
        allowFileAccess={true}
        saveFormDataDisabled={true}
        onNavigationStateChange={(navState: WebViewNavigation) => {
          setCurrentUrl(navState.url);
        }}
      />
    </SafeAreaView>
  );
}
