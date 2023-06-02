export default class ObjectUtil {
    /**
     * 检测一个对象是否是{}
     * @param obj 
     * @returns 
     */
    public static checkObjectIsNull(obj: any): boolean {
        return Object.keys(obj).length === 0;
    }
}