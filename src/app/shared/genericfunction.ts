export function generatId(T:any) {
    let max;
    if (T.length == 0) {
       max = 0; 
    } else{
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
           if (T[i].id >max) {
            max = T[i].id;
           }
            
        }
    }
    return max +1;
}
// function add object in ls
export function addObject(obj:any, key:string , objects:any) {
    obj.id = generatId(objects);
    objects.push(obj);
    localStorage.setItem(key, JSON.stringify(objects));
}
// function get key in ls
export function getObjectsFromLS(key:string) {
    return JSON.parse(localStorage.getItem(key) || "[]");
    
 }