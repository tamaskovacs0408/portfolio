import "./index.scss";
// import LogoTK from "../../Assets/Images/Tk_logo_svg.svg";
import Loader from "react-loaders";

const Home = () => {
  return (
    <>
      <div className="home__container">
        <div className="welcome_container">
          <h1 className="text-animate">
            Welcome,
            <br />
            my name is <br />
            <span id="letter_T">T</span>amas!
          </h1>
          <span id="title">FRONTEND DEVELOPER</span>
        </div>
        <div className="logo_container">
          <p className="photo_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maxime placeat tempore rerum a amet illum quae consequuntur doloremque expedita cupiditate fugit eos vitae perspiciatis optio architecto illo, asperiores dolore.
            Expedita cumque incidunt culpa itaque consequuntur voluptas vitae ad quasi vero obcaecati, illum, inventore qui tenetur! Quos, enim voluptatibus mollitia nesciunt, est et harum ut repellat non recusandae veritatis voluptate.
            Accusamus, illum, blanditiis debitis eius rerum nam voluptates similique sit fugiat reprehenderit veniam officiis iste. Voluptatem aspernatur quisquam quas rem quia tempore similique porro voluptate commodi, officiis at aliquam odio.
            Cum iusto eum debitis laborum! Perspiciatis, ea laborum animi illo voluptatibus ipsam molestiae aliquam eligendi dolor accusamus reprehenderit nemo facere voluptas, eos exercitationem eveniet ex tenetur repellat dolorem a nesciunt!
            Ullam eaque sed temporibus accusamus similique, error est repudiandae molestias hic cumque ipsum a provident, saepe, dolore obcaecati! Nobis quia libero corporis sit incidunt tenetur quod! Quaerat corrupti vel eos.
            Animi libero ex ducimus ipsam voluptatum laborum reprehenderit nobis rem distinctio quisquam est quibusdam enim facere, alias modi esse at laudantium dicta accusantium deleniti voluptas? Facere quibusdam dolor repellendus ipsam.
            Inventore harum eius adipisci sequi vel, alias iure, unde mollitia sed illo ex, fuga pariatur fugiat animi ullam autem provident ea voluptatem magni modi accusantium aspernatur reprehenderit? Iusto, sunt reprehenderit?
            A mollitia, error expedita similique tempore eveniet repellat ut voluptatibus cumque exercitationem animi perspiciatis dignissimos quod officia ex distinctio magni, ipsam est illum, cum incidunt aspernatur! Libero possimus beatae nemo!
            Corrupti obcaecati doloribus aut quis reprehenderit, ipsam alias doloremque beatae, ipsum commodi dignissimos voluptatem temporibus labore repellendus sit, dolorum eaque at suscipit! Adipisci sequi ducimus aliquid. Aspernatur atque amet ab.
            Hic provident, cum, impedit consectetur aut, fugit beatae aperiam doloribus eius quasi sint dolor molestias perspiciatis suscipit esse tempore assumenda dolorem officia tenetur? Nihil inventore, natus porro nobis fugit.
          </p>
          {/* <img className="logo_tk" src={LogoTK} alt="logo" /> */}
        </div>
      </div>
      <Loader type="ball-scale-ripple-multiple"/>
    </>
  );
};

export default Home;
