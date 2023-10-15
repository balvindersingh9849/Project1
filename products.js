
fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
      <tr>
      <td>${product.name}</td>
      <td>${product.stock}</td>
      <td>${product.quantity}</td>
      <td>${product.size}</td>
      <td>${product.color}</td>
   </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});