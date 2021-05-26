# Hi there 👋,  Hippo Team

React native project дээр ажиллахад тань туслах бяцхан дүрэм болон зөвлөгөө. 🙂

* Pretty cool, right?

### Хөгжүүлэлтийн орчин
[React Native](https://reactnative.dev/docs/environment-setup) documentation.

[XCode](https://stackoverflow.com/questions/10335747/how-to-download-xcode-dmg-or-xip-file) .dmg file -р нь татвал багийн бусад гишүүдэд хуваалцахад амар байх болно. 

[Android Studio](https://developer.android.com/studio) татах.

[VSCode](https://code.visualstudio.com/download) editor ашиглахыг зөвлөж байна. Мэдэхэд илүүдэхгүй зүйлс. Үүнд:
* [Keyboard-shortcuts-macos](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
* Шаардлагатай plugins
    - Auto Rename Tag (Jun Han)
    - Prettier - Code formatter (Prettier)
    - Color Highlight (Sergii Naumov)
    - ES& React/Redux/GraphQL/React-Native snippets (dsznajder)
    - ESLint (Dirk Baeumer)
    - React Native Snippet (Jundat95)*
    - Bracket Pair Colorizer (CoenraadS)*
    - Indent-rainbow (oderwat)*
* VSCode editor-ийг өөртөө тохируулан гоё болгох: (⌘+⇪+p -> Open Settings(JSON))
```javascript 
    {
        "workbench.colorTheme": "Solarized Dark",
        "editor.renderWhitespace": "none",
        "workbench.activityBar.visible": true,
        "workbench.sideBar.location": "left",
        "editor.minimap.enabled": true,
        "editor.renderControlCharacters": false,
        "breadcrumbs.enabled": true,
        "editor.codeActionsOnSave": {
            "source.fixAll": true,
        },
        "window.zoomLevel": 0
    }
```
### Алдаа гарсан үед хэрэг болох командууд
Some basic commands are:
```
watchman watch-del-all; rm -r node_modules; npm cache clean; npm install; npm start -- --reset-cache
```
Some basic git commands are:
```
git remote rm origin               --> remote -ээ устгана
git branch                         --> local дээрх branch-уудыг харна
git checkout branch_name           --> branch -aa солино
git branch -d branch_name          --> local дээрх branch устгах
git push origin :branch_name       -->  branch устгах
git push origin branch_name:master --> branch -с master рүү push хийх
rm -rf .git                        --> project-ийн git устгах
```
### Код бичихэд баримтлах дүрэм:
1. src folder дотор бүх кодоо бичих
2. index.js & package.json -оос бусад js, json file-уудыг үүсгэхдээ Том үсгээр эхлэх
3. file үүсгэхэд тухайн screen эсвэл хийгдэх үйлдэлтэй энэ хамаатуулж нэрлэх
4. file -ийн нэр 2 буюу түүнээс дээш үетэй байвал үе болгоны эхний үсгийг Томоор эхлүүлэх
5. inline style бичихээс аль болох татгалзах
6. ашиглахаа больсон import болон функцуудыг устгаж байх
7. дотроо олон үйлдэл хийдэг function -ийн үйлдлийг comment болгон бичих
8. яг адилхан үйлдэл хийдэг функцуудыг аль болох Component болгох
9. боломжтой бол өдөр бүр ажлын цаг дуусахад git рүү кодоо оруулах

### Код бичихэд хэрэг болох сангууд
[Libs](https://github.com/jondot/awesome-react-native) уншаад үзээрэй
