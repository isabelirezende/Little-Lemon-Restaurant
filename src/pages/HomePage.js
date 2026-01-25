import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

function HomePage(){
    return(
        <main>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <Chicago/>
        </main>
    );
}
export default HomePage;