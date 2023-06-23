import ImageTitle from "../components/imags/Image 31.png";
const MainTitle = () => {
  return (
    <div className='container py-5'>
      <div className='row  mt-5'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h1 className='text-center mb-4 main__text'>Main Title</h1>
          <p className="main__paragraph">
            When you hear news about artificial intelligence (AI), it might be easy to assume it
            has nothing to do with you.
            You might imagine that artificial intelligence is only something the big tech giants
            are focused on,
            and that AI doesn't impact your everyday life. In reality, artificial intelligence is
            encountered by most people from morning until night.
            Here are 10 of the best examples of how AI is already used in our everyday lives.
          </p>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <img src={ImageTitle} alt="Image_31.png" style={{ height: "100%" }} />
        </div>
      </div>
    </div>
  )
}

export default MainTitle
