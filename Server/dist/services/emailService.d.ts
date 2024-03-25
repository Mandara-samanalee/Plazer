export declare class MailService {
    constructor(to: string, subject: string, html: string);
    sendMail(): Promise<number>;
    private mailDetails;
    private mailTransporter;
}
