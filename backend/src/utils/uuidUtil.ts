import { v4 as uuidv4 } from 'uuid';

export default class UUidUtil {
    public static generateUUID() {
        const uuid = uuidv4().toUpperCase();
        return uuid.replace(/-/g, '')
    }
}   