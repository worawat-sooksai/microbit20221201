input.onButtonPressed(Button.A, function () {
    radio.sendString("What your name ?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("My name is KRITSADA")
})
radio.setGroup(108)
