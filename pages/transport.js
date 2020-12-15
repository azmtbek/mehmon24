import CardInfoPicy from "../components/CardInfoPicy";
import ButtonGroup from "../components/ButtonGroup";
import LayoutSecondary from "../components/LayoutSecondary";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
function transport() {
  return (
    <LayoutSecondary>
      <Carousel>
        <p className="text-body">Samolyot</p>
        <p>
          <Button text="Batafsil" />
        </p>
      </Carousel>
    </LayoutSecondary>
  );
}

export default transport;
