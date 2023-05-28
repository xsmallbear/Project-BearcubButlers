export default class ObjectUtil {
    /**
     * 检测一个对象是否是{}
     * @param obj 
     * @returns 
     */
    public static checkObjectIsNull(obj: any): boolean {
        if (Object.keys(obj).length !== 0) {
            //不是空对象
            return false
        }
        return true
    }
}