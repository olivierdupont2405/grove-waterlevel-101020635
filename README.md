# Grove Water Level Sensor 10 cm (101020635) — Extension MakeCode

Extension MakeCode pour utiliser le capteur Grove Water Level Sensor 10 cm (101020635).

## Installation
1. Ouvrir MakeCode (micro:bit)
2. Aller dans **Extensions**
3. Cliquer sur **Importer extension**
4. Entrer l’URL de ce dépôt GitHub

## Exemple
```blocks
basic.forever(function () {
    let niv = waterlevel.readLevel()
    basic.showNumber(niv)
    basic.pause(500)
})# grove-waterlevel-101020635
