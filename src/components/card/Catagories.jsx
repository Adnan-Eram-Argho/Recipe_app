/* eslint-disable react/prop-types */


function Catagories({catagorie}) {
  return (
    <div className="px-5 py-3 border rounded-lg">
      <h1 className="text-center">{catagorie?.title}</h1>
    </div>
  )
}

export default Catagories
