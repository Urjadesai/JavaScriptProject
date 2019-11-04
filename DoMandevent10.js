// add a event listener to the button


// save_Data.addEventListener('click', save_info);

// function save_info(){
//     let f_name = document.getElementById('f_name');
//     let save_Data = document.getElementById('save_Data');
//      let Viewdiv = document.getElementById('Viewdiv');
//     let new_info = document.createElement('p');
//     let new_node = document.createTextNode(f_name.value)
//     console.log(f_name)
//     console.log(new_node)
//      new_info.innerText = f_name.value;
//     console.log(new_info);

//     //Viewdiv.appendChild(new_info);
//     console.log(Viewdiv)


// }
function formandview()
{
    
    let FormView1 = document.getElementById('FormView1');
    let FormView2 = document.getElementById('FormView2');
    let FormView3 = document.getElementById('FormView3');
    let FormView4 = document.getElementById('FormView4');
    let FormView5 = document.getElementById('FormView5');
    let save_Data = document.getElementById('save_Data');

    let Viewdiv = document.getElementById('Viewdiv');
   
    let storedata = document.createElement('p');
    let newval1 = document.createTextNode(FormView1.value);
    console.log(FormView1);
    console.log(newval1);
    storedata.innerHTML = FormView1.value;
    FormView1.value="";
    console.log(storedata);
    Viewdiv.appendChild(storedata);
    
    
    let storedata1 = document.createElement('p');
    let newval2 = document.createTextNode(FormView2.value);
    console.log(FormView2);
    console.log(newval2);
    storedata1.innerHTML = FormView2.value;
    FormView2.value = "";
    console.log(storedata1);
    Viewdiv.appendChild(storedata1);
        
    
    if(FormView3.checked == true)
    {
    let storedata2 = document.createElement('p');
    let newval3 = document.createTextNode(FormView3.value);
    console.log(FormView3);
    console.log(newval3);
    storedata2.innerHTML = FormView3.value;
    FormView3.value = "";
    console.log(storedata2);
   // Viewdiv.appendChild(storedata2);
    }
    
    else
    {
        let storedata3 = document.createElement('p');
        let newval4 = document.createTextNode(FormView4.value);
        console.log(FormView4);
        console.log(newval4);
        storedata3.innerHTML = FormView4.value;
        FormView4.value = "";
        console.log(storedata3);
        //Viewdiv.appendChild(storedata3);
    
    }
   
    let storedata4 = document.createElement('p');
    let newval5 = document.createTextNode(FormView5.value);
    console.log(FormView5);
    console.log(newval5);
    storedata4.innerHTML = FormView5.value;
    console.log(storedata4);
   // Viewdiv.appendChild(storedata4);


    console.log(Viewdiv);
    
    
    let editbutton = document.getElementById("editbutton").value;
    document.getElementById(" ").innerHTML = (editbutton);
    
   
   
  
    
      
}




