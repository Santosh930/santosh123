let API='https://fakestoreapi.com/products';
let container=document.getElementById("items");

const getData= async(url)=>{
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    append(data,container);
    

}
getData(API);
// console.log(getData(API));
const append=(data,container)=>{
    data.map((el)=>{
        let div=document.createElement('div');
        
        let p=document.createElement('p');
        p.innerText=el.title;
        let img =document.createElement('img');
        img.src=el.image;
        let h3=document.createElement('h3');
        h3.innerText=el.category;
        let h4=document.createElement('h4');
        h4.innerText=`$ ${el.price}`;
        let btn=document.createElement('button');
        btn.innerText='Add To Cart';
        btn.className='santosh';
        let btn1=document.createElement('button');
        btn1.innerText='Buy Now';
        btn1.className='santosh';
        div.append(img,p,h3,h4,btn1,btn);
        container.append(div);

    })

}
