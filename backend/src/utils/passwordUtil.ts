import crypto from "crypto"

export default class PasswordUtil {
    /**
     * 对密码加盐并哈希
     * @param password 
     * @returns 
     */
    public static encryptPassword(password: string): { salt: string; hashPassword: string } {
        const salt = crypto.randomBytes(16).toString("hex")
        const iterations = 10000
        const keyLen = 64
        const digest = "sha512"

        const hashPassword = crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest).toString("hex");
        return { salt, hashPassword };
    }

    /**
     * 验证密码
     * @param password 
     * @param salt 
     * @param hashedPassword 
     * @returns 
     */
    public static verifyPassword(password: string, salt: string, hashedPassword: string): boolean {
        const iterations = 10000
        const keyLen = 64
        const digest = 'sha512'

        const hashPassword = crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest).toString("hex");
        return hashPassword === hashedPassword;
    }
}