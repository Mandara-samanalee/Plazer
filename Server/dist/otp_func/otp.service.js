"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const otp_entity_1 = require("./otp.entity");
const typeorm_2 = require("typeorm");
const emailService_1 = require("../services/emailService");
const bcrypt = require("bcrypt");
const saltOrRound = 10;
let OtpService = class OtpService {
    constructor(otpRepository) {
        this.otpRepository = otpRepository;
    }
    async sendMailOtp(recipient, response) {
        try {
            const otp = Math.floor(1000 + Math.random() * 9000);
            let mailService = new emailService_1.MailService(recipient.recipient, 'Plazer verification', `<h3>Hello</h3>\n<h4>This is your verfication code: ${otp}</h4>`);
            let result = await mailService.sendMail();
            switch (result) {
                case common_1.HttpStatus.ACCEPTED:
                    const hashedOtp = await bcrypt.hash(String(otp), saltOrRound);
                    recipient.otp = hashedOtp;
                    recipient.type = 'email';
                    let resultFromDb = await this.otpRepository.save(recipient);
                    setTimeout(() => {
                        this.otpRepository.remove(resultFromDb);
                    }, 5 * 60 * 1000);
                    return response.status(common_1.HttpStatus.ACCEPTED).send(`OTP has been sent successfully to ${recipient.recipient}\nOTP ID: ${resultFromDb.otpId}`);
                case common_1.HttpStatus.NOT_ACCEPTABLE:
                    return response.status(common_1.HttpStatus.NOT_ACCEPTABLE).send("Please recheck you entered email");
                default:
                    return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
            }
        }
        catch (error) {
            console.log(error);
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
        }
    }
    async resendMaitOtp(otpId, response) {
        try {
            let resultFromDb = await this.otpRepository.findOne({ where: { otpId: otpId.otpId } });
            if (resultFromDb != null) {
                const otp = Math.floor(1000 + Math.random() * 9000);
                let mailService = new emailService_1.MailService(resultFromDb.recipient, 'Plazer verification', `<h3>Hello</h3>\n<h4>This is your verfication code: ${otp}</h4>`);
                let result = await mailService.sendMail();
                switch (result) {
                    case common_1.HttpStatus.ACCEPTED:
                        const hashedOtp = await bcrypt.hash(String(otp), saltOrRound);
                        otpId.otp = hashedOtp;
                        resultFromDb = this.otpRepository.merge(resultFromDb, otpId);
                        setTimeout(() => {
                            this.otpRepository.remove(resultFromDb);
                        }, 5 * 60 * 1000);
                        return response.status(common_1.HttpStatus.ACCEPTED).send(`OTP has been sent successfully to ${resultFromDb.recipient}\nOTP ID: ${resultFromDb.otpId}`);
                    case common_1.HttpStatus.NOT_ACCEPTABLE:
                        return response.status(common_1.HttpStatus.NOT_ACCEPTABLE).send("Please recheck you entered email");
                    default:
                        return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
                }
            }
            else {
                return response.status(common_1.HttpStatus.REQUEST_TIMEOUT).send("Cannot resend due to the time exceed");
            }
        }
        catch (error) {
            console.log(error);
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
        }
    }
    async verifyOtp(otp, response) {
        try {
            let resultFromDb = await this.otpRepository.findOne({ where: { otpId: otp.otpId } });
            if (resultFromDb != null) {
                const isMatch = await bcrypt.compare(otp.otp, resultFromDb.otp);
                if (isMatch) {
                    await this.otpRepository.delete(resultFromDb);
                    return response.status(common_1.HttpStatus.ACCEPTED).send("OTP verified");
                }
                else {
                    return response.status(common_1.HttpStatus.NOT_FOUND).send("OTP mismatched");
                }
            }
            else {
                return response.status(common_1.HttpStatus.REQUEST_TIMEOUT).send("Cannot verify OTP due to the time exceed");
            }
        }
        catch (error) {
            console.log(error);
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send("Internal server error");
        }
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(otp_entity_1.Otp)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OtpService);
//# sourceMappingURL=otp.service.js.map