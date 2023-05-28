import jwt from "jsonwebtoken"

export default class JwtUtil {
    private static readonly secretKey = "SmallbearIsNotGoodProgram"

    public static sign(payload: object, options?: jwt.SignOptions) {
        return jwt.sign(payload, this.secretKey, options)
    }

    public static verify(token: string): any | string {
        try {
            const decode = jwt.verify(token, this.secretKey);
            return decode
        } catch (ok) {
            //验证错误
            return ""
        }
    }
}