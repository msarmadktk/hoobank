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


// <section className={`${styles.flexCenter} my-4`}>
// <div className={`${styles.flexCenter} flex-wrap w-full`}>
//   {clients.map((client) => (
//     <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
//       <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
//     </div>
//   ))}
// </div>
// </section>