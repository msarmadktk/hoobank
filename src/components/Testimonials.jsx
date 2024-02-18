import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingX} ${styles.flexCenter} flex-col relative `}>
    <div className={`flex md:flex-row flex-col justify-between `}>
      <h2 className={`${styles.heading2} md:leading-[75px] leading-[50px] max-w-[570px] ]`}>What people are saying about us</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className={`flex md:flex-row flex-col`}>
        {
          feedback.map((feedbacks , index)=>(
            <FeedbackCard key={feedbacks.id} content = {feedbacks.content} name ={feedbacks.name} title = {feedbacks.title} img = {feedbacks.img} />
          ))
        }
        
    </div>

  </section>
);

export default Testimonials;
