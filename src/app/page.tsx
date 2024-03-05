import ResponsiveNav from "./responsiveNav"


// const fetchData = async ()=>{
//   try {
//     const res = await fetch(`http://localhost:3000/api/todos/1`)
//     if(!res.ok){
//       return new Error('Failed to fetch todos')
//     }


//     const result = res.json()
//     return result
    
    
//   } catch (error) {

//     console.log(error)
    
//   }
// }









// let data = {
//   name:"Saud ",
//   email:"saud@gmail.com"
// }
// console.log(JSON.stringify(data))


// const fetchSingnup = async ()=>{
//   try {
//     const res = await fetch(`http://localhost:3000/api/singnup`,{
//       method:'POST',
//       body:JSON.stringify(data)
//     })
//     if(!res.ok){
//       return new Error('Failed to fetch todos')
//     }

//     const result = res.json()
//     return result
    
    
//   } catch (error) {

//     console.log(error)
    
//   }
// }











const fetchNavItems = async ()=>{
  try {
    const res = await fetch(`http://localhost:3000/api/navitems`,{cache:'no-store'})
    console.log(res.ok)
    if(!res.ok){
      return new Error('Failed to fetch Nav items')
    }
    const result = res.json()
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

}








export default async function Home() {


  // const {todos} = await fetchData()
  // console.log(todos)






  // const ress = await fetchSingnup()
  // console.log(ress)




  let navItems = await fetchNavItems()
  console.log("NavItem from Home: ",navItems)
  




  return (
    <>
      <ResponsiveNav data = {navItems}/>
    </>
  );
}
