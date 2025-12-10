namespace waterlevel {

    const HIGH_ADDR = 0x78
    const LOW_ADDR = 0x77
    const THRESHOLD = 100

    let highData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
    let lowData: number[] = [0,0,0,0,0,0,0,0]

    function readHigh() {
        let buf = pins.i2cReadBuffer(HIGH_ADDR, 12)
        for (let i = 0; i < 12; i++) {
            highData[i] = buf[i]
        }
    }

    function readLow() {
        let buf = pins.i2cReadBuffer(LOW_ADDR, 8)
        for (let i = 0; i < 8; i++) {
            lowData[i] = buf[i]
        }
    }

    //% block="niveau d'eau (%)"
    export function readLevel(): number {
        readLow()
        basic.pause(10)
        readHigh()

        let count = 0

        for (let i = 0; i < 8; i++) {
            if (lowData[i] > THRESHOLD)
                count++
        }
        for (let i = 0; i < 12; i++) {
            if (highData[i] > THRESHOLD)
                count++
        }

        let level = count * 5
        if (level > 100) level = 100

        return level
    }
}
