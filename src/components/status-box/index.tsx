import Image from "next/future/image";
import style from "./status-box.module.scss";

interface Props {
  status: string;
  title: string;
  number: number;
}

const StatusBox = ({ status, title, number }: Props) => {
  return (
    <div className={`${style.Container} ${style[status]}`}>
      <div>
        <Image
          className={`img-fluid ${style.Icon}`}
          src={`/images/icons/dashboard/${status}.svg`}
          width="22"
          height="22"
          alt=""
        />
        <p className={style.Title}>{title}</p>
      </div>
      <span className={style.Number}>{number}</span>
    </div>
  );
};

export default StatusBox;
