
function Card({children, color}: {children: any, color: string}){
  const style = {
    backgroundColor: color,
    padding: '10px',
    margin: '10px',
    borderColor: 'black',
    borderRadius: '3px',
    borderWidth: '2px',
  }
  return (
    <div style={style}>{children}</div>
  )
}

export default Card