import Navbar from "../components/Navbar";
import AIBomp from "../components/AIBomp";
import MastoPFP from "../components/MastoPFP";

const Home: Component<{}, {}> = function () {
  return (
    <div>
      <Navbar currentPage="home" />
      <h1>hi, i'm thememesniper</h1>
      <h3>programmer, linux user, nutjob.</h3>
      <MastoPFP />

      <h3 id="quote"></h3>
      <noscript>
        <h3>"My boy! No JS is what all true warriors strive for."</h3>
      </noscript>
      <br />
      <div>
        <button class="card" onclick="quoteReroll()">
          90% of gamblers
        </button>
      </div>
      <br />
      <div aria-label="links">
        <a href="https://wetdry.world/@thememesniper" rel="me" class="card">
          Mastodon
        </a>
        <a
          href="https://github.com/TheMemeSniper/website"
          rel="me"
          class="card"
        >
          Source?
        </a>
      </div>
      <br />
      <h1>testimonials</h1>

      <div class="testimonials">
        <div class="testimony">
          <img
            style="
            height: 5px;
            width: 100%;
            line-height: 0;
            display: inline;
            max-height: 5%;
          "
            src="images/stupidcat.webp"
            alt="really stretched out limineow"
          />
          <p>-limineow grimgreen</p>
        </div>
        <div class="testimony">
          <h4>awsum bocchi the rock enjoyer</h4>
          <p>-micr0 wetdry</p>
        </div>
        <div class="testimony">
          <h4>solid 7/10, high quality brainrot</h4>
          <p>-doskel doskel</p>
        </div>
        <div class="testimony">
          <h4>silly</h4>
          <p>
            -micro...
            <img
              src="images/peggle2.webp"
              alt="very, very small gif of the peggle 2 guy"
            />
          </p>
        </div>
        <div class="testimony">
          <h4>
            thememesniper has helped my team and I stay on the same page.
            Previously, we were all over the board. Using thememesniper has
            definitely saved us time and money.
          </h4>
          <p>-millions wetdry</p>
        </div>
      </div>

      <h1>The joyous buttons and other trinkets</h1>
      <div
        style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1ch;
        flex-wrap: wrap;
      "
      >
        <a href="https://thememesniper.dev" target="_blank">
          <img
            src="/images/88x31.png"
            alt="k8's corner"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
        <a href="https://coolelectronics.me" target="_blank">
          <img
            src="https://coolelectronics.me/ce88x31.png"
            alt="velzie"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
        <a href="https://micro.pages.gay" target="_blank">
          <img
            src="https://git.gay/Micro/pages/raw/branch/main/src/assets/images/standard/niko%C2%B9.png"
            alt="Micro"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
        <a href="https://jack.cab" target="_blank">
          <img
            src="/images/buttons/jack.png"
            alt="Jack.cab"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
        <a
          href="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/"
          target="_blank"
        >
          <img
            src="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/people/760ceb3b9c0ba4872cadf3ce35a7a494.png"
            alt="760ceb3b9c0ba4872cadf3ce35a7a494's website"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
        <a href="https://split.pet/" target="_blank">
          <img
            src="/images/buttons/split.png"
            alt="split's website"
            decoding="async"
            height="31"
            width="88"
            style="image-rendering: pixelated"
          />
        </a>
      </div>
      <p>
        if we're mutuals on fedi ask me to add your button/testimony here! also
        tell me if you want your button image hotlinked or not
      </p>
      <script src="scripts/quotes.js"></script>

      <AIBomp />
    </div>
  );
};

export default Home;
