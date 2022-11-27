const todoform=document.getElementById('todo-form');
const button=document.getElementById('delete_btn');
const displayItem=document.getElementById('display_item');



const categoryFilter=document.getElementById('product-dropdown');
let currentFilter = "";
let  gadgetArr=JSON.parse(localStorage.getItem("gadget"));



if (!gadgetArr) {
    gadgetArr = []; 
}

display(gadgetArr);




categoryFilter.addEventListener("click", (e) => {
    e.preventDefault();
  currentFilter = e.target.innerText;

  let filterCategory = gadgetArr;
  if (currentFilter === "Headphones") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "headphone");
  } else if (currentFilter === "Laptops") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "laptop");
  } else if (currentFilter === "Mobiles") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "Mobile");
  }else if (currentFilter === "Tablets") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "Tablets");
  }
   

  if(currentFilter === "All"){
    display(gadgetArr);
  }else{
  display(filter);
  }
});

todoform.addEventListener('submit',(e)=>{
    e.preventDefault();

    let imageUrl=e.target.image_url.value;
    let gadgetCategpry=e.target.gadget_category.value;

    gadgetArr.push({imageUrl,gadgetCategpry,id:Date.now()});

    localStorage.setItem("gadget",JSON.stringify(gadgetArr))

    console.log(gadgetArr)

    imageUrl="";
    gadgetCategpry="";
    e.target.image_url.value="";

    display(gadgetArr);

})



function display(gadgetArr){

    const displayItem=document.getElementById('display_item');
    displayItem.innerHTML="";
  
    if(!gadgetArr)return;   

    gadgetArr.map((val)=>displayItem.innerHTML+=(`<div><img id="${val.id}" class="image" src="${val.imageUrl}" alt="image loading..."> <br><br><button class="delete_btn">Delete</button><div>` ))
  }


displayItem.addEventListener('mouseover', ()=>{
   
    const delete_row=document.querySelectorAll('.delete_btn');

    console.log(delete_row);
    
    for(let i=0; i<delete_row.length;i++){

        delete_row[i].addEventListener('click', function() {

          this.parentNode.remove();
          gadgetArr.splice(i,1);
          localStorage.setItem("gadget",JSON.stringify(gadgetArr));
        
        })

      }
    
  })