// import GreenChoicesSection from './greenChoicesSection'


const GreenChoicesSection = () => {
  return (
    <>
    <div className="w-full h-screen hidden  lg:flex justify-center items-center md:p-2 lg:p-8">
      <img
        src="/section2/section2LargeScreen.svg"
        alt="Section 2"
        className="w-[90%] h-[90%]"
      />
    </div>
    <div className="w-full flex-col h-[200%] hidden  md:flex justify-center p-4 items-center">
    <img
      src="/section2/mediumScreenSection2.svg"
      alt="Section 2"
      className="w-full h-[40%]"
    />
        <img
      src="/section2/mediumScreenSection2b.svg"
      alt="Section 2"
      className="w-full h-[40%]"
    />
    
    
  </div>

  {/* Phone View */}
  <div className="w-full  p-2 md:hidden">
  </div>
  {/* <div className="w-full bg-green-300  flex-col h-[100%] md:hidden flex-col justify-center "> */}
 
    <img
      src="/section2/smallScreenSection2b.svg"
      alt="Section 2A"
      className="w-full h-full md:hidden "
    />
    
    

  </>
  );
};

export default GreenChoicesSection
