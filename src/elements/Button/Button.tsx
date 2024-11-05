"use client"
const Button = () => {
  return (
    <button className="bg-red-600 p-2 rounded-sm " onClick={()=> {console.log('Button clicked');
    }}>
    Logout
    </button>
  )
}

export default Button
