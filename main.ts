input.onButtonPressed(Button.A, function () {
    basic.showString("Te amo")
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Te adoró ")
    basic.showIcon(IconNames.Silly)
    basic.showString("No me dejes")
    basic.showIcon(IconNames.Sad)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("Feliz")
    basic.showNumber(5)
    basic.showString("Meses")
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Cow)
    basic.showIcon(IconNames.Heart)
    basic.showString("Te amo")
    basic.clearScreen()
})
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.showString("Holi")
