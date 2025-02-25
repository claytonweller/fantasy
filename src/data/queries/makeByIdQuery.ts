export const makeByIdQuery = <T>(arr: (T & {id:string})[]) =>{
  const obj = arr.reduce((prev, a)=>{
    return {...prev, [a.id]: a}
  }, {} as {[id: string]: T})
  return obj
} 