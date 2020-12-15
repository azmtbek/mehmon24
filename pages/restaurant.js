import CardInfoPicy from "../components/CardInfoPicy";
import ButtonGroup from "../components/ButtonGroup";
import LayoutMain from "../components/LayoutMain";
import Carousel from "../components/Carousel";
function restaurant() {
  return (
    <LayoutMain>
      <Carousel>
        <div className="text-title">
          Sizni qulay va maroqli hordiq kutmoqda!
        </div>
      </Carousel>
      <ButtonGroup />
      <CardInfoPicy />
      <CardInfoPicy left="true" />
      <CardInfoPicy />
    </LayoutMain>
  );
}

export default restaurant;
