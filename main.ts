input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if ("A" == receivedString) {
        serial.writeLine(receivedString)
        basic.showString(receivedString)
    }
    if ("B" == receivedString) {
        serial.writeLine(receivedString)
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(102)
basic.forever(function () {
    serial.writeLine("X:" + input.acceleration(Dimension.X))
    serial.writeLine("Y:" + input.acceleration(Dimension.Y))
    serial.writeLine("Z:" + input.acceleration(Dimension.Z))
})
