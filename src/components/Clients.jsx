import { clients } from "../constants";
import styles from "../style";

const Clients = () => (

  <div className={`flex md:flex-row flex-col justify-around items-center md:mt-8 mt-0`}>
      {
        clients.map((client)=>(
          <img className="md:w-[192px] w-[190px]  md:mb-0 mb-5" src={client.logo} alt="" />
        ))
      }
  </div>

);

export default Clients;

