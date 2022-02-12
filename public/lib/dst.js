// add methods to Date to check if DST is in effect ###
// from http://stackoverflow.com/questions/11887934/check-if-daylight-saving-time-is-in-effect-and-if-it-is-for-how-many-hours ###
Date.prototype.stdTimezoneOffset = function() {
    let jan = new Date(this.getFullYear(), 0, 1)
    let jul = new Date(this.getFullYear(), 6, 1)
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
}

Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset()
}