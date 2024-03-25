"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileService = void 0;
const accountSid = "ACe9fe26913114425f8d11996450c696c1";
const authToken = "9f81159fff768d230594a9100bfb3f94";
const client = require('twilio')(accountSid, authToken);
class MobileService {
    constructor(to) {
        this.from = "+16593006193";
        this.to = "";
        this.body = "Hello from Plazer";
        this.to = to;
    }
    async send() {
        client.messages.create({
            body: this.body,
            from: this.from,
            to: this.to
        })
            .then((message) => console.log(message.sid));
        return 200;
    }
}
exports.MobileService = MobileService;
//# sourceMappingURL=mobileService.js.map