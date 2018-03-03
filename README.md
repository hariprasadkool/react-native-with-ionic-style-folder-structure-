# react-native-with-ionic-style-folder-structure-
Get started with react native with ionic folder structure especially for ionic developer for mobile apps

# starter
[![npm](https://img.shields.io/badge/npm%20-v0.0.2-red.svg?style=flat-square)](https://www.npmjs.com/package/react-native-with-ionic-style-folder-structure "View this project on npm")
[![code style: standard](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com "Standardjs")
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/ "Prettier")
[![license: MIT](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](https://opensource.org/licenses/MIT "MIT License")
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square "Build")
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com "Help in Pull request")
[![Discuss on React-native-ionic](https://img.shields.io/badge/Discuss-react--native%20ionic-blue.svg?style=flat-square)](https://github.com/hariprasadkool/react-native-with-ionic-style-folder-structure- "My Repository")

```
For this Project the versions i have used 

  node version >=  v8.9.4
  npm version >=  v5.6.0

  react-native-cli: 2.0.1
  react-native: 0.53.3

Inside App folder

  npm install -g react-native-cli
  npm install

  react-native link
    
  npm run start
  react-native run-android

  
``` 


RUNBOOK-

If react native vector icons error comes use this command to resolve

``` 
Go Inside the App folder-

  rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json

``` 

## File Structure inside App folder

```
 folder structure 
 
/App
  /android - Android native stuff
  /ios - iOS native stuff
  /src - Contains our React Native App codebase
      /assets - Images, Fonts and others
      /pages - all the pages or screens in the app
      /section - section of the page that are used all over the app like header and footer
  /App.js - Base component for navigation between the screens or pages
  /Drawer.js - side menu or drawer
  /index.js - Entry point for the App


or hierarchy structure 

|--App
  |--android - Android native stuff
  |--ios - iOS native stuff
  |--src - Contains our React Native App codebase
      |--assets - Images, Fonts and others
      |--pages - all the pages or screens in the app
      |--section - section of the page that are used all over the app like header and footer
  |--App.js - Base component for navigation between the screens or pages
  |--Drawer.js - side menu or drawer
  |--index.js - Entry point for the App


```
## Included
- [x] [Icons](https://material.io/icons/)
- [x] [UI ToolKit](https://shoutem.github.io/docs/ui-toolkit/components/typography)
- [x] [Drawer](https://reactnavigation.org/docs/drawer-based-navigation.html)
- [x] [Navigation to Pages](https://reactnavigation.org/docs/navigating.html)


## Roadmap
- [ ] Add Themes Page
- [ ] Add buttons
- [ ] Add Component folder
- [ ] Optimise and Destructure the code for better readability and scalability
- [ ] Something you's like to see? Submit an [issue](https://github.com/hariprasadkool/react-native-with-ionic-style-folder-structure-/issues) or a [pull request](https://github.com/hariprasadkool/react-native-with-ionic-style-folder-structure-/pulls)


## Related
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Icons used for this module
- [react-navigation](https://github.com/react-navigation/react-navigation) - Navigation between pages 
- [@shoutem/ui](https://github.com/shoutem/ui) - Using Shoutem UI for element UI Toolkit

## Maintainers

- [hariprasadkool](https://github.com/hariprasadkool)


## License

MIT


