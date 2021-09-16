export default function ShowData({data})
{
    console.log({data,x:"kashish"});
    
    return <>
    {
    data.map(({name,email,gender,file,id})=><div key={id}>
        {console.log({file})}
        <p>{name}</p>
        <p>{email}</p>
        <p>{gender}</p>
        <img src={file}/>
    </div>)
    }
    </>
}