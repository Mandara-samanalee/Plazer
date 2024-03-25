export declare class MobileService {
    constructor(to: string);
    send(): Promise<number>;
    private from;
    private to;
    private body;
}
