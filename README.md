# Chinese events

https://tonai.github.io/chinese-events/

## Building

### Bubblewrap

Will download Java and Android SDK in `~/.bubblewrap`.

In the `packages/pwa` folder run:

```bash
npm run build
npm run bubblewrap:init # Init android project from deployed PWA
npm run bubblewrap:build # Build APK
```

APK is generated in `android` directory.

### Capacitor

Prerequisites:

- Android Studio with SDK : https://developer.android.com/studio?hl=fr
- Java 17 : https://www.oracle.com/fr/java/technologies/downloads/

In the `packages/capacitor` folder run:

```bash
npm run build # Build local Vite project
npm run capacitor:init # Create Android project
npm run capacitor:icons # Generate icons
npm run capacitor:sync # Copy Vite build in Android project
npm run capacitor:open # Open project on Android Studio
```

Then build with capacitor (do'nt works):

```bash
npm run capacitor:build -- --keystorepath=[...] --keystorealias=[...] --keystorepass=[...] --keystorealiaspass=[...]
```

APK is generated in `android/build/outputs/apk/release` directory, but the generated app can't be installed.

Or use Android Studio to build the app (works):

- Go to Build > Generate Signed Bundle / APK
- Select APK
- Add keystore
- Select debug or release

APK is generated in `android/app/debug` or `android/app/release` directory.

## Comparison

### Bubblewrap

pro:

- easy to use
- easy to configure (use manifest.json...etc.)
- very lightweight : ~400ko APK / ~700ko installed
- can be installed through the web app

cons:

- limited to PWA capabilities
- needs to deploy the app on the web
- browser header bar (can be removed: https://dev.to/hyunsoong_i/twa-apps-how-to-hide-the-url-bar-browser-bar-and-display-app-as-full-screen-4cm3)
- iOS support is experimental

### Capacitor

pro:

- full-screen app
- based on web code
- access to native sdk with plugins

cons:

- needs Android Studio
- needs more setup (use `@capacitor/assets` for icons...etc.)
- needs to configure the app with Android Studio
- heavier: ~4.3Mo APK / ~10.7Mo installed

### React-native

pro:

- full-screen app
- access to more native feature (like the status bar...etc.)
- access to native features with Expo
- access to native sdk through the android project

cons:

- also needs Android Studio
- needs some setup
- use react-native and Expo components instead of web standards
- a lot heavier: ~53.5Mo APK / ~64Mo installed
