export function makeSearchableText(setSearchText: React.Dispatch<React.SetStateAction<string>>){
  return (text: string)=> <SearchableText setSearchText={setSearchText}>{text}</SearchableText>
}

export function SearchableText(params:{children: string, setSearchText: React.Dispatch<React.SetStateAction<string>>}){
  const {children:text, setSearchText} = params
  return (<span 
    style={{textDecoration:'underline', cursor: 'pointer'}} 
    onClick={()=>{
      console.warn(text)
      setSearchText(text)
    }}
  >{
    text
  }</span>)
}