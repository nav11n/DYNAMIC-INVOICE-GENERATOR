const d= new Date();
document.getElementById("date").innerHTML=d;
var sum=0;
const prod=document.getElementById("product");
const pri=document.getElementById("price");
const quan=document.getElementById("quantity");
const fin=document.getElementById("final");
const tot=document.getElementById("total");

var prival;
var pval;
var qval;
function add(){
   
     pval=prod.value;
      prival=pri.value;
     qval=quan.value;
    let tr=document.createElement("tr");
    tr.innerHTML+="<tr><td style='padding-left:40px'>"+pval+"</td>"+"<td>"+qval+"</td>"+"<td>"+prival+"</td></tr>";
    tr.id="tablerow";
    total();
    prod.value="";
    pri.value="";
    quan.value="";
    fin.appendChild(tr);
    console.log("added");
}

function total(){
    sum+=Number(prival)*Number(qval);
    tot.innerHTML="<b>Total Price:  "+sum+"</b>";
}