const arr = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ]
];
window.onload = () => {
    let table = document.getElementById('myTable'),
        selectedTd;
    for(let i = 0; i < arr.length-1;i++ ){
        let newRow = table.insertRow(i);
        for(let z= 0; z <= arr[i].length-1; z++){
            newRow.insertCell(z).innerHTML = arr[i][z];
        }
    }
    let tr = document.getElementsByTagName('tr');
    // console.log(tr);
    tr.onclick = (event)=> {
        console.log(22222, event.target);
        event.target.classList.add('light-blue');
    }
    table.onclick = (event) => {
        let target  = event.target;
        if(target.tagName === 'TD'){
            select(target);
        } else if(target.tagName === 'TR'){
            console.log(1111);
        }
    };

    const select = (td) => {
        if(selectedTd){
            selectedTd.classList.remove('selected');
        }
        selectedTd = td;
        selectedTd.classList.add('selected');
    }
};