// arrow function
const searchFun=()=>{
    let filter=document.getElementById('myInput').value.toUpperCase();
    let myTable=document.getElementById('myTable');
    let tr=myTable.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++)
    {
        let td=tr[i].getElementsByTagName('td')[0];
    }
    if(td){
       let textvalue=td.textContent ||td.innerHTML;
        if(textvalue.toUppercase().indexOf(filter)>-1){
            tr[i].style.toUppercase="";
            }
            else{
                tr[i].style.toUppercase="none";
            }

    }
}