
function Message() {
    const nameUser = 'Ingrid';
    console.log(nameUser);
    if(nameUser)
      return <h1>Hello {nameUser}</h1>;
    return <h1>Hello World</h1>
}

export default Message;