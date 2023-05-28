export default class ParamUtil {
    public static validateParams(obj: Record<string, any>): boolean {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] === undefined) {
                return false;
            }
        }
        return true;
    }

}