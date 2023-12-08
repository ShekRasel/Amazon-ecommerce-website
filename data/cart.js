export const cart=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  name:"Black and Gray Athletic Cotton Socks - 6 Pairs"
},{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  name:"Intermediate Size Basketball"
}];

export function addToCart(productId){
    let matchingItem;
        cart.forEach((cartItem)=>{
          if(productId===cartItem.productId){
            matchingItem=cartItem;
          }
        })
        if(matchingItem){
          matchingItem.quantity+=1;
        }else{
          cart.push({
            productId : productId,
            quantity : 1
          });
        };
   };
  