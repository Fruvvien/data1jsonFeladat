
document.addEventListener("DOMContentLoaded", () =>{


    function readData(){
        fetch('./data1.json')
        .then(res => res.json())
        .then(data => listData(data))
    }
    readData()
  
    function listData(datas){
        
        let tables="";

        for(let i = 0; i < datas.length; i++){
            let value = datas[i];

            let table = 
            `
                <tr>
                <th scope="row">${value.id}</th>
                <td>${value.nev}</td>
                <td>${value.eletkor}</td>
                <td>${value.fajta}</td>
                <td>${value.gazda_neve}</td>
                </tr>
            
            `
            tables+= table
        }

        document.getElementById("tbody").innerHTML=tables;
    }
        
   

})