
function couleursValide(proposition){
   const couleurs =['bleu', 'jaune', 'violet', 'rouge'];
   console.log(couleurs)
   const propositionUsers = proposition.split('')
   if (propositionUsers === couleurs){
    return true
    //console.log(true)
   }
else{
    return false
   //console.log(false)
}

}
propositionUsers= "bleu jaune violet rouge";
const estValide = couleursValide(propositionUsers)
console.log(estValide)



 