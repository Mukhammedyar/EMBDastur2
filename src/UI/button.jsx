function Button({className, onClick, children, disabled}) {
  return (
    <button
        className={`${className} backdrop-blur-md rounded-sm px-3 py-1 text-sm `}
        onClick={onClick} disabled={disabled}>
            {children}
    </button>
  )
}

export default Button