import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const Footer = () => {
  return (
    <div classNameName="container">
      <footer className=" footern text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/theeagle58"
              role="button"
            >
              <FacebookIcon color="success">FB</FacebookIcon>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/Mamo23549442"
              role="button"
            >
              <TwitterIcon color="success"></TwitterIcon>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/a7med58"
              role="button"
            >
              <GitHubIcon color="success"></GitHubIcon>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/ahmed_ragab_58/"
              role="button"
            >
              <InstagramIcon color="success"></InstagramIcon>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/Mamo23549442"
              role="button"
            >
              <TwitterIcon color="success"></TwitterIcon>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="text-center p-3">
          © 2023 Copyright:
          <a className="text-white" href="https://a7med-ragab.blogspot.com/">
            Ahmed Ragab
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
