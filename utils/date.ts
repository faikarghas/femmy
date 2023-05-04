export function getDate(_time:any){

    let newDate = new Date(_time)
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}/${month}/${year}-`
}
