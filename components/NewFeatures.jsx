import styles from '../styles';

const NewFeatures = ({ title, imgUrl, subtitle }) => (
  <div className=" flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] ">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] mb-5 bg-[#323F5D]`}
    >
      <img src={imgUrl} alt={title} className=" h-[35px]" />
    </div>
    <h2 className=" font-serif text-[20px] text-white mb-2"> {title}</h2>
    <p className=" font-mono text-slate-500">{subtitle}</p>
  </div>
);

export default NewFeatures;
