import { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { articles, headlines } = props;
  return (
    <Fragment>
      <main role="main" className="container">
        <Row>
          <Col md={8}>
            <Slider {...settings}>
              {headlines.map((headline) => {
                return (
                  <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                      <Link href={`article/${headline.seo_title}`}>
                        <h1 className="display-4 font-italic">
                          {headline.title}
                        </h1>
                      </Link>
                      <p className="lead my-3">
                        Multiple lines of text that form the lede, informing new
                        readers quickly and efficiently about what’s most
                        interesting in this post’s contents.
                      </p>
                      <p className="lead mb-0">
                        <a href="#" className="text-white font-weight-bold">
                          Continue reading...
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {articles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                >
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      {article.category_title}
                    </strong>
                    <Link href={`article/${article.seo_title}`}>
                      <h3 className="mb-0">{article.title}</h3>
                    </Link>
                    <div className="mb-1 text-muted">
                      {article.published_at}
                    </div>
                    <p className="card-text mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <Image
                      src={article.image}
                      width={200}
                      height={200}
                      alt={
                        article.image_caption !== ""
                          ? article.image_caption
                          : article.title
                      }
                    />
                  </div>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <h3 className="pb-4 mb-4 font-italic border-bottom">
              Berita Populer
            </h3>
          </Col>
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
              From the Firehose
            </h3>

            <div className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This blog post shows a few different types of content that’s
                supported and styled with Bootstrap. Basic typography, images,
                and code are all supported.
              </p>
              <hr />
              <p>
                Yeah, she dances to her own beat. Oh, no. You could've been the
                greatest. 'Cause, baby, <a href="#">you're a firework</a>. Maybe
                a reason why all the doors are closed. Open up your heart and
                just let it begin. So très chic, yeah, she's a classic.
              </p>
              <blockquote>
                <p>
                  Bikinis, zucchinis, Martinis, no weenies. I know there will be
                  sacrifice but that's the price.{" "}
                  <strong>This is how we do it</strong>. I'm not sticking around
                  to watch you go down. You think you're so rock and roll, but
                  you're really just a joke. I know one spark will shock the
                  world, yeah yeah. Can't replace you with a million rings.
                </p>
              </blockquote>
              <p>
                Trying to connect the dots, don't know what to tell my boss.
                Before you met me I was alright but things were kinda heavy. You
                just gotta ignite the light and let it shine. Glitter all over
                the room <em>pink flamingos</em> in the pool.{" "}
              </p>
              <h2>Heading</h2>
              <p>
                Suiting up for my crowning battle. If you only knew what the
                future holds. Bring the beat back. Peach-pink lips, yeah,
                everybody stares.
              </p>
              <h3>Sub-heading</h3>
              <p>
                You give a hundred reasons why, and you say you're really gonna
                try. Straight stuntin' yeah we do it like that. Calling out my
                name. ‘Cause I, I’m capable of anything.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                Before you met me I was alright but things were kinda heavy. You
                just gotta ignite the light and let it shine.
              </p>
              <h3>Sub-heading</h3>
              <p>
                You got the finest architecture. Passport stamps, she's
                cosmopolitan. Fine, fresh, fierce, we got it on lock. Never
                planned that one day I'd be losing you. She eats your heart out.
              </p>
              <ul>
                <li>Got a motel and built a fort out of sheets.</li>
                <li>Your kiss is cosmic, every move is magic.</li>
                <li>Suiting up for my crowning battle.</li>
              </ul>
              <p>
                Takes you miles high, so high, 'cause she’s got that one
                international smile.
              </p>
              <ol>
                <li>Scared to rock the boat and make a mess.</li>
                <li>I could have rewrite your addiction.</li>
                <li>I know you get me so I let my walls come down.</li>
              </ol>
              <p>After a hurricane comes a rainbow.</p>
            </div>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">
                Older
              </a>
              <a
                className="btn btn-outline-secondary disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Newer
              </a>
            </nav>
          </div>

          <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                Saw you downtown singing the Blues. Watch you circle the drain.
                Why don't you let me stop by? Heavy is the head that{" "}
                <em>wears the crown</em>. Yes, we make angels cry, raining down
                on earth from up above.
              </p>
            </div>

            <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
                </li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </Row>
      </main>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/v1/articles");
  const articles = await res.json();

  const get_headlines = await fetch(
    "http://localhost:3000/api/articles/get_headlines"
  );
  const headlines = await get_headlines.json();

  if (!articles)
    return {
      notFound: true,
    };

  return {
    props: {
      articles: articles.data,
      headlines,
    },
  };
}
