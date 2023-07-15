import { SectionContainer, OneColumn, TwoColumn } from "./featureStyle";
import LapTop from "../../assets/images/laptop.jpg";

export default function Feature() {
  return (
    <SectionContainer>
      <OneColumn>
        <img src={LapTop} alt="Imagem laptop" />
      </OneColumn>
      <TwoColumn>
        <h3>Data analytics dashboard</h3>
        <h1>Manage Data Analytics Centrally</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          debitis provident vel quidem temporibus ex voluptas libero illo unde
          architecto laboriosam ut ab molestiae, tempore consequatur reiciendis
          quod dignissimos assumenda.
        </p>
        <button>Get Started</button>
      </TwoColumn>
    </SectionContainer>
  );
}
