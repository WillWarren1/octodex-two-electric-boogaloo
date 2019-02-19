import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
      <body>
        <section class="menu-gray">
          <img
            class="githublogo"
            src="/images/githublogo.png"
            alt="github logo"
          />
          <nav>
            <ul>
              <li>RSS</li>
              <li>FAQ</li>
              <li>Back to GitHub</li>
            </ul>
          </nav>
        </section>
        <main>
          <figure>
            <a href="https://octodex.github.com//justicetocat">
              <div class="triangle" />
              <img src="/images/justicetocat.jpg" alt="justicetocat" />
            </a>
            <figcaption>
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//justicetocat">
                Justicetocat
              </a>
              by
              <a href="https://github.com/heyhayhay">
                <img class="authorpic" src="https://github.com/heyhayhay.png" />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com//suftocat">
              <img src="/images/surftocat.png" alt="surftocat" />
            </a>
            <figcaption class="weird2">
              the
              <a class="cattitle" href="https://octodex.github.com//suftocat">
                Surftocat
              </a>
              by
              <a href="https://github.com/jeejkang">
                <img class="authorpic" src="https://github.com/jeejkang.png" />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com//murakamicat">
              <img src="/images/murakamicat.png" alt="murikamicat" />
            </a>
            <figcaption>
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//murakamicat">
                Murikamicat
              </a>
              by
              <a href="https://github.com/billyroh">
                <img class="authorpic" src="https://github.com/billyroh.png" />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com//vinyltocat">
              <img src="/images/vinyltocat.png" alt="vinyltocat" />
            </a>
            <figcaption class="weird2">
              the
              <a class="cattitle" href="https://octodex.github.com//vinyltocat">
                Vinyltocat
              </a>
              by
              <a href="https://github.com/suziejurado">
                <img
                  class="authorpic"
                  src="https://github.com/suziejurado.png"
                />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com//luchadortocat">
              <img src="/images/luchadortocat.png" alt="luchadortocat" />
            </a>
            <figcaption class="weird">
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//luchadortocat">
                Luchadortocat
              </a>
              by
              <a href="https://github.com/jeejkang">
                <img class="authorpic" src="https://github.com/jeejkang.png" />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com/strongbadtocat">
              <img src="/images/strongbadtocat.png" alt="strongbadtocat" />
            </a>
            <figcaption class="weird">
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//strongbadtocat">
                Strongbadtocat
              </a>
              by
              <a href="https://github.com/cameronmcefee">
                <img
                  class="authorpic"
                  src="https://github.com/cameronmcefee.png"
                />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com/adventure-cat">
              <img src="/images/adventure-cat.png" alt="adventure-cat" />
            </a>
            <figcaption>
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//strongbadtocat">
                Adventure-Cat
              </a>
              by
              <a href="https://github.com/jonrohan">
                <img class="authorpic" src="https://github.com/jonrohan.png" />
              </a>
            </figcaption>
          </figure>

          <figure>
            <a href="https://octodex.github.com//daftpunktocat-thomas">
              <img
                src="/images/daftpunktocat-thomas.gif"
                alt="daft punk octocat"
              />
            </a>
            <figcaption>
              the
              <a
                class="cattitle"
                href="https://octodex.github.com//daftpunktocat-thomas">
                Daftpunktocat-Thomas
              </a>
              by
              <a href="https://github.com/jeejkang">
                <img class="authorpic" src="https://github.com/jeejkang.png" />
              </a>
            </figcaption>
          </figure>
        </main>

        <footer>
          <section class="stuff">RSS FAQ</section>
          <img class="lilcat" src="/images/lilcat.png" alt="little cat" />
          <section class="stuff">
            © 2013 – 2019 GitHub, Inc. All rights reserved
          </section>
        </footer>
      </body>
    )
  }
}

export default HelloWorld
