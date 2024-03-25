import { OtpService } from "./otp.service";
import { Otp } from "./otp.entity";
import { Response } from "express";
export declare class OtpController {
    private otpService;
    constructor(otpService: OtpService);
    sendMailOtp(recipient: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
    resendMailOtp(otpId: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
    verifyOtp(otp: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
}
