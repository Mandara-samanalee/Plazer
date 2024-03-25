"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require('nodemailer');
class MailService {
    constructor(to, subject, html) {
        this.mailDetails = {
            name: 'Plazer',
            from: 'plazer456@gmail.com',
            to: '',
            subject: '',
            html: ''
        };
        this.mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'plazer456@gmail.com',
                pass: 'rqam nixs vfcm qaso'
            }
        });
        this.mailDetails.to = to;
        this.mailDetails.subject = subject;
        this.mailDetails.html = html;
    }
    async sendMail() {
        this.mailTransporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            }
        });
        let result = await this.mailTransporter.sendMail(this.mailDetails);
        if (result.accepted != null) {
            return common_1.HttpStatus.ACCEPTED;
        }
        else {
            return common_1.HttpStatus.NOT_ACCEPTABLE;
        }
    }
}
exports.MailService = MailService;
//# sourceMappingURL=emailService.js.map