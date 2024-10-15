package com.clieventapp

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;  //splash screen
import org.devio.rn.splashscreen.SplashScreen; // react-native-splash-screen >= 0.3.1

class MainActivity : ReactActivity() {

  //splash screen version kotlin (not java)
  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(null)
      SplashScreen.show(this)  // Muestra la pantalla de inicio al crear la actividad
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "clieventapp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
