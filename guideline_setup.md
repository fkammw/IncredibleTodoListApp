
Guidelines on how to set up React Native

This document is a step-by-step guide of setting up a React Native environment on Windows operating systems to develop an Android application.

Pre-requisition

Below hardware and software specifications are the minimum requirements to install a React Native in the system.

- Processor: A multi-core processor built on x86\_64 CPU architecture.
- Memory: Minimum of 8GB RAM
- Storage: At least 10GB of free disk storage
- Operation System: React Native supports both Windows and macOS. Since this document focuses on Windows system, Windows 10 or above version is recommended.
- js and npm: React Native runs on node.js and npm. Installation guide will be provided in next part.
- Java Development Kit (JDK): JDK 8 or above version is required for Android development.
- Android Studio: Android Studio is used to provide Android platform's tools and emulators for Android application development.

Installation

Node.js:

Navigate yourself to [https://nodejs.org/en/](https://nodejs.org/en/). Download the LTS version (Long Term Service). Run the installer with the defaults options to complete the installation steps. Make sure you store node.js at local instead of any cloud platform.

NPM:

Node.js comes with npm. To install and check if npm is installed, open your IDE platform and run following commands:

npm install

npm run dev

Android Studio:

Navigate yourself to [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html). Download Android Studio Giraffe. Run the installer. Ensure yourself checked following items when installing:

- Andriod SDK
- Android SDK Platform
- Android Virtual Device
- Performance (Intel ® HAXM) if you haven't used Hyper-V

Open Android Studio to check if Android 13 (Tiramisu) SDK is included in order to build a React Native app with native code.

1. Open Android Studio, navigate yourself to "More Actions" button and select "SDK Manger"
2. Check the box "Show Package Details" at the bottom right corner.
3. Look into the expanded _Android 13 (Tiramisu)_ entry to see if below items are checked:
  1. Android SDK Platform 33
  2. 'Intel x86 Atom\_64 System Image' or 'Google APIs Intel x86 Atom System Image'
4. Navigate yourself to "SDK Tools".
5. Look into the expanded _Android SDK Build-Tools_ entry and ensure _33.0.0_ is selected.
6. Click "Apply" to download.

After download is completed, configuration is the next-step.

Configure the _ANDROID\_HOME_ environment variable

1. Open the _Windows Control Panel_.
2. Click on _User Accounts_, then click _User Accounts_ again
3. Click on _Change my environment variables_
4. Click on _New..._ to create a new ANDROID\_HOME user variable that points to the path to your Android SDK : **C:\CPRG303\Android\Sdk**

- The path can be found at the _Setting_ in Android Studio under _Languages & Frameworks → Android SDK → Android SDK Location_

1. Go back to _Change my environment variables_
2. Click on _Path_ and then _Edit_
3. Click New and add the path to platform-tool to the list : **C:\CPRG303\Android\Sdk\platform-tools**

React Native:

React Native can be set up in two ways: Expo Go Quickstart and React Native CLI Quickstart. In this document, React Native CLI will be focused.

1. Open Command Prompt at your desired file location. Input this command and run:
  - npx react-native@latest init IncredibleTodoListApp
2. Open your IDE platform and open IncredibleTodoListApp.
3. Navigate to App.tsx file and rename it as App.jsx
4. Inside App.jsx file, delete all the red underline items
5. Save the file

After that, prepare the Android device to run a React Native Android App. Both physical and virtual Android Device are supported to emulate the device on the computer. In this document, virtual device is used as an example.

Preparing virtual Android device

1. Open Android Studio, navigate yourself to "More Actions" button and select "Virtual Device Manager"
2. Click "Create Device" and select the desired phone model as your virtual device for emulation and download.

- Recommended to choose Portrait as the startup orientation when you configure the device.allow access"

1. Click the Play button. If you receive Windows Security Alert, click "Allow Access" to continue.

- If you receive a warning telling you unable to load script. Open IncredibleTodoListApp file location using a command prompt. Then input:

    - npm run start

    - r

Finally, you can start running the application IncredibleTodoListApp on the Android device in Android Studio.

Reference:

1. React Native. "Setting up the development environment". Meta Open Source. [Online] Accessed: 2 Nov 2023. [https://reactnative.dev/docs/environment-setup?guide=native](https://reactnative.dev/docs/environment-setup?guide=native)