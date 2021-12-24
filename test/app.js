let number=0

document.querySelector('button').addEventListener('click',function(){
     
    number+=1
    
    document.querySelector('h1').innerHTML=number
})