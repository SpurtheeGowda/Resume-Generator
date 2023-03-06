function addNewWEfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewaqfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

function addNewwecfield(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wecField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let wecOb=document.getElementById("wec");
    let wecAddButtonOb=document.getElementById("wecAddButton");

    wecOb.insertBefore(newNode,wecAddButtonOb);
}

//generate resume
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    
    document.getElementById("pT").innerHTML=document.getElementById("projectField").value;
    document.getElementById("aqT").innerHTML=document.getElementById("academicField").value;

    document.getElementById("wcT").innerHTML=document.getElementById("workField").value;
    document.getElementById("skT").innerHTML=document.getElementById("skillField").value;

    let file=document.getElementById('imgField').files[0]
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById('imgTemplate').src=reader.result;
    }
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';


}
//printing resume
function printCV(){
    window.print();
}

