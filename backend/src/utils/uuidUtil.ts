import { v4 as uuidv4 } from 'uuid';

export default class UUidUtil {
    public static generateUUID() {
        return uuidv4();
    }
}