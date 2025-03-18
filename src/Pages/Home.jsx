
import HomeHeroSlider from '../Components/HomeHeroSlider';
import SectionTitle from '../ReusableComponent/SectionTitle';
import HomeCategory from '../Components/HomeCategory';
import HomeReadyForOrder from '../Components/HomeReadyForOrder';
import FeatureBanner from '../Components/FeatureBanner';
const Home = () => {
  return (
    <div>
      <HomeHeroSlider />
      <SectionTitle heading='Browse by Category' text='Get your desired product from featured category' />
      <HomeCategory />
      <SectionTitle heading='Ready For Order 🔥' text='New Arrival Product are Ready for your order'/>
      <HomeReadyForOrder/>
      <FeatureBanner/>
    </div>
  );
};

export default Home;
