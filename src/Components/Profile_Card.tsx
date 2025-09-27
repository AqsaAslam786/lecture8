interface NavtecProps{
    num1: number;
    num2: number;

}
const Navtec =({num1, num2}:NavtecProps )=>{
    function add(a:number, b:number):number {
        return a+b
    }
    return <div>Navtec :: {add(num1, num2)}</div>
};
export default Navtec;