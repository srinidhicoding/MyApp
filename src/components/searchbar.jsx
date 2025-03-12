

const SearchBar=()=>{

    return (
        <header className="flex justify-between items-center mt-8 w-[100%]">
         <div className="flex gap-3 items-center w-[425px]  rounded-full h-[50px]  bg-[#fcfaf5] ml-2 opacity-90">
          <i className="ri-search-2-line text-xl pl-3 flex items-center justify-center "></i>
          <p className="text-sm font-segeo font-semibold opacity-80 -mt-1">Search here</p>
         </div>
         <div className="flex gap-4 items-center pr-0">
          <i className="ri-notification-line text-lg"></i>
          <div className="h-11 w-11 bg-stone-200 rounded-full flex justify-center items-center text-center  -pr-3">
            <i className="fa-regular fa-user text-2xl"></i></div>
         </div>
   </header>
    )
}

export default SearchBar