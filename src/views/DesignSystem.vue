<template>
  <div class="system-wrapper" >
    <div class="system-header" id="top">
      <h1>Design System</h1>
    </div>

    <!-- <div class="system-section">
      <h2>Buttons</h2>
    </div>
    <div class="system-section">
      <h2>Colors</h2>
    </div>
    <div class="system-section">
      <h2>Typography</h2>
    </div> -->
    <p>This fluid design system aims at documenting and sharing the style guidelines and component library of this personal portfolio website.</p>
    <!-- Accessibility -->
    <accordion class="acc-wrapper">
      <template v-slot:title>
        <h3 class="acc-title">Accessibility</h3>
      </template>
      <template v-slot:content>
        <div class="col-content-wrapper">
          <h4>Color Contrast</h4>
          <p>Low color contrast with text can be a problem in readability for people with low vision or color blindness. This creates a problem for people with low vision or color blindness but also negatively affects the reading experience for all users. This is why I made sure to align the color palette to meet WCAG AA standards (4.5:1 for text, 3:1 for icons) to increase usability and reduce this frustration.</p>
          <div class="rule-thin"></div>
          <h4>Font Size</h4>
          <p>Even with high color contrast, Small text can still be challenging to read for people with low vision. Larger text sizes have been adopted throughout with a minimum size of 16px.</p>
          <div class="rule-thin"></div>
          <h4>Icons Explainer Text</h4>
          <p>Icons are efficient tools for communicating large ideas quickly to users. However, sometimes we take for granted that the intended meaning of an icon is understood by all users. But that isn't always the case. For that reason, I've made sure that every icon in use has accompanied explainer text on default or hover state.</p>
        </div>
      </template>
    </accordion>

    <!-- Buttons -->
    <accordion class="acc-wrapper">
      <template v-slot:title>
        <h3 class="acc-title">Buttons</h3>
      </template>
      <template v-slot:content>
        <div class="col-content-wrapper">
          <h4>Primary</h4>
          <p> Use this button for any primary action.</p>
          <router-link class="link link-btn splash-btn" to="/design-system">
            <div class="nav-link_text">Connect with me!</div>
          </router-link>
          <div class="col-2">
            <div class="column">
              <h6 class="margin-top">Default State</h6>
              <ul>
                <li>min-width: 300px;</li>
                <li>background: var(--light);</li>
                <li>color: var(--text);</li>
                <li>border: 2px solid var(--heavy);</li>
                <li>margin: 20px 0 0;</li>
                <li>padding: 20px;</li>
                <li>transiton: var(--transition-faster)</li>
              </ul>
            </div>
            <div class="column">
              <h6 class="margin-top">Hover State</h6>
              <ul>
                <li>min-width: 300px;</li>
                <li>background: var(--off);</li>
                <li>color: var(--text);</li>
                <li>border: 2px solid var(--text);</li>
                <li>margin: 20px 0 0;</li>
                <li>padding: 20px;</li>
                <li>transform: transition(3px, -3px);</li>
                <li>box-shadow: -3px 3px 0 var(--heavy);</li>
              </ul>
            </div>
          </div>
          
        </div>
      </template>
    </accordion>

    <!-- Colors -->
    <accordion class="acc-wrapper">
      <template v-slot:title>
        <h3 class="acc-title">Colors</h3>
      </template>
      <template v-slot:content>
        <div class="col-content-wrapper flex-row">
          <div class="colors-col">
            <h4>Light Theme</h4>
            <ul class="grid">
              <!-- color line 1 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #1d1d1d"></div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>
                    --text
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #1d1d1d
                  </div>
                </div>
              </li>
              <!-- color line 2 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #e9e9e9">

                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--btn-text
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #e9e9e9
                  </div>
                </div>
              </li>
              <!-- color line 3 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #1263ae">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--heavy,
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #1263ae
                  </div>
                </div>
              </li>
              <!-- color line 4 -->
              <li class="grid-row">
                <div class="color-block" style="background-color:  #00519d">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--heavy-op                </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #00519d
                  </div>
                </div>
              </li>
              <!-- color line 5 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #e2e8ff">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--light
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #e2e8ff
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #fffaffbd">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--backdrop
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #fffaffbd
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #ffffffb2">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--menuBack
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #ffffffb2
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #b8d9ff">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--off
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #b8d9ff
                  </div>
                </div>
              </li>
              <!-- color line 7 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #a9b1c4">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--outline
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #a9b1c4
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
          <div class="colors-col">
            <h4>Dark Theme</h4>
            <ul class="grid">
              <!-- color line 1 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #e9e9e9"></div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>
                    --text
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #e9e9e9
                  </div>
                </div>
              </li>
              <!-- color line 2 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #e9e9e9">

                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--btn-text
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #e9e9e9
                  </div>
                </div>
              </li>
              <!-- color line 3 -->
              <li class="grid-row">
                <div class="color-block" style="background-color: #5e9cff">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--heavy,
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #5e9cff
                  </div>
                </div>
              </li>
              <!-- color line 4 -->
              <li class="grid-row">
                <div class="color-block" style="background-color:  #9fc4fc">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--heavy-op                </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #9fc4fc
                  </div>
                </div>
              </li>
              <!-- color line 5 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #1c2755">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--light
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #1c2755
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #1f1d1fbf">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--backdrop
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #1f1d1fbf
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #00000080">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--menuBack
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #00000080
                  </div>
                </div>
              </li>
              <!-- color line 6 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #1d1d1d">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--off
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #1d1d1d
                  </div>
                </div>
              </li>
              <!-- color line 7 -->
              <li class="grid-row">
                <div class="color-block" style="
                  background-color: #454b59">
                </div>
                <div class="color-content">
                  <div class="color-item">
                    <div class="color-label">NAME</div>--outline
                  </div>
                  <div class="color-item">
                    <div class="color-label">HEX</div>
                    #454b59
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </template>
    </accordion>

    <!-- Nav -->
    <accordion class="acc-wrapper">
      <template v-slot:title>
        <h3 class="acc-title">Nav</h3>
      </template>
      <template v-slot:content>
        <div class="col-content-wrapper">
          <p>The navigation is a component implemented across all pages. It is the key tool for a consistant, responsive navigation that adapts to all user endpoints. The naviagtion breaks down into two main areas:</p>
          <div class="rule-thick"></div>

          <h4>Header</h4>
          
          <div class="header-wrapper">
            
            <div class="header-content">
              <p>The header applys to all areas and allows the user to navigate pages and control whether they are in light mode or dark mode of the web app.</p>
              <div class="rule-thin"></div>

              <h6>Desktop</h6>
              <div class="header-entries">
                <div class="nav_entry logo-link_entry">
                  <h5>Logo Link</h5>
                  <p>The logo link in the top left will take the user to the home page. It also spins 360 degrees clockwise on hover state. </p>
                  <div class="logo-div"><Logo /></div>
                </div>

                <div class="nav_entry nav-link_entry">
                  <h5>Nav Links</h5>
                  <p>The nav links take the user directly to the associated page. See the different states labeled below.</p>
                  <div class="links links-hor nav_ds-display">
                    
                    <div class="nav-link_ds">
                      <router-link class="link link-btn link-btn-hor" to="/">
                        <div class="nav-link_text">Home</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <path
                            d="M31.14642,16.14641,16.70709,1.70708a1,1,0,0,0-1.41419,0L10,7V4.5A.5.5,0,0,0,9.5,4h-3a.5.5,0,0,0-.5.5V11L.85357,16.14641A.5.5,0,0,0,1.20709,17H5V32h8V23h6v9h8V17H30.7929A.5.5,0,0,0,31.14642,16.14641Z"
                          />
                        </svg>
                      </router-link>
                      <h6>default</h6>
                    </div>

                    <div class="nav-link_ds">
                      <router-link class="link link-btn link-btn-hor router-link-hover" to="/">
                      <div class="nav-link_text">Portfolio</div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M28.4497,8H23V7.55029A3.55032,3.55032,0,0,0,19.4497,4H12.55035A3.55033,3.55033,0,0,0,9,7.55029V8H3.55029A3.55032,3.55032,0,0,0,0,11.55029V15.5H7v-.96A.54.54,0,0,1,7.54,14h.92a.54.54,0,0,1,.54.54v.96H23v-.96a.54.54,0,0,1,.54-.54h.92a.54.54,0,0,1,.54.54v.96h7V11.55029A3.55032,3.55032,0,0,0,28.4497,8ZM11,7.55029A1.55207,1.55207,0,0,1,12.55035,6H19.4497A1.552,1.552,0,0,1,21,7.55029V8H11Z"
                        />
                        <path
                          d="M25,17.46a.54.54,0,0,1-.54.54h-.92a.54.54,0,0,1-.54-.54V16.5H9v.96a.54.54,0,0,1-.54.54H7.54A.54.54,0,0,1,7,17.46V16.5H0V28.44965A3.55033,3.55033,0,0,0,3.55029,32H28.4497A3.55033,3.55033,0,0,0,32,28.44965V16.5H25Z"
                        />
                      </svg>
                    </router-link>
                      <h6>hover</h6>
                    </div>

                    <div class="nav-link_ds">
                      <router-link class="link link-btn link-btn-hor" to="/design-system">
                        <div class="nav-link_text">About</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <path
                            d="M22.38942,17.33594a8.99411,8.99411,0,0,1-12.77881,0,16.08389,16.08389,0,0,0-7.45264,6.664,15.97507,15.97507,0,0,0,27.68408,0A16.08387,16.08387,0,0,0,22.38942,17.33594Z"
                          />
                          <circle cx="16" cy="11" r="7.2" />
                        </svg>
                      </router-link>
                      <h6>focused</h6>
                    </div>
                    
                  </div>
                  
                </div>
                <div class="nav_entry toggler_entry">
                  <h5>Light/Dark Mode Toggler</h5>
                  <p>The mode toggler will switch the theme from a light mode theme to a dark mode theme or vise versa.</p>
                  <theme-button class="theme-desktop theme-btn_sys nav_ds-display" />
                </div>
              </div>
            </div>
            
          </div>
          <div class="rule-thin"></div>
          <h6>Tablet & Mobile</h6>
          <div class="mobile-menu-entries">
            <div class="mobile-menu-entry burger-wrap">
              <h5>Burger Menu</h5>
              <p>The burger menu appears on the screen in the top right corner when the screen width is 960 px or less. The desktop menu is hidden simultaneously.</p>
              <div class="burger-states">
                <div class="burger-state">
                  <BurgerCopy />
                  <h6>default</h6>
                </div>
                <div class="burger-state">
                  <BurgerCopy class="burger-hover"/>
                  <h6>hover</h6>
                </div>
                <div class="burger-state">
                  <BurgerCopy class="burger-focused" />
                  <h6>focused</h6>
                </div>
              </div>
            </div>
            <div class="mobile-menu-entry">
              <h5>Side Panel</h5>
              <p>The Side Panel appears when the user clicks the burger menu. This side panel can only be shown on screen sizes 960 px and smaller.
              </p>
              <div class="sidebar-panel-ds">
                <div class="sidebar-top">
                  <Logo />
                  <div class="mobile-links">
                    <router-link class="link link-btn" to="/" @click="toggle">
                      <div class="nav-link_text">Home</div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M31.14642,16.14641,16.70709,1.70708a1,1,0,0,0-1.41419,0L10,7V4.5A.5.5,0,0,0,9.5,4h-3a.5.5,0,0,0-.5.5V11L.85357,16.14641A.5.5,0,0,0,1.20709,17H5V32h8V23h6v9h8V17H30.7929A.5.5,0,0,0,31.14642,16.14641Z"
                        />
                      </svg>
                    </router-link>
                    <router-link
                      class="link link-btn"
                      to="/portfolio"
                      @click="toggle"
                    >
                      <div class="nav-link_text">Portfolio</div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M28.4497,8H23V7.55029A3.55032,3.55032,0,0,0,19.4497,4H12.55035A3.55033,3.55033,0,0,0,9,7.55029V8H3.55029A3.55032,3.55032,0,0,0,0,11.55029V15.5H7v-.96A.54.54,0,0,1,7.54,14h.92a.54.54,0,0,1,.54.54v.96H23v-.96a.54.54,0,0,1,.54-.54h.92a.54.54,0,0,1,.54.54v.96h7V11.55029A3.55032,3.55032,0,0,0,28.4497,8ZM11,7.55029A1.55207,1.55207,0,0,1,12.55035,6H19.4497A1.552,1.552,0,0,1,21,7.55029V8H11Z"
                        />
                        <path
                          d="M25,17.46a.54.54,0,0,1-.54.54h-.92a.54.54,0,0,1-.54-.54V16.5H9v.96a.54.54,0,0,1-.54.54H7.54A.54.54,0,0,1,7,17.46V16.5H0V28.44965A3.55033,3.55033,0,0,0,3.55029,32H28.4497A3.55033,3.55033,0,0,0,32,28.44965V16.5H25Z"
                        />
                      </svg>
                    </router-link>
                    <router-link class="link link-btn" to="/about" @click="toggle">
                      <div class="nav-link_text">About</div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M22.38942,17.33594a8.99411,8.99411,0,0,1-12.77881,0,16.08389,16.08389,0,0,0-7.45264,6.664,15.97507,15.97507,0,0,0,27.68408,0A16.08387,16.08387,0,0,0,22.38942,17.33594Z"
                        />
                        <circle cx="16" cy="11" r="7.2" />
                      </svg>
                    </router-link>
                    <router-link class="link link-btn" to="/contact" @click="toggle">
                      <div class="nav-link_text">Contact</div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path
                          d="M28.4497,2H3.55028A3.55032,3.55032,0,0,0,0,5.55029V22.44971A3.55032,3.55032,0,0,0,3.55028,26H20.60351c.0166.01917.02533.041.04376.05945l5.64563,5.64563A1,1,0,0,0,28,30.998V26h.44971A3.55032,3.55032,0,0,0,32,22.44971V5.55029A3.55032,3.55032,0,0,0,28.4497,2ZM4,8.5H24v1H4Zm16,11H4v-1H20Zm8-5H4v-1H28Z"
                        />
                      </svg>
                    </router-link>
                  </div>
                </div>

                <theme-button class="mobile-theme" />
              </div>
            </div>

          </div>
          

          <h4>Footer</h4>
          
        </div>
      </template>
    </accordion>

    <!-- Typography -->
    <accordion class="acc-wrapper">
      <template v-slot:title>
        <h3 class="acc-title">Typography</h3>
      </template>
      <template v-slot:content>
        <div class="col-content-wrapper">
          
          <h1>Header 1</h1>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 800;</li>
            <li>font-size: 2rem;</li>
            <li>letter-spacing: 2px;</li>
          </ul>
          <div class="rule-thin"></div>
          <h2>Header 2</h2>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 700;</li>
            <li>font-size: 1.75rem;</li>
            <li>text-transform: uppercase;</li>
            <li>letter-spacing: 4px;</li>
          </ul>
          <div class="rule-thin"></div>
          <h3>Header 3</h3>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 600;</li>
            <li>font-size: 1.5rem;</li>
          </ul>
          <div class="rule-thin"></div>
          <h4>Header 4</h4>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 500;</li>
            <li>font-size: 1.25rem;</li>
            <li>text-transform: uppercase;</li>
            <li>letter-spacing: 3px;</li>
            <li>color: var(--heavy);</li>
          </ul>
          <div class="rule-thin"></div>
          <h5>Header 5</h5>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 400;</li>
            <li>font-size: 1.1rem;</li>
          </ul>
          <div class="rule-thin"></div>
          <h6>Header 6</h6>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 200;</li>
            <li>font-size: 0.75rem;</li>
            <li>text-transform: uppercase;</li>
            <li>letter-spacing: 4px;</li>
          </ul>
          <div class="rule-thin"></div>
          <p>
            <b>Paragraph</b>,  lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
            accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
            itaque consectetur impedit?
          </p>
          <ul>
            <li>font-family: Raleway;</li>
            <li>font-weight: 300;</li>
            <li>font-size: 1rem;</li>
          </ul>
        </div>
      </template>
    </accordion>


  </div>
  <Foot id="foot" />

</template>
<script>
import Accordion from "@/components/Accordion";
import Logo from "@/components/Logo.vue";
import ThemeButton from "@/components/ThemeButtonCopy.vue";
import Foot from "@/components/Footer.vue";
import BurgerCopy from "@/components/menu/BurgerCopy.vue";



export default {
  components: {
    Accordion,
    Logo,
    ThemeButton,
    BurgerCopy, 
    Foot
  },
};
</script>
<style>
/* @import "../styles/Accordion.css"; */

.system-wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100% - 120px);
  margin: 0px 20px 0px 100px;
  padding: 20px;
}
.acc-wrapper {
  margin: 10px 0; /* 2 */
  padding: 0; /* 3 */
  text-transform: none;
  background: var(--menuBack);
  border-radius: 10px;
  overflow: hidden;
}
.system-wrapper p, .system-wrapper ol, .system-wrapper ul {
  max-width: 600px;
}
.acc-control {
  transition: var(--transtion);

}
.acc-title {
  margin: 0;
  padding-left: 20px;

}
.collapsed-content {
  max-height: 0px;
  transition: max-height 0.25s ease-out;
  overflow: hidden;
}
.col-content-wrapper {
  padding: 30px 40px 30px 20px;
  

}
.isOpenNow {
  max-height: 2000px;
  transition: max-height 0.35s ease-in;
}
.grid {
  padding: 0;
  margin-top:  10px;
}
.grid-row {
  list-style: outside none none;
  display: flex;
  height: 40px;
  align-items: stretch;
  justify-content: stretch;
  width: auto;
  padding: 0;
}
.color-block{
  min-width: 39px;
  height: 39px;
}
.color-content {
  border-bottom: 1px solid var(--outline);
  height: 100%;
  display: flex;
  align-items: center;
  width: auto;
  justify-content: stretch;
  /* padding-left: 40px; */
}
.color-item {
  padding-left: 20px;
  min-width: 175px;
  display: flex;
  flex-direction: row;

  /* border-right: 1px solid var(--outline); */
}
.color-label {
  margin: 0 10px;
  padding: 3px 6px;
  background-color: var(--light);
  color: var(--heavy);
  letter-spacing: 3px;
  font-size: 10px;
  font-weight:5600;
  border-radius: 5px;
}
.col-content-wrapper ul {
  list-style-type: disc;
}
.margin-top {
  margin-top: 20px;
}
.col-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column {
  margin-left: 20px;
  width: 50%;
}
.rule-thin {
  width: 100%;
  height: 1px;
  background-color: var(--outline);
  margin: 25px 0;
}
.rule-thick {
  width: 100%;
  height: 5px;
  background-color: var(--outline-light);
  margin: 35px 0;
}
.header-wrapper {
  display: flex;
  flex-direction: row;
  /* justify-content: flex-end; */
}
.header-wrapper img {
  width: 50px;
  margin-right: 20px;
}
.logo-div {
  width: 40px;
  margin: 0 20px 20px;
}
.links-hor {
  flex-direction: row;
  justify-content: flex-start;
}
.link-btn-hor {
  margin: 10px 10px 20px;
}
.theme-btn_sys {
  align-items: flex-start;
}
.flex-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap:10px;
}
.colors-col h4 {
  padding-top: 10px;
}
.header-entries {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
  max-width: calc(100vw - 200px);
}
.mobile-menu-entries {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
  max-width: calc(100vw - 200px); */
  display: flex;
  flex-direction: row;
}
.burger-wrap {
  padding-right: 10px;
}
@media (max-width: 960px) {
  .nav_ds-display {
    display: flex;
    position: relative;
    z-index: 0;
  }
  .system-wrapper {
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
    margin: 0px 20px;
    padding: 20px;
  }
}
#burgerCopy {
  display: flex;
  position: relative;
  width: 60px;
  align-items: center;
  padding: 7px 10px 10px;
  margin: 10px;
  height: auto;
  z-index: 100;
  background: var(--light);
  border-radius: 5px;
  transition: var(--transition);
  border: 2px solid var(--heavy);
}
#burgerCopy:hover {
  border-color: var(--text);
  background: var(--off);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px 0 var(--nav-item_shadow);
}
.nav-link_ds {
  text-align: center;
}
.burger-states {
  display: flex;
  flex-direction: row;
}
.burger-state {
  margin: 0 30px 0 0;
}
.burger-state h6 {
  margin-top: 20px;
  text-align: center;
}
.burger-hover > #burgerCopy {
  border-color: var(--text);
  transform: translate(3px, -3px);
  box-shadow: -3px 3px 0 var(--nav-item_shadow);
}
.burger-focused > #burgerCopy {
  border: 2px solid var(--heavy);
  background: var(--off);
}
.sidebar-panel-ds {
  overflow-y: auto;
  background-color: var(--light);
  position: relative;
  height: 100vh;
  z-index: 999;
  padding: 0 20px 0 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>


