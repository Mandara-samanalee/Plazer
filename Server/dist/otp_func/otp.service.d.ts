import { Otp } from "./otp.entity";
import { Repository } from "typeorm";
import { Response } from "express";
export declare class OtpService {
    private otpRepository;
    constructor(otpRepository: Repository<Otp>);
    sendMailOtp(recipient: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
    resendMaitOtp(otpId: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
    verifyOtp(otp: Otp, response: Response): Promise<Response<any, Record<string, any>>>;
}
