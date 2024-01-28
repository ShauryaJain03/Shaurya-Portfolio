import { Oval } from "react-loader-spinner";
function Loader() {
    return (
      <div className="flex items-center justify-center h-dvh w-dvw">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="aqua"
          secondaryColor="blue" 
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
}

export default Loader
