
interface Props{
  children: string;
  // color?= 'primary'|'secondary' | 'danger'; instead set as string premit set de options.
  color: string;
  onClick: () => void; 
}

const Button = ({children, color, onClick }: Props) => {
  return(
    <button 
    type="button" 
    className={'btn btn-' + color} 
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;