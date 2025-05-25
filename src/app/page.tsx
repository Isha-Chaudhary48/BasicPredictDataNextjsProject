export default function Home() {
  return (
    <>
      <div className="flex  items-center  justify-center h-[100vh] w-[100vw] ">
        <div className=" bg-black text-white h-[300px] w-[600px] flex justify-center items-center flex-col gap-6 rounded-md">
          <div className="text-xl">Enter Your Name</div>
          <form action="">
            <input
              className="p-2 text-center rounded-l-md"
              type="text"
              placeholder="Type Your Name..."
            />
            <button className="bg-blue-400 rounded-r-md p-2">
              Predict Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
